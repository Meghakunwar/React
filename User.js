
                //functional Componenet 




// function User(){
//     return(
//         <div>
//             <h1>hiii nikkki chomu</h1>
//         </div>
//     )
// }
// export default User;

                        // Class Component

// import React, { Component } from 'react';
// export default class User extends Component
// {
//     render(){
//         return(
//             <div>
//                 <h3>noooooo</h3>
//             </div>
//         )
//     }
// }

// function User(){
//     return(
//         <div>
//             <h1>hlo</h1>
//             <h1>{20+70}</h1>
//         </div>
//     )
// }
// export default User;



// function User(Props){
//     return(
//         <div>
//             <h1>hiii</h1>
//             <button onClick={Props.data}>Call </button>
//         </div>
//     )
// }
// export default User;


                                                //Render Method   --update by props 

// import React from 'react'
// class User extends React.Component{
    
//     render(){
//         console.log("rend",this.props)
//         return(
//             <div>
//                 <h1>user Componenet</h1>
               
//             </div>
//         )
//     }
// }
// export default User;

                                                                            //update by State

// import React from 'react'
// class User extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             email:"megha12@test"
//         }
//     }
//     render(){
//         console.warn("rnder",this.state.email)
//         return(
//             <div>
//                 <h1>user Componenet</h1>
//                 <button onClick={()=>this.setState({email:"hu12@tst"})}>Update Email</button>
//             </div>
//         )
//     }
// }
// export default User;

                                                                            //hooks

// import './App.css';
//  import {  useEffect } from 'react';

// function User(props) {

//   useEffect(() => {
//     console.warn("data is:"+props.data);
//   }, [props.data]);

//   return (
//     <div className='App'>
//       <h1>Count: {props.count}</h1>
//       <h1>Data: {props.data}</h1>
       
//     </div>
//   );
// }

// export default User;


                                                                            //ForwardRef
// import { forwardRef } from "react";
// function User(props,Ref){
//     return(
//         <div className="App">
//            <input type="text" ref={Ref}></input>
//         </div>
//     )
// }
// export default forwardRef(User);