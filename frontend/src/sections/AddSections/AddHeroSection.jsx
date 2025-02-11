import React, { useEffect, useState } from 'react'
import { FolderUp } from 'lucide-react';
import { Label } from "../../components/ui/label"
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } 

from "../../components/ui/dialog"
import { DialogClose } from '../../components/ui/dialog';
import { toast } from 'sonner';
import { uploadVideoAPI } from '../../services/allAPI';
import { useContext } from 'react';
import { videoUploadStatus } from '../../context/Context';
  
const AddHeroSection = () => {
    
    const [videoDetails,setVideoDetails]=useState({
        name:'',
        videoURL:'',
        embedURL:''
    })
    const {videoStatus,setVideoStatus}=useContext(videoUploadStatus)
    const handleSubmit=async (event)=>{
        event.preventDefault()
        console.log(videoDetails);
        const {name,videoURL,embedURL}=videoDetails
        if(!name || !videoURL||!embedURL){
           toast.warning("Please fill details")
        }else{
            const res =await uploadVideoAPI(videoDetails);
            console.log(res);
            setVideoStatus(!videoStatus)
            console.log(videoDetails);
            
            if(res.status===201){
                toast.success("video uploaded succesfully")
            }
        }
    }
    
 
  return (
    <section className='my-5 '>
        <div className='flex'>
            <div className='flex items-center gap-x-3 font-semibold text-4xl'>
                <h3>Upload new video</h3>
              
                <Dialog>
                    <DialogTrigger asChild>
                        <FolderUp />
                    </DialogTrigger>
                    <DialogContent className='sm:max-w-[425px] bg-black rounded-lg'>
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profie here. Click save when you're done
                            </DialogDescription>
                        </DialogHeader>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="email" className='text-white'>
                                    Name
                                </Label>
                                <Input type="text" id="name" className='w-fit text-white'
                                name='name' placeholder='Enter name'
                                onChange={(e)=>{
                                setVideoDetails({
                                ...videoDetails,
                                name:e.target.value
                                })
                                
                                }}
                              
                                
                                />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="video" className='text-white'>
                                    Video URL
                                </Label>
                                <Input type="text" id='video' className='w-fit text-white'
                                name='video' placeholder='Enter name'
                                onChange={(e)=>{
                                setVideoDetails({
                                ...videoDetails,
                                videoURL:e.target.value,
                                embedURL:e.target.value.replace(/youtu.be/g,"youtube.com/embed")
                                })
                             
                                }}/>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type='submit' onClick={handleSubmit}>Save</Button>
                            <DialogClose className='text-white'>
                                Close
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            
        </div>
        <div>
        {
            videoDetails.embedURL && 
            <iframe width="560"
            height="315" 
            src={videoDetails.embedURL}
             title="YouTube video player" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
       }
        </div>
        
    </section>
  )
}

export default AddHeroSection