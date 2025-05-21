import { NextResponse } from "next/server"

// Tipo para los datos del formulario de cita
type AppointmentFormData = {
  name: string
  email: string
  phone: string
  service: string
  address: string
  date: string
  time: string
  notes?: string
}

export async function POST(request: Request) {
  try {
    // Obtener los datos del formulario
    const data: AppointmentFormData = await request.json()

    // Validar los datos requeridos
    if (!data.name || !data.email || !data.phone || !data.service || !data.address || !data.date || !data.time) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // Simular procesamiento (para desarrollo)
    console.log("Datos de la cita recibidos:", data)

    // En un entorno real, aquí guardaríamos en la base de datos
    // y enviaríamos el correo electrónico de confirmación

    // Responder con éxito
    return NextResponse.json({
      success: true,
      message: "Cita reservada correctamente",
    })
  } catch (error) {
    console.error("Error al procesar la reserva de cita:", error)

    // Asegurarnos de devolver siempre una respuesta JSON válida
    return NextResponse.json(
      {
        error: "Error al procesar la solicitud",
        details: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}
