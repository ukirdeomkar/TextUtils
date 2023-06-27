import React,{useState} from 'react'

export default function About(props) {

    // const [myStyle,setMyStyle] = useState({color : 'black' ,backgroundColor : 'white'});
    // const [btnText , setbtnText] = useState("Enable Dark Mode");
    // const changeWStyle=()=>{
    //     // console.log("Style change clicked");
    //     setMyStyle({
    //         color : 'black',
    //         backgroundColor : 'white',
    //     })
    // }
    // const changeBStyle=()=>{
    //     // console.log("Style change clicked");
    //     setMyStyle(
    //         {color : 'white' ,backgroundColor : 'black'}
    //     )
    // }

    // const changeStyle=()=>{
    //     if(myStyle.color==='black'){
    //         setMyStyle({
    //             color : 'white' ,backgroundColor : 'black',
    //         })
    //         setbtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'black' ,backgroundColor : 'white',
    //         })
    //         setbtnText("Enable Dark Mode");
    //     }
    // }


    let myStyle =  {backgroundColor:props.currentMode , color : props.mode=='light'?'black':'white'}
    if(props.currentMode === 'Dark'){
        myStyle = {backgroundColor:'black' , color : 'white'} 
    }

        
    
   

  return (
    <div className="container" style={myStyle}>
        <div className="container my-3" style={myStyle}>
        <div className="accordion" id="accordionExample"  >
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" >
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        <strong>Analyze your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p> See quick count of Words, Sentences , Chararcters and Time required to read the text.</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                        <strong>Free to Use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>Text-Utils is a free to use web-app</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        <strong>Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p> Text-Utils is compatible on all web browsers and can be used on android, ios & web </p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        <div className="container  my-3">
            {/* <button onClick={changeStyle} className="btn btn-primary">{btnText}</button> */}
            {/* <button onClick={changeWStyle} className="btn btn-primary">Enable Light Mode</button> */}
        </div>
    </div>
  )
}
