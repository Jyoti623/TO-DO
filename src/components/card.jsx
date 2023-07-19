import React, { useState } from "react";
import EditTask from "../modals/edit";

const Card=({taskObj,index,deleteTask,updateListArray})=>{
    const [modal,setModal]=useState(false);
    // const colors=[{primaryColor:"#5d93e1",secondaryColor:"#ecf3fc"},{primaryColor:"#5dc250",secondaryColor:"#f2faf1"}]

    const toggle =()=>{
        setModal(!modal);
    }
    const updateTask=(obj)=>{
        updateListArray(obj,index)
    }
    const handleDelete=()=>{
        deleteTask(index)
    }
 return(
    <>
    <div className="card-wrapper mr-5">
        <div className="card-top"/>
        <div className="task-holder">
            <span className="card-header" style={{"backgroundColor":"#f2faf1", "borderRadius":"10px"}}>{taskObj.Name}</span>
            <p className="mt-3">{taskObj.Description}</p>
            <div style={{"position":"absolute","right":"20px","bottom":"20px"}}>
                <i className="far fa-edit mr-3" style={{"color":"#1607f4","marginRight":"10px","cursor":"pointer"}} onClick={()=>setModal(true)}/>
                <i className="fa-solid fa-xmark" style={{"color":"#f40707","cursor":"pointer"}} onClick={handleDelete}/>
            </div>
        </div>
        <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
    </div>
    </>
 )   
}
export default Card