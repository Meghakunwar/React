// import logo from './logo.svg';
// import './App.css';
// import User from './User'
// function App() {
//   return (
//     <div className="App">
//     <h1>HIIII</h1>

//       <User/>
//     </div>
//   );
// }

// export default App;

                                      //Class Componenet Example 
// import logo from './logo.svg';
// import './App.css';
// import User from './User'
// function App() {
//   return (
//     <div className="App">
//     <h1>Hello</h1>

//       <User/>
//     </div>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';
// import User from './User'
// function App() {
//   function Apple(){
//     return(
//       <h2>ku btauuu</h2>
//     )
//   }
//   return (
//     <div className="App">
//     <h1>Hello</h1>

//       <User/>
//       {/* {Apple()} */}
//       <Apple/>
//     </div>
//   );
// }

// export default App;



// import './App.css';
// import User from './User'
// function App(){
//   return(
//     <div className='App'>
//       <h1>Jsx!</h1>
//     <User/>
//     </div>
//   )
// }
// export default App;
                                            // Click Event And Function
// import './App.css';
// function App(){
//   function apple(){
//     alert("hiiiiiii");
//   }
//   return(
//     <div className="App">

//       <h1>Hiii megha</h1>
//       <button onClick ={apple}>Click me</button>
//     </div>
//   )
// }
// export default App;


// import './App.css';
// function App(){

//   return(
//     <div className="App">

//       <h1>Hiii megha</h1>
//       <button onClick ={()=>alert("hiii chomuu")}>Click me</button>
//     </div>
//   )
// }
// export default App;

                                                //States in React --->Use state

// import './App.css';
// function App(){
//   let data="megha kunwar";
//   function apple(){
//     let data="nik";          //data not be updated by  variable ,so we use states 
//     alert(data);
//   }
//   return(
//     <div className="App">

//       <h1>{data}</h1>
//       <button onClick ={apple}>Click me</button>
//     </div>
//   )
// }
// export default App;

                    //States in React ---useState

// import React, { useState } from 'react'; 

// import './App.css'; 

// function App() {

//   const [data, setData] = useState("Megha");

//   function UpdateData() {
//     setData("Kunwar"); 
//   }

//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={UpdateData}>Click me</button>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react'; 

// import './App.css'; 

// function App() {

//   const [data, setData] = useState(0);

//   function UpdateData() {
//     setData(data+1); 
//   }

//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={UpdateData}>Click me</button>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import Student from './student';

// function App(){
//   return(
//     <div className='App'>
//       <h1>Props in react!</h1>
//     <Student Name={"megha"} email="meghakunwar128@test" />
//     <Student Name={"nik"} email="meghakunwar128@test" />
//     <Student Name={"meghu"} email="meghakunwar128@test" />

//     </div>
//   )
// }
// export default App;



// import React, {useState} from 'react'
// import './App.css';
// import Student from './student';

// function App(){
//   const [name,setName]=useState("megha")
//   return(
//     <div className='App'>
//       <h1>Props change in react!</h1>
//     <Student Name={name} />
//     <button onClick={()=>{setName("kunwar")}}>onClick</button>

//     </div>
//   )
// }
// export default App;


                        //hide and show element

// import React, {useState} from 'react'
// import './App.css';
// function App(){
//   const [status,setstatus]=useState(false)
//   return(
//     <div className='App'>
//       {
//         status? <h1>Hide and show in react!</h1>:null

//       }
    
//     {/* <button onClick={()=>{setstatus(true)}}>Show</button> */}
//     {/* <button onClick={()=>{setstatus(false)}}>hide</button> */}
//     {/* <button onClick={()=>{setstatus(!status)}}>toggle</button>      in single button */}

//     </div>
//   )
// }
// export default App;

                          
                              //Get input Box value
import React, { createRef, useMemo, useReducer, useState } from 'react'
import './App.css';
  
// function App(){
//   const [data,setData]=React.useState(null)
//   const [print,setPrint]=React.useState(false)

//   function getData(val){
//     console.log(val.target.value);
//     setData(val.target.value)
//   }
//   return(
//     <div className="App">
//      {
//       print?<h1>{data}</h1>:null
//       }
//       <input type="text" onChange={getData}/>
//       <button onClick={()=>setPrint(true)}>PrintData</button>
//     </div>
//   )
// }
// export default App;
                                            //

                                            
                                            //Conditional rendering --ifElse
                                          

                                            //  import './App.css';
                                          //  import ProFile from './Profile';
                                          //   function App(){
                                          //     return(
                                          //       <div className="App">
                                          //         <h1>Condition</h1>
                                          //         <ProFile/>
                                          //       </div>
                                          //     );
                                          //   }
                                          //   export default App;
                                            
                                         
