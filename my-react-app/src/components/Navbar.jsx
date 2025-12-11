import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props){
return (
<>

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
<Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>
      {/* <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classNameName="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
         <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode}/>
         <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
</>
)
}

export default Navbar


// import React, {useState} from 'react'

// function Navbar(props){

  

//   return(
//     <nav className="navbar navbar-expand-lg" style={{color: props.textColor}}>
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">{props.tittle}</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">{props.homepage}</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/">About</a>
//               </li>
//             </ul>
//             <div>
//               <button className="m-2 text-white" onClick={()=>{props.bgChanger("red")}} style={{backgroundColor: "red"}} >Red</button>
//               <button className="m-2 text-white" onClick={()=>{props.bgChanger("olive")}} style={{backgroundColor: "olive"}}>Olive</button>
//               <button className="m-2 text-white" onClick={()=>{props.bgChanger("pink")}} style={{backgroundColor: "pink"}}>Pink</button>
//               <button className="m-2 text-white" onClick={()=>{props.bgChanger("blue")}} style={{backgroundColor: "blue"}}>Blue</button>
//               <button className="m-2 text-white" onClick={()=>{props.bgChanger("black")}} style={{backgroundColor: "black"}}>Black</button>
//               <button className="m-2" onClick={()=>{props.bgChanger("white")}} style={{backgroundColor: "white"}}>White</button>
//             </div>
//           </div>
//         </div>
//       </nav>
//   )
// }

// export default Navbar