import React,{Component} from "react";
class BetterNumberItem extends Component{
    constructor(props){
        super(props);
this.handleRemove= this.handleRemove.bind(this);
    }
    handleRemove(evt){
        console.log("inside handle remove")
        this.props.remove(this.props.value);


    }
    render()
    {
        return (
            <div>
                <li>{this.props.value}
                <button onClick={this.handleRemove}>X</button>
                </li>
            </div>)

}
}
export default BetterNumberItem