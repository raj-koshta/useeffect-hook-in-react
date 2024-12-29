import React, { useEffect, useState } from 'react'
import './UseEffectChallenge.css'

const UseEffectChallenge = () => {

    const font = {
        fontSize: "2em"
    }

    const [count, SetCount] = useState(0);
    const [name,setName] = useState("");

    const handleName = (e)=>{
        setName(e.target.value);
    }

    useEffect(()=>{
        console.log(name);
    },[name]);

    useEffect(()=>{document.title = "Count: "+ count},[count])
    return (
        <>
            <h1>UseEffect Hook Challenge</h1>
            <hr />
            <p style={font}>Count: {count}</p>
            <button onClick={()=> SetCount(count+1)}>
                Increment
            </button>
            <button onClick={()=> SetCount(count>0 ? count-1 : count)} style={{marginLeft: "30px"}}>
                Decrement
            </button>
            
            <br />
            <br />
            <hr />

            <p style={font}>Name: {name}</p>
            <input type='text' placeholder='Enter Your Name' onChange={(e)=> handleName(e)} />
        </>
    )
}

export default UseEffectChallenge
