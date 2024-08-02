import ThirdChild from './ThirdChild'
import React from 'react';

const SecondChild = ({onClick, item}) => {
    console.log('SecondChild');
    return (
        <div onClick={onClick}>
            {Array.from({length: 1000}).map((_, idx) => (
                <ThirdChild key={idx + 1} data={idx} />
            ))}
        </div>
    )
}

// export default SecondChild;
export default React.memo(SecondChild);