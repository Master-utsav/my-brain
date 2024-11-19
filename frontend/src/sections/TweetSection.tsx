import TweetCard from '@/components/card/TweetCard'
import { tweetData } from '@/constants'
import React from 'react'
import { motion } from 'framer-motion'

const TweetSection: React.FC = () => {
  return (
    <section className='w-full min-h-[200vh] dark:bg-black bg-white p-5'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {tweetData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}  
            animate={{ opacity: 1, y: 0 }}    
            transition={{ delay: idx * 0.1, duration: 0.5 }} 
          >
            <TweetCard cardDetails={item} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TweetSection
