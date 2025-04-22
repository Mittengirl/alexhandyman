interface SectionToolsProps {
  section: "hero" | "services" | "reviews" | "contact"
}

export function SectionTools({ section }: SectionToolsProps) {
  // Removing this component's content as we'll position tools exactly as in the example
  return null
}
