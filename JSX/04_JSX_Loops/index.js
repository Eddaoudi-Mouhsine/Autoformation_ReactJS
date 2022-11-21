class App extends React.Component {
  render() {
    return (
      <div>
        <Friend
        name ="elton"
        hobbies ={["playing piano","playing guitar","playing poker","drinking wine","love memes"]}
        />

        <Friend
        name ="me "
        hobbies ={["playing mmo","playing piano","drawing","yes i love wine","love memes"]}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))