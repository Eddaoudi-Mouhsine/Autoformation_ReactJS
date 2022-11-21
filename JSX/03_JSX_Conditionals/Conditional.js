function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
	render() {
		const  num = getNum();
		let msg;
		if (num === 7){
			msg = <div>
				<h2>you get it right ,share it with the boiz </h2>
				<img src="https://media.tenor.com/XGH1MX73VK4AAAAd/communiste-communist.gif" />
			</div>
		}
		else{
			msg =<div>
				<h2>you get it wrong all the time </h2>
				<img src="https://media.tenor.com/IY70MV4sbGIAAAAd/stalin-wtf.gif" />
			</div>
		}
// 		return <div>

// <h1>you got it buddy{num}</h1>
// <p>{num ===7 ? 'congrat getting the worse number' : 'your luck is worse than ghandi'}</p>
// 		{num ===7 ? <img src="https://media.tenor.com/Bmx3RByGim8AAAAS/bear.gif"/> : null}
// 		</div>
		return <div>
			<h1>you got it buddy{num}</h1>
			{msg}
		</div>;
	}
}

