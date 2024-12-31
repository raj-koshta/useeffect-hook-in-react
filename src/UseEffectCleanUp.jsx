import React, { useEffect, useState } from 'react'

const UseEffectCleanUp = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000)

        return ()=> clearInterval(timer)
    }, [count])

    return (
        <div className='box'>
            <h1>UseEffectCleanup Function</h1>
            <hr />
            <h2>Subscribers in youtube</h2>
            <h1>{count}</h1>
            <h4>Subscribe <br /> RealTime Counter</h4>
        </div>
    )
}

export default UseEffectCleanUp