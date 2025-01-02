import { motion } from "motion/react"
import { useState } from "react"
import { LocationSVG } from "./components/location-svg";
import { AddressItem } from "./components/address-item";
import { Credits } from "./components/credits";

function App() {
  const addresses = [
    {
      label: 'Deido Roundabout',
      title: 'street',
      img: 'street.webp'
    },
    {
      label: 'Douala',
      title: 'city',
      img: 'city.webp'
    },
    {
      label: 'Littoral',
      title: 'region',
      img: 'region.webp'
    },
    {
      label: '2450',
      title: 'zip',
      img: 'zip.webp'
    },
    {
      label: 'Cameroon',
      title: 'country',
      img: 'country.webp'
    },
  ]
  const fullAddress = addresses.reduce((a, b) => ( a + `${b.label}, `), '').slice(0, -2) ;
  
  const [flexDirection, setFlexDirection] = useState<'row' | 'column'>('row')

  return (
    <section className="w-full h-dvh flex items-center justify-center bg-gray-50">
      <Credits />
      <div className="fixed z-[99] bg-white flex items-center justify-center inset-0 md:hidden">
        <span className="text-lg">
          Please use a medium screen.
        </span>
      </div>

      <motion.section
        initial={{ x: -190, opacity: 0 }}
        animate={{ 
          x: flexDirection == 'row' ? -190 : -160,
          opacity: flexDirection == 'row' ? 0 : 1
        }} 
        transition={{ type: "tween", duration: .3 }}
        className="absolute"
      >
        {addresses.map((item, index) => (
          <span
            key={index}
            className="flex items-center h-9 uppercase"
          >
            <span className="text-sm">
              {item.title}
            </span>
          </span>
        ))}
      </motion.section>
      <section 
        className="flex"
        style={{ flexDirection }}
      >
        {addresses.map((item, index, array) => (
          <AddressItem
            key={index}
            flexDirection={flexDirection}
            isLastIndex={(array.length - 1) == index}
            item={item} 
          />
        ))}
      </section>
      <footer className="fixed left-0 bottom-0 w-full h-14 bg-gray-100 flex items-center justify-center gap-4">
        <span
          style={{ boxShadow: '0px 0px 2px rgb(0 0 0 / 0.4)' }} 
          className="bg-white text-gray-600 rounded-lg p-2 text-sm"
        >
          {fullAddress}
        </span>
        <span 
          style={{ boxShadow: '0px 0px 2px rgb(0 0 0 / 0.4)' }} 
          onClick={() => setFlexDirection(flexDirection == 'row' ? 'column' : 'row')}
          className="bg-white text-gray-600 rounded-lg p-2 cursor-pointer"
        >
          <LocationSVG />
        </span>
      </footer>
    </section>
  )
}

export default App
