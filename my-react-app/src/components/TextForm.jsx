import React, {useState} from 'react'

function TextForm(props){

  const [text, setText] = useState('Enter Text Here')

  const handleClearClick = () =>{
    setText("")
    props.showAlert("Cleared", "success")
  }
  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  }
  
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase", "success")
  }

  const handleToCopyText = ()=>{
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied Text", "success")
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/\s+/).join(" ")
    setText(newText)  
    props.showAlert("Removed Spaces", "success")  

  }

  const handledOnChange = (e) =>{
    console.log("On Change");
    setText(e.target.value)

  }

  
  return(
    <div>
      <div className="container" style={{color: props.mode === "dark" ? "white" : "black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handledOnChange} style={{backgroundColor: props.mode === "dark" ? "#042743" : "white", color: props.mode === "dark" ? "white" : "black"}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-5" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-5" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-5" onClick={handleToCopyText}>Copy Text</button>
      <button className="btn btn-primary mx-5" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container" style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h2>Your Text Summary</h2>
        <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Seconds Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text:"Enter something to Textbox to preview it"}</p>
      </div>
    </div>
  )
}
 
export default TextForm

// import React, {useState} from 'react'

// function TextForm(props){
  
//   const [text, setText] = useState("Enter Text Here")

//   const convertToUpperCase = ()=>{
//     let newText = text.toUpperCase()
//     setText(newText)
//     props.showAlert("Converted to Uppercase", "success")
//   }

//   const convertToLowerCase = ()=>{
//     let newText = text.toLowerCase()
//     setText(newText)
//     props.showAlert("Converted to LowerCase", "success")
//   }

//   const clearText = ()=>{
//     setText("")
//   }

//   const removeSpaces = ()=>{
//     let newText = text.split(/\s+/).join(" ")
//     setText(newText)
//   }

//   const copyText = ()=>{
//     let text = document.getElementById("myBox")
//     text.select()
//     navigator.clipboard.writeText(text.value)
//   }



//   const handledOnChange = (e)=>{
//     setText(e.target.value)
//   }



//   const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

//   return(
//     <div className="container" >
//       <h2 className="my-4">Enter the Text to analyze below</h2>
//       <div className="mb-3">
//         {/* <textarea className="form-control" value={text} onChange={handledOnChange} style={{backgroundColor: props.mode === "dark" ? "gray" : "white", color: props.mode === "dark" ? "white" : "black"}} id="myBox" rows="8"></textarea> */}
//         <textarea className="form-control" value={text} onChange={handledOnChange} id="myBox" rows="8"></textarea>
//       </div>
//         <button type="button" className="btn btn-primary mx-3" onClick={convertToUpperCase}>Convert To UpperCase</button>
//         <button type="button" className="btn btn-primary" onClick={convertToLowerCase}>Convert To LowerCase</button>
//         <button type="button" className="btn btn-primary mx-3" onClick={clearText}>Clear Text</button>
//         <button type="button" className="btn btn-primary" onClick={removeSpaces}>Remove Extra spaces</button>
//         <button type="button" className="btn btn-primary mx-3" onClick={copyText}>Copy Text</button>

//         <div className="container my-3">
//           <h2>Your Text Summary</h2>
//           <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
//           <p>{0.008*text.split(" ").length} seconds to read this text</p>
//           <h3>Preview</h3>
//           <p>{text.length>0?text:"Enter the text to preview here"}</p>
//         </div>
      
//     </div>
//   )
// }

// export default TextForm