import React,{useState} from "react";
import PackageContext from "./context"

const Provider=(props)=>{
   const [mission,setMission]=useState({
      name:"Subhashree",
      age:32,
      agent:908,
      accept:"not Accepted"

   })
   return(
       <PackageContext.Provider value={{
           data:mission,
           isAccepted:()=>{
               setMission({...mission,accept:"ACCEPTED"})
           }
       }}>
        {props.children}
       </PackageContext.Provider>
   )

}


export default Provider;