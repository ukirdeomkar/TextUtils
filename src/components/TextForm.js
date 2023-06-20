import React ,{useState} from 'react'


export default function TextForm(props) {

    const handleOnUpClick=()=>{
        // console.log("You have clicked submit button");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase','success');
    }
    const handleOnLowClick=()=>{
      // console.log("You have clicked submit button");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to Lowercase','success');
    }
    const handleOnClearClick=()=>{
      // console.log("You have clicked submit button");
      let newText = '';
      setText(newText);
      props.showAlert('Cleared Text','success');

    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    const re = /[.!?]/;
    const numOfSentences = text.split(re);
    // text = "ener here " - Wrong way to change state
    // setText("123"); - Correct way to change state
  return (
    <>
    <div className='container'>
        <div className="container">
            <div className="mb-3 my-3" >
            <h1>{props.textTitle}</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor : props.mode==='dark'?'black':'white' , color : props.mode==='dark'?'white':'black'}} value={text} rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleOnUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleOnLowClick}>Convert to LowerCase</button>

            <button className="btn btn-danger mx-2" onClick={handleOnClearClick}>Clear Text</button>


        </div>
        <div className="container my-4">
          <h2>Your Text Summary</h2>
          <p>{numOfSentences.length - 1} Sentences and {text.split(" ").length} Words and {text.length} Characters</p>
          <p> Average time required to read this text : {(0.08 * text.split(" ").length).toFixed(2)} minutes</p>
        </div>

        <div className="container my-4">
            <h2>Text Preview</h2>
            <p>{text.length>0 ? text : 'Enter Something to preview your text here'}</p>
        </div>
        
        
    </div>
    </>
  )
}
