import React,{Component} from 'react';
class DispanseWisdom extends Component{
    constructor(props){
        super(props);
        this.dispansWisdom = this.dispansWisdom.bind(this);
    }
    static defaultProps = {
        messages: ['I Will Die A Colossus',
        'The Dragons Shall Never Be Forgotten',
        'Pardon me, I was absorbed in thought I am Siegward of Catarina',
    'Yhorm, old friend. I, Siegward of the Knights of Catarina, have come to fulfill my promise. Let the sun shine upon this Lord of Cinder!',
    "There Is No Shame In Losing One Battle. But You Must Take Revenge By Any Means Necessary!",
    'Hesitation Is Defeat.'],
    };
dispansWisdom(){
    let messages = this.props.messages
    // let {messages} = this.props;/work the same way 
    let index = Math.floor(Math.random()*messages.length);
    console.log(messages[index])
}
    render() {
        return (
            <div onMouseEnter={this.dispansWisdom}>Click me</div>
        )
    }
}
export default DispanseWisdom