import clsx from "clsx"
import { motion } from "motion/react"

interface Props {
  item: {
    value: string,
    label: string,
    img: string,
  },
  isLastIndex: boolean,
  flexDirection: 'row' | 'column'
}

export function AddressItem({ item, isLastIndex, flexDirection }: Props) {
  return (
    <motion.span
      layout="position"
      style={{ fontSize: 24 }}
      className="cursor-pointer address relative group font-medium"
    >
      <span className="text-black black">
        {item.value}
        {flexDirection == 'row' && !isLastIndex && ','}
      </span>
      <span className="text-blue-700 blue">
        {item.value}
        {flexDirection == 'row' && !isLastIndex && ','}
      </span>
      <div 
        className={clsx(
          "absolute min-w-40 w-full -top-44 left-0 flex justify-center scale-50 opacity-0 translate-y-20 duration-300",
          flexDirection == 'row' && "group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-0 group-hover:z-50"
        )}
      >
        <img 
          alt={item.label} 
          src={item.img} 
          className="w-40 h-40 border-4 border-white -rotate-3 rounded-xl overflow-hidden"
        />
      </div>
      <span 
        className={clsx(
          "absolute left-0 w-full text-gray-400 text-center text-sm top-10 whitespace-nowrap scale-50 opacity-0 duration-300 uppercase -translate-y-4",
          flexDirection == 'row' && "group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-0"
        )}
      >
        {item.label}
      </span>
    </motion.span>
  )
}