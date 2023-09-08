import {Component} from "react";
export default class StateInClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:1,
            name: props.name,
            counter: 0,
        }
    }
    pluseFunction = () => {
        this.setState({
            counter: this.state.counter +1,
        });
    };
    minusFunction = () => {
        this.setState({
            counter:this.state.counter -1,
        });
    };
    render(){
        return(
            // <div>{this.state.name}</div>
            <div>
                <h1>State In class Component</h1>
                <p>
                    <b>Name:</b> {this.state.name}
                </p>
                <p>
                    <b>Counter:</b> {this.state.counter}
                </p>
                <button onClick={this.pluseFunction}>+</button>
                <button onClick={this.minusFunction}>-</button>
            </div>
        );
        
    }
}