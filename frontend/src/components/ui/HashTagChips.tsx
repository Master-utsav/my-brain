import { Chip } from '@nextui-org/react'

const HashTagChips = ({content = "masterutsav"} : {content?: string}) => {
  return (
    <Chip
        variant="faded"
        color="success"
        size='sm'
        className='font-noto-sans bg-green-300/20 dark:text-white-700 text-black-500'
      >
        <span className='opacity-70 pr-[1px]' >#</span>{content}
      </Chip>
  )
}

export default HashTagChips
