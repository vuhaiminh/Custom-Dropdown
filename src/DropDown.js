import React from 'react'
import "./CSS/DropDown.css"
import {IoIosArrowDown} from 'react-icons/io'
import {IoIosArrowUp} from 'react-icons/io'
import {IoIosCheckmark} from 'react-icons/io'
import {IoIosCloseCircleOutline} from 'react-icons/io'
class DropDown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            selectedItems: [] //state for all selected items
        }
    }
    //function handle on click an item
    handleSelectItem = (item) => {
        const selection = this.state.selectedItems
        if(!selection.some(current => current.id === item.id)){
            selection.push(item)
            this.setState({
                selectedItems: selection
            })
        }else{
            const removedSelection = selection.filter(current => current.id !== item.id)
            this.setState({
                selectedItems: removedSelection
            })
        }
    }
    //helper function to check if the clicked item is already selected
    isItemInSelection = (item) => {
        const selection = this.state.selectedItems
        if (selection.find(current => current.id === item.id)){
            return true;
        }
        return false;
    }
    clearSelection = () => {
        this.setState({
            selectedItems: []
        })
    }

    //helper function to open/close the selection menu
    toggle = (value) =>{
        this.setState({
            open: !value
        })
    }

    render(){
        const items = this.props.items
        var selectedSomeItem = this.state.selectedItems.length > 0
        return(
         <div className="wrapper">
             {/* Header Bar Start */}
             <div
             className="header"
             tabIndex = {0}
             role="button"
             onClick={() => this.toggle(this.state.open)}
            
             >
                 <div className="selectedItems">
                     
                     {
                         selectedSomeItem ? 
                         (
                             <div className="display-selected-div">
                             {this.state.selectedItems.map(item => (
                                 <button className="display-selected-button" onClick={(e) => {
                                    e.stopPropagation() 
                                    this.handleSelectItem(item)}}>
                                    <span className="selected-items-value">{item.value}</span>
                                    <IoIosCloseCircleOutline />
                                </button>
                             ))}
                             </div>
                         )
                         
                         
                         : <label className="selectIndicator">Select Favourite Movies</label>
                     }
                 </div>
                 <div className="openIcon">
                   {this.state.open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                   
                 </div>
                
             </div>
             <div>
                 {selectedSomeItem &&                  
                 <button className="clearButton" onClick={this.clearSelection}>Clear</button>}
             </div>
             {/* Header Bar Ends*/}
            {/* Selection Menu Start Here */}
            
            {this.state.open && (
                <div className="listItems-div">
                    <ul className="lists">
                        {items.map(item => (
                            <li className="listItem">
                                <button  onClick={() => this.handleSelectItem(item)} className="selectItem-button">
                                    <span>{item.value}</span>
                                    <span> {this.isItemInSelection(item) && <IoIosCheckmark/> }</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

            )}
            {/* Selection Menu Ends Here */}
             


         </div>   
        )
    }

}

export default DropDown