/** @format */
import { DataItemType } from '../types/types'

const ServiceItem = ({ data }: { data: DataItemType }) => {
  return (
    <div className='flex flex-col gap-3 w-2/3 md:items-center'>
      <div className=''>
        <img src={data.img} width={66} height={66} />
      </div>
      <div className='text-xl font-bold md:w-1/2 md:text-center'>
        <h2>{data.title}</h2>
      </div>
      <div className='text-sm text-gray-400 md:w-2/3  md:text-center'>
        <span>{data.desc}</span>
      </div>
    </div>
  )
}

export default ServiceItem
