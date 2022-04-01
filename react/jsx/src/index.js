//import react and reactdom
import React from 'react'
import ReactDOM from 'react-dom'

function getButtonText(){
    return 'click me'
}

//a react component
const App = () =>{
    const buttonText = 'hii'
    return <div>
        <label className="label" htmlFor="name"> enter name: </label>
        <input id="name" type="text" />
        <button style={{ backgroundColor: 'blue', color: 'white' }}>
            {buttonText}
        </button>
    </div>
} 

//onthe screeeeenn
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)