import React from "react"; 

import UserContext from "../utils/UserContext";
 
 class ClassComp extends React.Component

 {

 constructor(props){
 
 super(props)

 this.state={
        count:0,
        name:"jiya"
 
 }
 
  
 console.log(`I am child constructor ${this.props.child}`)
 
 }

componentDidMount()
{
console.log(`child component did mount ${this.props.child}`)

}

componentWillUnmount(){



console.log(`unmounting from child ${this.props.child}`)


}

 render()
 {

 const {name,count}= this.state
 const {child}= this.props
 return(
 <div>
  <UserContext.Consumer>{ ({customer})=> <span>{customer.name}</span>}</UserContext.Consumer>
 <h3>This is state variable : {this.state.name}</h3>
 <h4>This is props:{this.props.meta}</h4>
 <button onClick={()=>{
 this.setState({
  count:count+1,
 })
 console.log(`I am counting from child ${child}`)
 
 }}>Count:  {count}</button>
 {console.log(`I am child render  ${child}`)}
 </div>
 )
 }
 }


 export default ClassComp