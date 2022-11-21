function getMood(){
	const moods = ['angry', 'confused', 'upset', 'surprise', 'thirsty', 'hehe YA boih'];
	return moods[Math.floor(Math.random()*moods.length)];
}
class Hello extends React.Component{
	render(){
        console.log(this.props)
        const props = this.props;
        const bang = "BOOM".repeat(this.props.bang)
		return(
			<div>
                
			<h1>my current mode rate: {getMood()} </h1>
            <p> hi {props.to} from {props.from} open the  door {bang}</p>
            <img src={props.img}/>
			</div>
		);
}
}