// import { useState } from 'react';                              
// import './App.css'
// function App(){
//   const [name,setName]=useState("");
//   const [tnc,setTnc]=useState(false);
//   const [interest,setInterest]=useState("");

// function getFormData(e){
//     console.warn(name,tnc,interest);
//     e.preventDefault();
//   }
//   return(

//     <div className='App'>
//       <h1>Handle form in React</h1>
//       <form onSubmit={getFormData}>
//         <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}/><br></br>
//         <select onChange={(e)=>setInterest(e.target.value)}>
//           <option>Select option</option>
//           <option>Dc</option>
//           <option>marval</option>
//         </select><br></br>
//         <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Term and Condition</span><br></br>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }
// export default App;




                                      // Basic form Validation
                                          
// import './App.css'  
// import Login from './Login';
// function App(){
//   return(
//     <div className='App'>
//       <h1>Basic Form Validation</h1>
//       <Login/>
//     </div>
//   )
// }                                     
// export default App;


                                        // Constructor Life Cycle Mathod

// import './App.css'
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       name:"meghuu"
//     }
//     console.log("constructor");
//   }
//   render(){
//     console.warn("REnder")
//     return(
//       <div className="App">
//         <h1>HIIII {this .state.name}</h1>
//       </div>
//     )
//   }

// }
// export default App;


// import React from 'react';
// import User from './User';
// import Student from './student';
// import './App.css'
// function App(){

//   function getData(){
//     alert("hello from App");
//   }
//   return(
//     <div className='App'>
//     <User data={getData} />
//     <Student data={getData}/>
      
//     </div>
//   )
// }
// export default App;

                                            //Render Method

              
   
// import './App.css';                                                                     
// import User from './User';

// function App() {
//   const [name, setName] = React.useState("mek");

//   return (
//     <div className='App'>
//       <h1>Render Method in React</h1> 
//       <User />
      
//     </div>
//   );
// }

// export default App;



// import './App.css';

// import User from './User';
// function App(){
//   const[name,setName]=React.useState("megha");
//   return(
//     <div>
//       <h1>Render Method in react</h1> 
//       <User name={name}/>
//       <button onClick={()=>setName("kunar")}>Update Name</button>
      
//     </div>
//   )
// }
// export default App;

                                                              
                                                // componentDidMount life cycle


// import './App.css';
// // import React from 'react'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     console.warn("constructor")
//     this.state={name:"anil"}
//   }
//   componentDidMount()
//   {
//     console.warn("componentDidMount")

//   }
//   render()
//   {
//     console.warn("render")

//     return (
//       <div className="App">
//         <h1>Component Did Mount {this.state.name}</h1>
//         <button onClick={()=>this.setState({name:"Sidhu"})}>Update</button>
//       </div>
//     );
//   }
// }

// export default App;

                                              // comoponentDidUpdate life Cycle

//  import './App.css';
// // import React from 'react'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     console.warn("constructor")
//     this.state={name:"megha"}
//   }
//   componentDidUpdate()
//   {
//     console.warn("componentDidUpdate")

//   }
//   render()
//   {
//     console.warn("render")

//     return (
//       <div className="App">
//         <h1>Component Did update {this.state.name}</h1>
//         <button onClick={()=>this.setState({name:"Sidhu"})}>Update</button>
//       </div>
//     );
//   }
// }

// export default App;
                                                            // ex 2

// import './App.css';
// // import React from 'react'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     console.warn("constructor")
//     this.state=
//     {count:0}
//   }
//   componentDidUpdate(preProps,preState,snapshot)
//   {
//     console.warn("componentDidUpdate",preState)

//   }
//   render()
//   {
//     console.warn("render")

//     return (
//       <div className="App">
//         <h1>Component Did update {this.state.count}</h1>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
//       </div>
//     );
//   }
// }

// export default App;


                                                //ex 3

