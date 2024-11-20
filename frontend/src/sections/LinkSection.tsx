import LinkCard from '@/components/card/LinkCard'
import { linkData } from '@/constants'
import { motion } from 'framer-motion'
import React from 'react'

const LinkSection: React.FC = () => {
  return (
    <section className="w-full min-h-[200vh] dark:bg-black bg-white p-5 px-8">
    <div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
      {linkData.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
        >
          <LinkCard key={item.cardId} cardDetails={item} />
        </motion.div>
      ))}
    </div>
  </section>
  )
}

export default LinkSection
