interface ReviewCardProps {
  name: string
  review: string
}

export function ReviewCard({ name, review }: ReviewCardProps) {
  return (
    <div className="flex flex-col bg-orange-400 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-blue-800 mb-3">{name}</h3>
      <p className="text-blue-800 text-sm">{review}</p>
    </div>
  )
}
