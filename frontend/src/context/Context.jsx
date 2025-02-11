import { createContext, useState } from "react";

export const videoUploadStatus=createContext()

export default function Context({children}){
    const [videoStatus,setVideoStatus]=useState(false)
    return  <videoUploadStatus.Provider value={{videoStatus,setVideoStatus}}>
            {children}
        </videoUploadStatus.Provider>
    
}