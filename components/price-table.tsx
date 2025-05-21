import { Check } from "lucide-react"

export default function PriceTable() {
  const services = [
    {
      category: "Cortes",
      items: [
        { name: "Corte de cabello dama", price: "$250" },
        { name: "Corte de cabello caballero", price: "$180" },
        { name: "Corte de cabello niños", price: "$150" },
        { name: "Corte de puntas", price: "$150" },
        { name: "Fleco", price: "$80" },
      ],
    },
    {
      category: "Color",
      items: [
        { name: "Tinte completo (incluye producto)", price: "Desde $650" },
        { name: "Retoque de raíz", price: "$450" },
        { name: "Mechas/Rayos", price: "Desde $800" },
        { name: "Balayage", price: "Desde $1,200" },
        { name: "Decoloración", price: "Desde $500" },
      ],
    },
    {
      category: "Peinados",
      items: [
        { name: "Peinado básico", price: "$350" },
        { name: "Peinado para evento", price: "$500" },
        { name: "Trenzado", price: "Desde $200" },
        { name: "Recogido", price: "$450" },
        { name: "Brushing", price: "$300" },
      ],
    },
    {
      category: "Tratamientos",
      items: [
        { name: "Hidratación profunda", price: "$400" },
        { name: "Tratamiento anticaída", price: "$500" },
        { name: "Tratamiento reparador", price: "$450" },
        { name: "Botox capilar", price: "$800" },
        { name: "Keratina", price: "Desde $1,000" },
      ],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((category, index) => (
        <div key={index} className="bg-purple-50 rounded-xl shadow-md overflow-hidden">
          <div className="bg-purple-600 text-white p-4">
            <h3 className="text-xl font-bold">{category.category}</h3>
          </div>
          <div className="p-4">
            <ul className="space-y-3">
              {category.items.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center border-b border-purple-100 pb-2">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-purple-600 mr-2" />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-bold text-purple-800">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
