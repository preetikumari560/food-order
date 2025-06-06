

 const Contact=()=>{


 
 return(
 <div>

 this  is my contact page

 </div>
 )
 }


// import { Component, useState } from "react"
// import ClassComp from "./ClassComp"
//  class Contact extends Component
//  {
// constructor(props){
// console.log("this is parent constructor")
// super(props)
// this.state={
// count:0,
// userInfo:{},

// }
// }

// async componentDidMount()
// {

// console.log("parent component did mount")
// const data = await fetch(`https://api.github.com/users/ayushsnha`)

// const jsonData=  await data?.json()

// console.log(jsonData)

// this.setState({userInfo:jsonData},

// )
// this.timer=setInterval(()=>{

// console.log("hello")

// },1000)
// }

// // for passing array dependencies like in useEffect(()=>{},[count, userInfo]).. it used to by this way 
// componentDidUpdate(prevProps, prevState){

// if(prevState.count!== this.state.count || prevState.userInfo!== this.state.userInfo  )// by this way
// {

// console.log(`since count is getting changed I am calling parent render again and again`)
// }
// // or multiple if conditions .....
// console.log(" parent component did update")
// }

// componentWillUnmount(){

// clearInterval(this.timer)

// console.log("unmounting from parent")


// }


//  render(){
//     const {name,avatar_url} = this.state.userInfo

//  return (
 
//  <div>
//   {console.log("I am parent render")}
//  this  is my contact page

//  <h2>{name}</h2>
//  <img src={
// avatar_url}></img>
//  <ClassComp meta={"data"} child={"first"}/>
//  <ClassComp meta={"data"} child ={"second"}/>
//  <button onClick={()=>{
// this.setState({count:this.state.count+1})
//  console.log("I am  counting from parent func")
 
//  }}>Func Count :{this.state.count}</button>
//  </div>
 
//  )
 
 
//  }
 
//  }

 export default Contact