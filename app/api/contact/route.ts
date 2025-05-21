import { NextResponse } from "next/server"

// Tipo para los datos del formulario de contacto
type ContactFormData = {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function POST(request: Request) {
  try {
    // Obtener los datos del formulario
    const data: ContactFormData = await request.json()

    // Validar los datos requeridos
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // Simular procesamiento (para desarrollo)
    console.log("Datos del formulario de contacto recibidos:", data)

    // En un entorno real, aquí guardaríamos en la base de datos
    // y enviaríamos el correo electrónico

    // Responder con éxito
    return NextResponse.json({
      success: true,
      message: "Mensaje recibido correctamente",
    })
  } catch (error) {
    console.error("Error al procesar el formulario de contacto:", error)

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
