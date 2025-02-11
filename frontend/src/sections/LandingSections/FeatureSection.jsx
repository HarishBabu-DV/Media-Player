import React from 'react'
import { Card,CardContent, CardDescription, CardTitle } from '../../components/ui/card'
import { InteractiveHoverButton } from '../../components/ui/interactive-hover-button'
const FeatureSection = () => {
  return (
   <>
    
     <div className='grid grid-cols-3 justify-items-center  gap-x-8 px-20 py-6 
                    max-lg:py-0 max-lg:px-0
                    max-md:grid-cols-1 max-md:px-0 max-md:gap-y-4'>
              {
                 dummyMusicDetails.map((musicdetails,index)=>
                     <Card className='flex 
                                     flex-col items-center gap-y-4
                                     py-0 px-0 border-black w-3/4 border-2 '>
                                        
                         <CardContent className='w-full h-1/2 p-0'>
                             <img src={musicdetails.img} alt="image" className='bg-black w-full h-full' />
                         </CardContent>

                             <CardTitle>
                                 {musicdetails.title}
                             </CardTitle>

                             <CardDescription className='text-black px-2 max-lg:text-[.8rem]'>
                                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt libero natus maiores hic aliquam quo omnis dolore voluptatibus minus? Tempora nemo, deleniti doloremque laudantium ducimus aliquam labore tenetur ab ut.
                             </CardDescription>
                             <InteractiveHoverButton className='bg-orange-500 mb-2 text-sm'>
                                 Play Now
                             </InteractiveHoverButton>

                     </Card>
                 )
              }
      </div>
   
   </>
  )
}

export default FeatureSection

export const dummyMusicDetails=[
    {
        id:1,
        img:"https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif",
        title:"Any Time",
        para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat labore hic commodi aspernatur possimus corrupti, a veniam laboriosam voluptate, qui quaerat dolor amet excepturi, nihil ut corporis quis quisquam maiores."
    },
    {
        id:2,
        img:"https://cdn.pixabay.com/animation/2023/10/10/13/26/13-26-45-476_512.gif",
        title:"Any Where",
        para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat labore hic commodi aspernatur possimus corrupti, a veniam laboriosam voluptate, qui quaerat dolor amet excepturi, nihil ut corporis quis quisquam maiores."
    },
    {
        id:3,
        img:"https://cdn.pixabay.com/animation/2023/10/22/03/31/03-31-40-761_512.gif",
        title:"Any Day",
        para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat labore hic commodi aspernatur possimus corrupti, a veniam laboriosam voluptate, qui quaerat dolor amet excepturi, nihil ut corporis quis quisquam maiores."
    }
    
]