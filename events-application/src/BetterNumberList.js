import React,{Component} from 'react';
import BetterNumberItem from './BetterNumberItem';
class BetterNumberList extends Component {
constructor(props) {
    super(props);
    this.state = {
        nums: [1,2,2,3,3,4,5,6,6]
    }
    this.remove = this.remove.bind(this);
}
remove(num){
    console.log('inside remove')
    console.log(num)
    this.setState(curState =>({nums:curState.nums.filter(n => n !== num)}))
}
render(){
    let nums = this.state.nums.map((n,idx) =><BetterNumberItem key ={idx} value = {n} remove={this.remove} />)
    return(
        <div>
            <h1>better number list</h1>
            <ul>{nums}</ul>

        </div>
    )
}




};
export default BetterNumberList