// import './App.css';
// // import React from 'react'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     console.warn("constructor")
//     this.state=
//     {count:0}
//   }
//   componentDidUpdate(preProps,preState,snapshot)
//   {
//     console.warn("componentDidUpdate",preState.count,this.state.count)
//     if(preState.count==this.state.count){
//       alert("data is alredy same");
//     }

//   }
//   render()
//   {
//     console.warn("render")

//     return (
//       <div className="App">
//         <h1>Component Did update {this.state.count}</h1>
//         <button onClick={()=>this.setState({count:1})}>Update</button>
//       </div>
//     );
//   }
// }

// export default App;


                                                        //ex 5


// import './App.css';
// // import React from 'react'
// class App extends React.Component {
//   constructor()
//   {
//     super();
//     console.warn("constructor")
//     this.state=
//     {count:0}
//   }
//   componentDidUpdate(preProps,preState,snapshot)
//   {
//     console.warn("componentDidUpdate",preState.count,this.state.count)
//     if(this.state.count<10){
//       this.setState({count:this.state.count+1})
//     }

//   }
//   render()
//   {
//     console.warn("render")

//     return (
//       <div className="App">
//         <h1>Component Did update {this.state.count}</h1>
//         <button onClick={()=>this.setState({count:1})}>Update</button>
//       </div>
//     );
//   }
// }

// export default App;


                                                    //shouldComponentUpdate Life cycle
// import './App.css';
// // import React from 'react'
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state={
//       count:0
//     }
//   }
//   shouldComponentUpdate()
//   {
//     console.warn("shouldComponentUpdate",this.state.count)
//    if(this.state.count<5)
//    {
//      return true;
//    }

//   }

//   render() {
//     return (
//       <div className="App">
//         <h1> Should Component Update  {this.state.count}</h1>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>Update Counter</button>
//       </div>
//     );
//   }
// }

// export default App;
                                                      //ComponentWillUnmount Life Cycle 


// import './App.css';
// // import React from 'react';
// import Student from './Student';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       show: true,
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.show ? <Student /> : <h4>Component is removed</h4>}
//         <button onClick={() => this.setState({ show: !this.state.show })}>
//           Toggle Student Component
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

                                        // hooks in Functional Component
                            
                                        //                                       import { useState } from 'react';
                                        // // import React is missing
                                        // function App() {
                                        //   const [data, setData] = useState("megha");
                                        //   return (
                                        //     <div className='App'>
                                        //       <h1>{data}</h1>
                                        //     </div>
                                        //   );
                                        // }
                                        // export default App;

                                //  useEffect

// import './App.css';
// import { useEffect } from 'react';

// function App(){
//   useEffect(()=>{
//     alert("useEffect");
//   })
//   return(
//     <div className='App'>
//       <h1>useEffect in React</h1>
//     </div>
//   )
// }
// export default App;

                                        //ex 2
// import './App.css';
// import { useEffect, useState } from 'react'
// function App() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     console.warn("use effect")
//   })
//   return (
//     <div className="App">
//       <h1>useEffect in React {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Update Counter</button>
//     </div>
//   );
// }

// export default App;

                                                        //BootStrap

// import './App.css';
// // import { useEffect, useState } from 'react'
// import { Button } from 'react-bootstrap'
// import { Alert } from 'react-bootstrap';
// function App() {
 
//   return (
//     <div className="App">
//       <h1>use bootstrap in React </h1>
//       <Button onClick={()=>alert("hii")}> Click me</Button>
//       <Button variant="primary">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button>{' '}
//       <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button>{' '}
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>

//       <hr></hr>
//       <>
//       {[
//         'primary',
//         'secondary',
//         'success',
//         'danger',
//         'warning',
//         'info',
//         'light',
//         'dark',
//       ].map((variant) => (
//         <Alert key={variant} variant={variant}>
//           This is a {variant} alert—check it out!
//         </Alert>
//       ))}
//     </>
//       {/* <>
//       {
      
        
//         <Alert variant="warning">
//           This is a Warning alert—check it out!
//         </Alert>
      
//       }
//     </> */}
//     </div>
//   );
// }

// export default App;

                                                      //hooks  useEffect in states in react
// import './App.css';
// import { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState(10); // Correct use of useState
//   const [count, setCount] = useState(100); // Correct use of useState

//   useEffect(() => {
//     console.warn("call with data State");
//   }, [data]);

//   return (
//     <div className='App'>
//       <h1>Count: {count}</h1>
//       <h1>Data: {data}</h1>
      
