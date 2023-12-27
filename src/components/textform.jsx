import React, { useState } from "react";

export default function TextForm(props) {
  const buttonclicked = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Converted to UpperCase!","success");
  };
  const buttonloclicked = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Converted to LowerCase!","success");

  };
  const handlecopy = () => {
    let newtext=document.getElementById("exampleFormControlTextarea1");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showalert("Text has been Copied!","success");

  };
  const handleextraspace = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showalert("Extra Spaces have been removed!","success");

  };
  const handlebold= () => {
    settext(newtext.join(" "));
  };
  const onchangehandler = (event) => {
    settext(event.target.value);
  };
  const handleclear=()=>{
    settext("");
    props.showalert("Text has been cleared!","success");
  }
  const countwords=()=>{
    let words=text.split(" ");
    let cnt=0;
    for(let word of words){
      if(word!=="")
      cnt++;
    }
    return cnt;
  }
  const [text, settext] = useState("");
  return (
    <>
    <div className="my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Enter text for formatting</h1>
      {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
      <textarea
        value={text}
        style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
        onChange={onchangehandler}
        className="form-control my-3"
        id="exampleFormControlTextarea1"
        rows="8"
      ></textarea>
      <button className="btn btn-primary my-3 mx-3" onClick={buttonclicked}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={buttonloclicked}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={handlecopy}>
        copy text
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleclear}>
        clear text
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleextraspace}>
remove extra space
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={handlebold}>
bold text(under construction)
      </button>
    </div>
    <div  style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{countwords()} word(s) and {text.length} character(s)</p>
    <p>{0.008 * countwords()} minute(s) read</p>
    <h2><u>Preview</u></h2>
    <p className="text-wrap border border-dark" style={{overflow:"scroll"}}>{text}</p>
    {/* have to solve this discrepancy */}
    </div>
        
</>
  );
}
