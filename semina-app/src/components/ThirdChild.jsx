const ThirdChild = ({data}) => {
    // console.log('ThirdChild');

    if(data === 999) console.log('ThirdChild: 1000');
    return (
        <div>{data}</div>
    )
}

export default ThirdChild;