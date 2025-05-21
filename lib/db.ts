import { Pool } from "pg"

// Crear una instancia de Pool para la conexión a PostgreSQL
let pool: Pool | null = null

// Inicializar la conexión a la base de datos
function getPool() {
  if (!pool) {
    // Verificar si tenemos la variable de entorno DATABASE_URL
    const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL

    if (!connectionString) {
      throw new Error("No se encontró la variable de entorno DATABASE_URL o POSTGRES_URL")
    }

    pool = new Pool({
      connectionString,
      ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
    })
  }
  return pool
}

// Función para crear la tabla de citas si no existe
export async function initializeDatabase() {
  const client = await getPool().connect()

  try {
    // Crear la tabla de citas si no existe
    await client.query(`
      CREATE TABLE IF NOT EXISTS appointments (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        service VARCHAR(100) NOT NULL,
        address TEXT NOT NULL,
        appointment_date DATE NOT NULL,
        appointment_time TIME NOT NULL,
        notes TEXT,
        status VARCHAR(50) DEFAULT 'pendiente',
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `)
    console.log("Base de datos inicializada correctamente")
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error)
  } finally {
    client.release()
  }
}

// Función para guardar una cita en la base de datos
export async function saveAppointment(appointmentData: {
  name: string
  email: string
  phone: string
  service: string
  address: string
  date: string
  time: string
  notes?: string
}) {
  // Inicializar la base de datos primero
  await initializeDatabase()

  const client = await getPool().connect()

  try {
    const query = `
      INSERT INTO appointments (name, email, phone, service, address, appointment_date, appointment_time, notes, created_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
      RETURNING id
    `

    const values = [
      appointmentData.name,
      appointmentData.email,
      appointmentData.phone,
      appointmentData.service,
      appointmentData.address,
      appointmentData.date,
      appointmentData.time,
      appointmentData.notes || null,
    ]

    const result = await client.query(query, values)
    return result.rows[0].id
  } finally {
    client.release()
  }
}

// Función para obtener todas las citas
export async function getAllAppointments() {
  await initializeDatabase()
  const client = await getPool().connect()

  try {
    const result = await client.query("SELECT * FROM appointments ORDER BY appointment_date, appointment_time")
    return result.rows
  } finally {
    client.release()
  }
}

// Función para obtener una cita por ID
export async function getAppointmentById(id: number) {
  await initializeDatabase()
  const client = await getPool().connect()

  try {
    const result = await client.query("SELECT * FROM appointments WHERE id = $1", [id])
    return result.rows[0] || null
  } finally {
    client.release()
  }
}

// Función para actualizar el estado de una cita
export async function updateAppointmentStatus(id: number, status: string) {
  await initializeDatabase()
  const client = await getPool().connect()

  try {
    const result = await client.query("UPDATE appointments SET status = $1 WHERE id = $2 RETURNING *", [status, id])
    return result.rows[0] || null
  } finally {
    client.release()
  }
}
