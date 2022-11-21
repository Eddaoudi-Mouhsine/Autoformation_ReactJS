// class Hello extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<Hello />, document.getElementById('root'));
// function Hello(){
// 	return( <div>
// 		<h1>Hello there!</h1>
// 		<h1>Hello there!</h1>
// 		<h1>Hello there!</h1>
// 		</div>);
// }
// ReactDOM.render(<Hello />, document.getElementById('root'));
function getMood(){
	const moods = ['angry', 'confused', 'upset', 'surprise', 'thirsty', 'hehe YA boih'];
	return moods[Math.floor(Math.random()*moods.length)];
}
class Demon extends React.Component{
	render(){
		return(
			<div>
			<h1>my current mode rate: {getMood()} </h1>
			</div>
		);
}
}
ReactDOM.render(<Demon/>, document.getElementById('root'));