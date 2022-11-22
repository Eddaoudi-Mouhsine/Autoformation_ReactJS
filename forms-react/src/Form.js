import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {username:"",email:"",password:""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        
    }
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value})
    }
                        

    handleSubmit(evt){
        evt.preventDefault();
        alert(`you just submitted hehehehe YA boih ${this.state.username}`)
        this.setState({username:""})
    }
    render() {
        return (
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">username</label>
                    <input id="username" name='username' type="text" value={this.state.username} onChange={this.handleChange}></input>
                    <label htmlFor= "password">password</label>
                    <input id ="password" name="password" type ="password" value={this.state.password} onChange={this.handleChange}></input>
                    <label htmlFor ="email">email</label>
                    <input id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}></input>
                    <button >click me</button>

                </form>
            
            
            </div>
        )
}
}
export default Form;