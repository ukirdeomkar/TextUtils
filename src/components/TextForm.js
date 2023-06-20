import React ,{useState} from 'react'


export default function TextForm(props) {

    const handleOnClick=()=>{
        console.log("You have clicked submit button");
    }
    // const handleOnChange=()=>{
    //     console.log("You have clicked submit button");
    // }
    const [text, setText] = useState('Enter Text Here');
    // text = "ener here " - Wrong way to change state
    // setText("123"); - Correct way to change state
  return (
    <div>
        <div className="container">
            <div className="mb-3 my-3">
            <h1>{props.textTitle}</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleOnClick}>Submit</button>
        </div>
        
        
    </div>
  )
}
