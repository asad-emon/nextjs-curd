import { useState } from "react"
const minusIcon = '-'
const plusIcon = '+'

export default function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current)

  return (
    <div className="shadow-sm dark:shadow-gray-600 cursor-pointer" onClick={toggleExpanded}>
      <div className="px-6 py-2 text-left items-center select-none flex justify-between flex-row">
        <h5 className="flex-1">
          {title}
        </h5>
        <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div>
      </div>
      <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${expanded ? "max-h-200" : "max-h-0"}`}>
        <div className="p-4 mb-4 text-left border dark:text-white dark:border-gray-600"
            dangerouslySetInnerHTML={{ __html: content ?? 'No content' }}
        >
        </div>
      </div>
    </div>
  )
}