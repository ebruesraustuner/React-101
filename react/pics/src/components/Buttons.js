import React from 'react';


const Buttons = (props) => {
    console.log(props)
    const totalPages = props.totalPages
    console.log("🚀 ~ file: Buttons.js ~ line 7 ~ Buttons ~ totalPages", totalPages)
    const list = []
    for (let index = 1; index < totalPages; index++) {
        list.push(<button key={index} onClick={() => props.searchWtihPage(index)}>{index}</button>);
       
    }
    //sonra güzelleşir

    if (list.length > 5) {
        return (
            <div>
                <div>çoklu annem {list.slice(0, 4)} </div>
                <p>...</p>
                <div> {list.slice(-1)} </div></div>
        )
    } else {
        return <div>
            {list}
        </div>
    }
}


export default Buttons;