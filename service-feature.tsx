import Image from "next/image"

interface ServiceFeatureProps {
  icon: "smile" | "wrench" | "clock"
  title: string
}

export function ServiceFeature({ icon, title }: ServiceFeatureProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2">
        {icon === "smile" && <Image src="/images/icon-polite.png" alt="Polite" width={40} height={40} />}
        {icon === "wrench" && <Image src="/images/icone-professional.png" alt="Professional" width={40} height={40} />}
        {icon === "clock" && <Image src="/images/icon-fast.png" alt="Fast" width={40} height={40} />}
      </div>
      <span className="text-white font-bold">{title}</span>
    </div>
  )
}
