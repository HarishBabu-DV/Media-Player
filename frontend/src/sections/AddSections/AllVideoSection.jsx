import React, { useContext, useEffect, useState } from 'react'
import { Skeleton } from '../../components/ui/skeleton'
import { BentoGrid,BentoGridItem } from '../../components/ui/bento-grid'
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
    IconArrowWaveRightUp,
    IconBoxAlignTopLeft,
    IconBoxAlignRightFilled
} from "@tabler/icons-react"
import { getAllVideos } from '../../services/allAPI'
import { videoUploadStatus } from '../../context/Context'

const AllVideoSection = () => {

  const {videoStatus}=useContext(videoUploadStatus)
  const [allVideos,setAllVideos]=useState([])
  const fetchAllVideos=async () => {
    const result =await getAllVideos();
    setAllVideos(result.data)
  }
  console.log(allVideos);
  
  useEffect(function(){
    fetchAllVideos()
  },[videoStatus]
  )
  
  return (
    <section className='px-3 py-2'>
        <BentoGrid className="max-w-4xl mx-auto">
          {
            allVideos.map((item,i)=>{
              return <BentoGridItem 
                key={i}
                title={item?.name}
                header={item.embedURL || <Skeleton className={'h-full'}/>}
                className={`bg-transparent border-2 border-orange-500 ${ i === 3 || i === 6 ? "md:col-span-2" : ""}`}
              />

            })
          }
        </BentoGrid>
    </section>
  )
}

export default AllVideoSection
const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton className="h-full"/>,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton className="h-full" />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton className="h-full" />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton className="h-full" />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton className="h-full" />,
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: <Skeleton className="h-full" />,
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton className="h-full" />,
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];