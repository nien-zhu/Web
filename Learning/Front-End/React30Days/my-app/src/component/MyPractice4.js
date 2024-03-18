import React, { Component } from 'react'

export class MyPractice4 extends Component {
    constructor(props){
        super(props);
        this.state={
            Name:"danny"
        }
    }

    handleClick(){
        this.setState({
            Name:"John"
        })
    }

    render() {
        return (
            <div>
                <h3>Lifecycle of Class Conponent</h3>
                <div>{this.state.Name}</div>
                <button onClick={()=>this.handleClick()}>Change</button>
                <hr></hr>
            </div>    

        )
    }

    componentDidMount(){
        console.log("Class Component: first render")
        console.log("Class Component: ",this.state.Name)
    }
    componentDidUpdate(){
        console.log("Class Component: ",this.state.Name)
    }
    componentWillUnmount(){
        console.log("Class Component: unmount")
    }

}

export default MyPractice4