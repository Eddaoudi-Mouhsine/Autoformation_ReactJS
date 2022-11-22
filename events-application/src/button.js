import React ,{Component} from 'react';
class Buttonlist extends Component{
    static defaultProps = {
        colors: ["#3a0ca3","#ff006e", "#ee9b00", "#00bbf9"]
    }
    constructor(props){
        super(props);
        this.state = {
            colors: "cyan"
        }
       

        
        }
       
        changeColor(newColor){
            this.setState({
                colors: newColor
            })
        }

        render(){
            return (
                <div className='buttonList' style={{backgroundColor:this.state.colors}}>
                    {this.props.colors.map(c =>{
                        const colorObj = {backgroundColor: c}
                        return <button style={colorObj} onClick={this.changeColor.bind(this,c)}>change color</button>
                    })}
                    </div>

            )
        }
        }

    export default Buttonlist;
    
