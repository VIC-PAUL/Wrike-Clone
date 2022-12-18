import axios from "axios"

export const GetProjectData=async (email="pantuugurjar@gmail.com")=>{
try{
  let res=await axios.get(`https://busy-houndstooth-clam.cyclic.app/projects`);   
  let response=res.data.filter((el)=>{
    if(el.email===email){
        return el ;
    }
})
return response[0];
}
  catch(Err){
    console.log(Err)
  } 

}

export const GetProjectDataById=async (id)=>{
  try{
    let res=await axios.get(`https://busy-houndstooth-clam.cyclic.app/projects/${id}`);   
    
  return res.data;
  }
    catch(Err){
      console.log(Err)
    } 
  
  }

export const AddProject=async (id,data,project_Data)=>{
  const d = new Date();
 let date= d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear() ;
 let  new_obj={
    "id": d.getTime(),
    "title": data,
    "data": [
      {
        "name": "sample",
        "status": "new",
        "risk": "low",
        "date": data,
        "assigne": "abc@xyz.com"
      }
    ]
  }
  project_Data.push(new_obj);
  console.log(project_Data)
  try{
    let res=await axios.patch(`https://busy-houndstooth-clam.cyclic.app/projects/${id}`,{project:project_Data});   
    return;
  }
    catch(Err){
      console.log(Err)
    } 
  
  }
  
  export const AddTask=async (id,project_Data)=>{
    try{
      let res=await axios.patch(`https://busy-houndstooth-clam.cyclic.app/projects/${id}`,{project:project_Data});   
      return;
    }
      catch(Err){
        console.log(Err)
      } 
    
    }
    
  


