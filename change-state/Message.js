import React, { Component } from 'react'
const heading={
    fontSize:'30px',
    color:'purple'
}
export class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello react"
        }
    }
    changemessage(){
        this.setState({
            message:"thank you"
        },()=> setTimeout(()=>{
            console.log('callback')},5000))
       
    }
    render() {
        return (
            <div>
                <h1 style={heading}>{this.state.message}</h1>
                <button onClick={()=>this.changemessage()}>subscribe</button>
            </div>
        )
    }
}

export default Message
