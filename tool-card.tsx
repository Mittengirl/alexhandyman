import Image from "next/image"

interface ToolCardProps {
  title: string
  image: string
  description: string
}

export function ToolCard({ title, image, description }: ToolCardProps) {
  return (
    <div className="flex flex-col items-center">
      <Image src={image || "/placeholder.svg"} alt={title} width={100} height={100} className="mb-4" />
      <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  )
}
