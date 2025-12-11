// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
import React, {useState} from 'react'

function App(){
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState("null")

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode has been enable", "success")
      document.title = "TextUtils - Dark Mode"
      // setInterval(()=>{
      //   document.title = "TextUtils is Amazing Mode"
      // },2000)

      // setInterval(() => {
      //   document.title = "Install TextUtils"
      // }, 1500);
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enable", "success")
      document.title = "TextUtils - Light Mode"
    }
  }
  return(
    <>
      {/* <BrowserRouter>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        <Alert alert={alert} />
        
        <Routes>
          <Route path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />  
        
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />  
        </Routes>  
      </BrowserRouter> */}
  
      <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      
    </>
  )
}

export default App


// import Navbar from './components/Navbar'
// import TextForm from './components/TextForm'
// import Alert from './components/Alert'
// import React, {useState} from 'react'

// function App(){

//   // const [mode, setMode] = useState("light")
//   const [alert, setAlert] = useState("null")
//   const [color, setColor] = useState("white")
  

  

  



//   // const toggleMode =()=>{
//   //   if(mode === "dark"){
//   //     setMode("light")
//   //     document.body.style.backgroundColor = "light"
//   //   }
//   //   else{
//   //     setMode("dark")
//   //     document.body.style.backgroundColor = "dark"
//   //   }
//   // }


//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type
//     })
//     setTimeout(() => {
//       setAlert("null")
//     }, 1500);

//   }

//   const bgChanger = (newColor)=>{
//     setColor(newColor)
//   }

//   const textColor = color === "black" ? "white" : "black"

  



//   return(
//     <div style={{backgroundColor: color, color: textColor, height: "100vh"}}>
//       {/* <Navbar tittle="Text Utils"  homepage="Home" mode={mode} toggleMode={toggleMode}/> */}
//       <Navbar tittle="Text Utils"  homepage="Home" bgChanger={bgChanger} textColor={textColor}/>
//       <Alert alert={alert}/>
//       {/* <TextForm showAlert={showAlert} mode={mode}/> */}
//       <TextForm showAlert={showAlert} />
      
//     </div>
//   )
// }

// export default App

