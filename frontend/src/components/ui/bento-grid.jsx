import { Edit } from "lucide-react";
import { cn } from "../lib/utils"
import { Button } from "./button";
import { Trash } from "lucide-react";
import { deleteVideo, updateVideo } from "../../services/allAPI";
import { toast } from "sonner";
import { useContext } from "react";
import { deleteVideoStatus, videoUploadStatus } from "../../context/Context";
import { useState } from "react";
import { FolderUp } from 'lucide-react';
import { Label } from "./label"
import { Input } from './input';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } 

from "./dialog"


export const BentoGrid =({ className,children }) => {
 
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({ key, title, header,className,id}) => {
  const {deleteStatus,setDeleteStatus}=useContext(deleteVideoStatus)
  const {updateStatus,setUpdateStatus}=useContext(videoUploadStatus)
  const handleDelete=async (id)=>{
    const res=await deleteVideo(id);
    if(res.status===200){
      setDeleteStatus(!deleteStatus)
      toast.success("Deleted successfully")
    }else{
      toast.error("something went wrong")
    }
    console.log(res);
  }

  const [newVideoDetails,setNewVideoDetails]=useState({
    videoName:'',
    videoURL:'',
    embedURL:''
  })
  const handleUpdate=async (id) => {
    try {
      const res=await updateVideo(id,newVideoDetails);
      console.log(res);
      if(res.status===200){
        toast.success("updated successfully");
        setUpdateStatus(!updateStatus)
      }
      else{
        toast.error("something went wrong");
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:scale-105 hover:shadow-xl transition duration-200 shadow dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )} key={key}>
        <iframe src={header} frameborder="0" className="w-full h-full" />
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div
            className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div
            className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 flex justify-between items-center">
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
                                setNewVideoDetails({
                                  ...newVideoDetails,
                                  videoName:e.target.value,
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
                                setNewVideoDetails({
                                ...newVideoDetails,
                                videoURL:e.target.value,
                                embedURL:e.target.value.replace(/youtu.be/g,"youtube.com/embed")

                                })
                             
                                }}/>
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose className='text-white' onClick={()=>handleUpdate(id)}>
                              Update
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
             <Button className="bg-red-500" onClick={()=>handleDelete(id)}> <Trash /></Button>
          </div>
         </div>
    </div>
  );
};
