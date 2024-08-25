// import React,{useState} from "react";
// function Login(){
//     const [user,setUser]=useState("");
//     const [password,setPassword]=useState("");
//     const[userErr,setUserErr]=useState(true)
//     const[passwordErr,setPassErr]=useState(false)

//     function LoginHandle(e){
//         if(user.length<3||password.length<3){
//             alert("type correct values");
//         }
//         else{
//             alert("all good");
//         }
//         e.preventDefault();
//     }
//     function userHandler(e){
//         let item=e.target.value;
//         if(item.length<3){
//             setUserErr(true);
//         }
//         else{
//             setUserErr(false);
//         }
//         setUser(item);
//     }
//     function PassHandler(e){
//         let item=e.target.value;
//         if(item.length<3){
//             setPassErr(true);
//         }
//         else{
//             setPassErr(false);
//         }
//         setPassword(item);
//     }
//     return(
//         <div className="App">
//             <h1>Login Form</h1>
//             <form onSubmit={LoginHandle}>
//                 <input type="text" placeholder="Enter name" onChange={userHandler} />
//                 {
//                     userErr?<span>User not valid</span>:""
//                 } 
//                 <br></br>
//                 <br></br>
//                 <input type="password" placeholder="enter password" onChange={PassHandler}></input> 
//                 {
//                     passwordErr?<span>password not valid</span>:""
//                 } 
//                 <br></br>
//                 <br></br>

//                 <button type="submit">Submit</button>

//             </form>
//         </div>
//     )
// }
// export default Login;