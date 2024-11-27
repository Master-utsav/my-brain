import LogoutModal from '@/components/modal/LogoutModal'
import React from 'react'

const EditProfileSection: React.FC = () => {
  return (
    <section className='w-full min-h-[200vh] dark:bg-black-[#121212] bg-white-[#f5f5f5]'>
      <div className="w-[50%] mx-auto rounded-lg dark:bg-black bg-white">
        <LogoutModal/>

      </div>
    </section>
  )
}

export default EditProfileSection