//       <button on={() => setData(data + 1)}>Increase Data</button>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//     </div>
//   );
// }

// export default App;
                                          //useEffect in Props

// import './App.css';
// import { useState, useEffect } from 'react';

// import User from './User';
// function App() {
//   const [data, setData] = useState(10); // Correct use of useState
//   const [count, setCount] = useState(100); // Correct use of useState

  
//   return (
//     <div className='App'>
     
//      <User count={count} data={data}/>
//      <button onClick={() => setData(data + 1)}>Increase Data</button>
//      <button onClick={() => setCount(count + 1)}>Increase Count</button>
//     </div>
//   );
// }

// export default App;
                                                          //  40 // UseMemo
// import React from 'react';
// import './App.css'
// // import {UseState, UseMemo} from 'react'
// function App(){
//   const[item,setItem]=React.useState(0);
//   const[count,setCount]=React.useState(10);

//   const MultiCount=useMemo(
//     function MultiCountMemo(){
//       console.warn("multicount");
//       return count*2;
//     },[count]
//   )
  
//     // function MultiCountMemo(){
//     //   console.warn("multicount");
//     //   return count*2;
//     // }
//   return(
//     <div className='App'>
//       <h1>Count:{count}</h1>
//       <h2>Item:{item}</h2>
//       {/* <h2>{MultiCountMemo()}</h2> */}
//       <h2>{MultiCount}</h2>
//       <button onClick={()=>setItem(item+1)}>Item Update</button>
//       <button onClick={()=>setCount(count*10)}>Count Update</button>
//     </div>
//   )
// }
// export default App;
                                        //Ref in React

                                        
// import './App.css'
// class App extends  React.Component{
//   constructor(){
//     super();
//     this.inputRef=React.createRef();
    
//   }
//   getValue(){
//     console.log(this.inputRef.current.value=1234)
//     // this.inputRef.current.style.color="red"
//     this.inputRef.current.style.backgroundColor="blue"
//   }
//   render(){
    
//     return(
//       <div className='App'>
//         <h1>REf in React Js</h1>
//         <input type="text" ref={this.inputRef}/>
//         <button onClick={()=>this.getValue()}>check ref</button>
//       </div>
//     )
//   }
// }
// export default App;

// import './App.css'
// function App(){
//   let kubtau=React.createRef();

//   function getInput(){
//     // kubtau.current.style.backgroundColor="skyblue"
//     // kubtau.current.style.display="none"
//     kubtau.current.focus();
//     console.log("function Call");
//   }
//   return(
//     <div className='App'>
//       <h1>UseREf in react  js</h1>
//       <input type="text" ref={kubtau}></input>
//       <button onClick={getInput}>ref </button>
//     </div>
//   )
// }
// export default App;

                                                  //Forward Ref 
// import './App.css'
// import User from './User'
// function App(){
//   let inputRef=React.createRef(null);
//   function getValue(){
//     inputRef.current.style.color="red"
//     inputRef.current.style.backgroundColor="blue"
//   }
//   return(
//     <div className='App'>
//       <h1>forward REf</h1>                               onChange={(e)=>setItem(e.target.value)
//       <User ref={inputRef}/>
//       <button onClick={getValue}>forward Ref</button>
//     </div>             defaultValue={"+91"}
//   )
//  }

// export default App;
                                                //Controlled Componenet
                                                //normal

// import './App.css'
// function App(){
//   let[item,setItem]=React.useState();
//   return(
//     <div>
//       <h1>controlled Component</h1>
//       <input type="text" value="123" ></input>
//     </div>
//   )
// }
// export default App;

                                //good Way


// import './App.css'
// function App(){
//   let[item,setItem]=React.useState();
//   return(
//     <div>
//       <h1>controlled Component</h1>
//       <input type="text" value={item} defaultValue={"+91"} onChange={(e)=>setItem(e.target.value)}></input>
//     </div>
//   )
// }
// export default App;
                                  //Uncontrolled Component
// import React from 'react';
// import './App.css';

// function App() {
//   const inputRef1 = React.useRef();
//   const inputRef2 = React.useRef();

//   function SubmitForm(e) {
//     e.preventDefault();
//     console.warn("input1: " + inputRef1.current.value);
//     console.warn("input2: " + inputRef2.current.value);
//   }

