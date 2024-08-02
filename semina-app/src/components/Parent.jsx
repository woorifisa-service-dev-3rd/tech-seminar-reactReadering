import { useCallback, useEffect, useMemo, useState } from 'react'
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';

const Parent = () => {
    const [count, setCount] = useState(0);
    // const handleClick = () => {};
    const handleClick = useCallback(() => {}, []);

    const item = {
        temp: 100,
    }

    const memTemp = useMemo(()=>item, []);

    useEffect(()=>{
        setCount(count + 1);
    }, [])

    return (
        <>
            <FirstChild count={count}/>
            {/* <SecondChild onClick={handleClick}/> */}
            <SecondChild item={memTemp}/>
        </>
    ) 
}

export default Parent