import React ,{Component} from "react";
import Ball from "./Ball";
class Lottery extends Component {
    static defaultProps = {
        title: 'loto',
        maxballs: 6,
        maxNums: 43


    };
    constructor(props) {
        super(props);
        this.state = {nums:Array.from({length: this.props.maxballs})}
        this.random = this.random.bind(this);
        this.generate = this.generate.bind(this);
}
generate(){
    this.setState(curState => ({ nums:curState.nums.map(n => Math.floor(Math.random()*this.props.maxNums) + 1)}))
    
    

}
random(){
    this.generate();
}
render(){
    return (
    <section className="lottery">
        <h1> {this.props.title}</h1>
        <div>{this.state.nums.map(n => <div className="Ball"><Ball num = {n} /></div>)}</div>
        <button onClick={this.random}>give it a good slap</button>


    </section>
            )
}
}

export default Lottery;