import { createContext, useState } from "react";

export const videoUploadStatus=createContext()
export const deleteVideoStatus=createContext();
export default function Context({children}){
    const [videoStatus,setVideoStatus]=useState(false)
    const [deleteStatus,setDeleteStatus]=useState(false)
    const [updateStatus, setUpdateStatus] = useState(false)
    return ( 
    <deleteVideoStatus.Provider value={{deleteStatus,setDeleteStatus}}>
        <videoUploadStatus.Provider value={{videoStatus,setVideoStatus,updateStatus,setUpdateStatus}}>
            {children}
        </videoUploadStatus.Provider>
    </deleteVideoStatus.Provider>
    )
}