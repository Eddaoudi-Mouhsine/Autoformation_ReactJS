import React, { Component } from 'react';
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            gameover: false




        }
    }
    render() {
        return (
            <div className="game">
                <p>your score is : {this.state.score}</p>
            </div>
        )}
}
export default Game;

class Demo extends Component{
    constructor(props) {
        super(props);
        this.state = {color:"cyan"}
        if (this.state.color === this.props.color){
            console.log("yoho you get it right ")
        }

    }
    render() {
        return (
            <div style={{color:"red"}}><h1>this demo is aweoms YOHO : {this.state.color}</h1></div>
        )
}
}
export  {Game,Demo};
