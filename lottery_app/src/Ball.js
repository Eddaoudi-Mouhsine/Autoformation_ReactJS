import React,{Component} from 'react';
class Ball extends Component {
    constructor(props) {
        super(props);
        this.state = {
}
    }
    render() {
        return (
            <div className="ball">
                {this.props.num}
            </div>
        )
    }
}
export default Ball;