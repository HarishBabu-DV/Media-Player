  import { serverURL } from "./baseURL";  
  import commonAPI from "./commonAPI";
  export const uploadVideoAPI=async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
  }

  export const getAllVideos=async ()=>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
  }

  export const deleteVideo=async (id) => {
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
  }

  export const updateVideo=async (id,reqBody) => {
    return await commonAPI('PUT',`${serverURL}/videos/${id}`,reqBody);
  }