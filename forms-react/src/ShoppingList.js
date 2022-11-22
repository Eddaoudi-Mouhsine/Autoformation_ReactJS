import React,{Component} from 'react';
import ShoppingListForm from './ShoppingListFrom';
const { v4: uuidv4 } = require('uuid');
uuidv4();
class ShoppingList extends Component {
    constructor(props) {
            super(props);
            this.state = {
                items:[
                    {name:'Milk',qty:"2 gallons",id: uuidv4()},
                    {name:'Bread',qty:"1 loaves",id: uuidv4()}
                    
                      ]

                        }  
                this.renderItem = this.renderItem.bind(this);
                this.addItem= this.addItem.bind(this);     
                    }
    renderItem() {
        return(
       <ul>
        {this.state.items.map(item =>(
            <li key={item.id}>{item.name}:{item.qty}</li>))}

       </ul>

        )
    };
    addItem(newItem) {
        let newI = {...newItem,id: uuidv4()}
    this.setState(currentState =>({
        items:[...currentState.items, newI]
    }))
}
    render(){
        return(
            <div>
                <h1>Shopping List</h1>
                    {this.renderItem()}
                    <ShoppingListForm addItem={this.addItem}/>

            </div>
        )
    }
}
export default ShoppingList