import Image from "next/image"

interface ServicePackageProps {
  title: string
  image: string
  description: string
}

export function ServicePackage({ title, image, description }: ServicePackageProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-48 relative mb-4 overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold text-orange-500 mb-2">{title}</h3>
      <p className="text-white text-center">{description}</p>
    </div>
  )
}
