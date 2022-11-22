import React, { Component } from "react";
class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name:"",qty:""}
        this.changeHandler=this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
changeHandler(evt){
    this.setState({[evt.target.name]:evt.target.value});
}
handleSubmit(evt){
    console.log("inside handle submit");
    evt.preventDefault();
    this.props.addItem(this.state);
    this.setState({name:"",qty:""})
    


}
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor ="name">Name:</label>
                <input id="name" name="name" type="text" value={this.state.name} onChange={this.changeHandler}></input>
                <label htmlFor ="qty">Quantity:</label>
                <input id="qty" name="qty" type="text" value={this.state.qty} onChange={this.changeHandler}></input>
                <button>submit</button>
            </form>
        )
    }
}
export default ShoppingListForm;