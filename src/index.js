import React from 'react'
import ReactDOM from 'react-dom'
import Item from './items'
import DropDown from './DropDown'

const App = () => {
    return (
    <DropDown items={Item} />
     )
}

ReactDOM.render(<App />, document.getElementById("root"))