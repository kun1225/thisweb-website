import { IconType } from "react-icons"

const ProblemCard = ({
  icon : Icon,
  title,
  desc,
}: {
  icon: IconType,
  title: string,
  desc: string
}) => {
  return (
    <div className="flex-1 basis-40 p-4 md:p-8 shadow-sm shadow-gray-500 rounded-md flex flex-col items-center justify-center">
      <Icon className="w-8 h-8 mb-2 text-primary"/>
      <p className="text-secondary">{title}</p>
      <p className="text-center text-xs">{desc}</p>
    </div>
  )
}

export default ProblemCard