
class Greeting extends React.Component {
	render() {
		let multipe = (x,y) => x*y //arrow function
		const animals = ["monkey", "the rock","kevin heart","lion","IM GIRAFFFEE "]//this is  map ES6
		const favoriteAnimals = animals.map(item => item.toLocaleUpperCase())//this is map array method ES6
		const organised = favoriteAnimals.join(", ")//map array method ES6
		const vehicles = ['mustang', 'f-150', 'expedition']//destructuring;

		const [car, truck, suv] = vehicles//hehehehehe YA bOIH destructuring;

		const numbersOne = [1, 2, 3]//destructuring
		const numbersTwo = [4, 5, 6]//destructuring
		const total = [...numbersOne, ...numbersTwo];

		let fruit = "orange"//Ternary operator 

		return (
			<div>
				<h1>Hello therefella! {multipe(2,4)}</h1>
				<p>just kidding my fav comedian {organised}</p>
				<ul>
					<li>here is something i'll not own : {car}</li>
					<li>this one too : {truck}</li>
					<li>no idea what this is : {suv}</li>

				</ul>

				<p>here is a hideous slaps of numbers,dont worry i dont like them too !:{total}</p>

				<p> {fruit === "orange" ? 'congrat orange the best': "banana boiz"} </p>

				

			</div>

		);
	}
}

ReactDOM.render(<Greeting />, document.getElementById('root'));