//   return (
//     <div>
//       <h1>Uncontrolled</h1>
//       <form onSubmit={SubmitForm}>
//         <input type="text" ref={inputRef1} />
//         <input type="text" ref={inputRef2} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;


// import './App.css';

// function App() {
//   const inputRef1 = React.useRef();
//   const inputRef2 = React.useRef();

//   function SubmitForm(e) {
//     e.preventDefault();
    
//     // Change styles of the inputs
//     inputRef1.current.style.color = "yellow";
//     inputRef2.current.style.backgroundColor = "green";
    
//     // Log the styles to the console
//     console.warn("input1 color set to purple");
//     console.warn("input2 background color set to green");
//   }

//   return (
//     <div>
//       <h1>Uncontrolled</h1>
//       <form onSubmit={SubmitForm}>
//         <input type="text" ref={inputRef1} />
//         <input type="text" ref={inputRef2} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
                                                          //HOC(hight Order Component)

                                                          
// import './App.css';
// import  { useRef, useState } from 'react'
// function App() {
//   return (
//     <div className="App">
//       <h1>HOC </h1>
//       <HOCRed cmp={Counter} />
//       <HOCGreen cmp={Counter} />
//       <HOCBlue cmp={Counter} />

//     </div>
//   );
// }
// function HOCRed(props)
// {
//   return <h2 style={{backgroundColor:'red',width:100}}>Red<props.cmp /></h2>
// }
// function HOCGreen(props)
// {
//   return <h2 style={{backgroundColor:'green',width:100}}>Grren<props.cmp /></h2>
// }
// function HOCBlue(props)
// {
//   return <h2 style={{backgroundColor:'blue',width:100}}>blue <props.cmp /></h2>
// }
// function Counter()
// {
//   const [count,setCount]=React.useState(0)
//   return<div>
//     <h3>{count}</h3>
//     <button onClick={()=>setCount(count+1)}>Update</button>
//   </div>
// }
// export default App;


                                                  //React Router

//Wrapper setup--->box type (inside work only)

// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Home from './component/Home';
// import About from './component/About';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <h1> React Router in React</h1>
//       <BrowserRouter>
//       <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/About" element={<About/>}/>
//       </Routes>
//       </BrowserRouter>

//     </div>
//   );
// }

// export default App;

                                          //better way


// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <nav>
//           <ul>
//             <li><Link to="/Home">Home</Link></li>
//             <li><Link to="/About">About</Link></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<h1>Welcome to the Homepage</h1>} />
//           <Route path="/Home" element={<h1>Home Page</h1>} />
//           <Route path="/About" element={<h1>About Page</h1>} />
//           <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
                                                      //Links,NavBar
// import './App.css'
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
// import Home from './component/Home';
// import About from './component/About';
// function App(){
//   return(
//     <div className='App'>
      
//     <h1>Routing with Links</h1>
//     <BrowserRouter>
//     <Link to="./About">About</Link><br></br>
//     <Link to="./Home">Home</Link>
//     <Routes>
//       <Route path="/Home" element={<Home/>}/>
//       <Route path="/About" element={<About/>}/>
     
//     </Routes>
//   </BrowserRouter>
//     </div>
//   )
// }
// export default App;
                                        //good way

// import "./App.css"
// import {BrowserRouter,Routes,Route ,Navigate} from 'react-router-dom'

// import Home from './component/Home';
// import About from './component/About';
// import NavBar from './component/NavBar';
// import Page4O4 from './component/Page4O4';
// import User from './component/User';
// import Filter from './component/Filter';
// function App(){
//   return(
//     <div className="App">
      
//     <h1>Routing with Links</h1>
//     <BrowserRouter>
//     <NavBar/>
//     <Routes>
//       <Route path="/Home" element={<Home/>}/>
//       <Route path="/About" element={<About/>}/>

//       <Route path="/*" element={<Page4O4/>}/>
//       <Route path="/User/:name" element={<User/>}/>
      
    
//       {/* <Filter/> */}
//       {/* <Route path="/*" element={<Page4O4/>}/> */}
      

//       {/* <Route path="/*" element={<Page4O4/>}/> */}
//       <Route path="/*" element={<Navigate to ="/Home"/>}/>

//     </Routes>
//   </BrowserRouter>
//     </div>
//   )
// }
// export default App;



