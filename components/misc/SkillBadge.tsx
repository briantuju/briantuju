const skillThemeVariants = {
  blue: 'text-blue-100 bg-blue-500',
  sky: 'text-sky-100 bg-sky-500',
  yellow: 'text-yellow-100 bg-yellow-500',
  orange: 'text-orange-100 bg-orange-500',
}

export type SkillBadgeType = {
  text: string
  theme: keyof typeof skillThemeVariants
}

const SkillBadge = ({ text, theme }: SkillBadgeType) => {
  return (
    <div
      className={`min-w-max p-4 font-bold text-xl rounded-full ${skillThemeVariants[theme]}`}
    >
      {text}
    </div>
  )
}

export default SkillBadge
