import React, { useState } from 'react'
import axios from 'axios';

export default function Create() {
    const[rno,setRno]=useState("");
    const[name,setName]=useState("");
    const[marks,setMarks]=useState("");
    const[ans,setAns]=useState("");


    const hRno = (event)=>{setRno(event.target.value);}
    const hName= (event)=>{setName(event.target.value);}
    const hMarks = (event)=>{setMarks(event.target.value);}

    const save=(event)=>{
        event.preventDefault();
        let data = {rno,name,marks };
        let urladd ="http://localhost:9000/save";
        axios.post(urladd,data)
        .then(res=>{
            console.log("res",res);
            if(res.data.affectedRows==1){
                setAns("record saved");
                setRno("");
                setMarks("");
                setName("");
            }else{
                setAns(rno+"already exits");
                setRno("");
                setMarks("");
                setName("");
            }
            
        })
        .catch(err=>{
            if(err.code=="ERR_NETWORK")
            setAns("pls try after some time");
        })
    }

  return (
    <div>
        <center>
       <h1> create page </h1>
       <form onSubmit={save}>
        <input type="number" placeholder="enter rno" onChange={hRno} value={rno}/>
        <br/><br/>
        <input type="text" placeholder="enter name"  onChange={hName} value={name}/>
        <br/><br/>
        <input type="number" placeholder="enter marks"  onChange={hMarks} value={marks}/>
        <br/><br/>
        <input type="submit" value="save"/>
        <br/><br/>
       </form>
       <h1>{ans}</h1>
        </center>
    </div>
  );
}
