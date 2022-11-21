class App extends React.Component {
	render(){
		return <div>
			<Hello
			 to ="tango"
			 from="rango"
			  num ={3}/>
			{/* <NumPicker/> */}
			<Hello
			 to ="nada" 
			 from="Lezobir" 
			 bang ={3}
			 data ={[1,2,3,4,]}
			 isFilled = {true}
			 img ="https://i.gifer.com/Kmtc.gif" 
			 />
		</div>
	}
}
ReactDOM.render(<App/>, document.getElementById('root'));