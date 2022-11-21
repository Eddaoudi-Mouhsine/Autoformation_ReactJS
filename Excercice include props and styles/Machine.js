class Machine extends React.Component {
  render() {
    let msg;
const s1= this.props.s1;
const s2= this.props.s2;
const s3 = this.props.s3;
//const{s1,s2,s3} = this.props;destructuring from an object like u
//saying create me a var name s1 and assign to it this.props.s1
if (s1 === s2 && s1 === s3) {
  msg = <div>
    <p>you win !</p>
    <span style = {{fontSize:"50px",backgroundColor:'green'}}>{s1}{s2}{s3}</span>
    </div>
}
else{
  msg =<div> 
    <p>you loose get rekt !</p>
    <span style = {{fontSize:"50px",backgroundColor:'red'}}>{s1}{s2}{s3}</span>
    </div>

}
    return (
      <div className="Machine">
        {/* <label htmlFor ="textinput"></label> */}
        <p >your results is :</p>
        {msg}
      </div>
    )
  }
}