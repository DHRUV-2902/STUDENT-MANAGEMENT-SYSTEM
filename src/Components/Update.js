import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function Update() {
    const loc = useLocation();

    const[rno,setRno]=useState("");
    const[name,setName]=useState("");
    const[marks,setMarks]=useState("");
    const[ans,setAns]=useState("");


    const hRno = (event)=>{setRno(event.target.value);}
    const hName= (event)=>{setName(event.target.value);}
    const hMarks = (event)=>{setMarks(event.target.value);}

    useEffect(()=>{
        setRno(loc.state.r);
        setName(loc.state.n);
        setMarks(loc.state.m);
    },[]);
    
    const save=(event)=>{
        event.preventDefault();
        let data = {rno,name,marks };
        let urladd ="http://localhost:9000/modify";
        axios.put(urladd,data)
        .then(res=>{
            console.log("res",res);
            if(res.data.affectedRows==1){
                setAns("record saved");
                setRno("");
                setName("");
                setMarks("");
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
       <h1> update page </h1>
       <form onSubmit={save}>
        <input type="number" placeholder="enter rno" onChange={hRno} value={rno} disable={true}/>
        <br/><br/>
        <input type="text" placeholder="enter name"  onChange={hName} value={name}/>
        <br/><br/>
        <input type="number" placeholder="enter marks"  onChange={hMarks} value={marks}/>
        <br/><br/>
        <input type="submit" value="update"/>
        <br/><br/>
       </form>
       <h1>{ans}</h1>
        </center>
    </div>
  );
}