// import "./App.css"
// import {BrowserRouter,Routes,Route } from 'react-router-dom'
// import Filter from './component/Filter';
// function App(){
//   return(
//     <div className="App">
      
//     <h1>Routing with Links</h1>
//     <BrowserRouter>
//     <Routes>
   
    
//       {/* <Route path="/*" element={<Navigate to ="/Home"/>}/> */}
//       <Route path="/Filter" element={<Filter/>}/>

//     </Routes>
//   </BrowserRouter>
//     </div>
//   )
// }
// export default App;


                                                  //#8  Navigation ON Click
                                                      // nested Navigation

//  import "./App.css";
//  import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//  import Home from './component/Home';
//  import About from './component/About';
//  import NavBar from './component/NavBar';
//  import Page4O4 from './component/Page4O4';
//  import User from './component/User';
//  import Filter from './component/Filter';
//  import Contact from './component/Contact';
// import Other from './component/Other';
// import Channel from './component/Channel';
// import Compony from './component/Compony';
// // import Compony from './component/Compony ';


//  function App() {
//    return (
//      <div className="App">
//        <h1>Routing with Links</h1>
//        <BrowserRouter>
//          <NavBar />
//          <Routes>
//            <Route path="/Home" element={<Home />} />
//            <Route path="/About" element={<About />} />
//            <Route path="*" element={<Page4O4 />} /> 
//            <Route path="/User/:name" element={<User />} />
//            <Route path="/filter" element={<Filter />} />
//            <Route path="/Contact/" element={<Contact/>} />
//               {/* <Route path="Other" element={<Other/>}></Route>
//            */}
//            <Route path="Other" element={<Other/>}/>
//            <Route path="Channel" element={<Channel/>}/>
//            <Route path="Compony" element={<Compony/>}/>

           
       
//          </Routes>
//        </BrowserRouter>
//      </div>
//    );
//  }
//  export default App;
                                                      //#11 Procteted route  --->login Page

// import "./App.css";
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './component/Home';
// import About from './component/About';
// import NavBar from './component/NavBar';
// import Page4O4 from './component/Page4O4';
// import User from './component/User';
// import Filter from './component/Filter';
// import Contact from './component/Contact';

// import Channel from './component/Channel';
// import Compony from './component/Compony';

// import Login from './component/Login';

// import Protected from './component/Protected';
// // import Other from './component/other';
// // import Compony from './component/Compony ';
                                                  

// function App() {
//   return (
//     <div className="App">
//       <h1>Routing with Links</h1>
//       <BrowserRouter>
//         <NavBar />
//         <Routes>

//           <Route path="/Home" element={<Protected Component={Home} />} />
//           <Route path="/Login" element={<Login/>} />

//           <Route path="/About" element={<Protected Component={About} />} />
//           <Route path="*" element={<Page4O4 />} /> 
//           <Route path="/User/:name" element={<User />} />
//           <Route path="/filter" element={<Protected Component={Filter} />} />
//           <Route path="/Contact/" element={<Contact/>} />
//               {/* <Route path="Other" element={<Other/>}/> */}
        
        
//           <Route path="Channel" element={<Channel/>}/>
//           <Route path="Compony" element={<Compony/>}/>

          
      
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;
                                                 
                                                      //57 Previous state in functional componenet
// import './App.css';

// function App() {
//   const [count, setCount] = React.useState(0);

//   function updateCounter() {
//     let rand=Math.floor(Math.random() * 10);
//     // setCount(rand);   callback Function
//     setCount((pre)=>{
//       console.warn(pre)
//       if(pre<5){
//         return "low value"
//       }
//       return rand;
//     })
//   }

//   return (
//     <div className='App'>
//       <h1>{count}</h1>
//       <button onClick={updateCounter}>Click me to update</button>
//     </div>
//   );
// }

// export default App;
                                                    //Context ApI(Advance react js)


import logo from './logo.svg';
// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { CommonContext } from './Components_Advance_react/CommonContext';
import main from './Components_Advance_react/main';


class App extends React.Component {
  constructor() {
    super();
    this.updateColor = () => {
      this.setState({ color: "red" });
    };
    this.state = {
      color: null,
      updateColor: this.updateColor
    };
  }

  render() {
    return (
      <div className="App">
        <CommonContext.Provider value={this.state}>
          <h1>Complete and Easy Example for Context API</h1>
          
        </CommonContext.Provider>
      </div>
    );
  }
}

export default App;
