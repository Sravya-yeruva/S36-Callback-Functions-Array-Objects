import React, { useRef } from 'react'

function MarkSheet() {
    let FirstNameInputRef=useRef();
    let LastNameInputRef=useRef();
    let TelMarksInputRef=useRef();
    let HinMarksInputRef=useRef();
    let EngMarksInputRef=useRef();
    let MathMarksInputRef=useRef();
    let SciMarksInputRef=useRef();
    let SocMarksInputRef=useRef();
    let ResultLabelRef=useRef();

    let TelResultRef=useRef();
    let HinResultRef=useRef();
    let EngResultRef=useRef();
    let MathResultRef=useRef();
    let SciResultRef=useRef();
    let SocResultRef=useRef();

    let calculateResult =()=>{
      let FirstName=FirstNameInputRef.current.value;
      let LastName=LastNameInputRef.current.value;
      let TelMarks=Number(TelMarksInputRef.current.value);
      let HinMarks=Number(HinMarksInputRef.current.value);
      let EngMarks=Number(EngMarksInputRef.current.value);
      let MathMarks=Number(MathMarksInputRef.current.value);
      let SciMarks=Number(SciMarksInputRef.current.value);
      let SocMarks=Number(SocMarksInputRef.current.value);

      let TotalMarks= TelMarks+ HinMarks+ EngMarks+ MathMarks+ SciMarks+ SocMarks;

      ResultLabelRef.current.innerHTML=(`${FirstName} ${LastName} got total marks ${TotalMarks}`);

     
      alert(`Final Result ${TotalMarks}`);

    }

    let inputonFocus=(inputRef,bgcolor="pink",textColor="black")=>{
      inputRef.current.style.backgroundColor=bgcolor;
      inputRef.current.style.color=textColor;
    }

    let inputonChange=(inputRef,ResultRef)=>{
      if(inputRef.current.value >=0 && inputRef.current.value <=100)
        if(inputRef.current.value >=35){
          ResultRef.current.innerHTML="pass 😇"
          ResultRef.current.style.color="green"
        }else{
          ResultRef.current.innerHTML="Fail 😒"
          ResultRef.current.style.color="red"
        }
        else{
          ResultRef.current.innerHTML="Invalid 🙅"
          ResultRef.current.style.color="brown"
        }
    }

    let inputonBlur=(inputRef)=>{
      inputRef.current.style.backgroundColor="yellow"
    }

    let calculateTenthResult=(Telmarks, Hinmarks, Engmarks, Mathmarks, Scimarks, Socmarks,passFunction,failFunction)=>{
      let passmarks=35;
      if (Telmarks >= passmarks &&
          Hinmarks >= passmarks &&
          Engmarks >= passmarks &&
          Mathmarks >= passmarks &&
          Scimarks >= passmarks &&
          Socmarks >= passmarks
      ){
        // console.log('student pass in tenth');
        passFunction();
      }else{
        // console.log('student Fail in Tenth')
        failFunction();
      }

    }
    calculateTenthResult(10,20,30,40,50,60,()=>{
      console.log(`student pass in tenth`);},()=>{
        console.log(`student fail in tenth`)
      })

      let SravyaDetails={
        FirstName:"Sravya",
        LastName:"yeruva",
        age:20,
        Location:"hyderabad",
        Telmarks:55,
        Hinmarks:88,
        Engmarks:88,
        Mathmarks:99,
        Scimarks:77,
        Socmarks:66,

      }
      console.log(SravyaDetails.age);
       
      let InduDetails={
        FirstName:"Indu",
        LastName:"jujjuri",
        age:20,
        Location:"hyderabad",
        Telmarks:88,
        Hinmarks:88,
        Engmarks:55,
        Mathmarks:77,
        Scimarks:66,
        Socmarks:77,
      }
      console.log(InduDetails.Location)

      if(SravyaDetails.age >= InduDetails.age){
        console.log('Sravya is senior')
      

      }else{
        console.log('Indu is Senior')
      }

     let {FirstName,LastName,age,Location,Telmarks,Engmarks,Hinmarks,Mathmarks,Scimarks,Socmarks}=SravyaDetails
     console.log(Telmarks)
    
     let PranaviDetails=["Pranavi","Maddineni",21,"Hyderabad",56,78,89,90,45,67];
     console.log(PranaviDetails);
     console.log(PranaviDetails[2]);
     console.log(PranaviDetails[5]);
     console.log(PranaviDetails[8]);
     console.log(PranaviDetails[1]);

    
  return (
    <div>
      <form>
       
           
        <div>
        <label>First Name:</label>
        <input type="text" ref={FirstNameInputRef}></input>
        <label ></label>
        </div>
        <div>
        <label>Last Name:</label>
        <input type="text" ref={LastNameInputRef}></input>
        <label ></label>
        </div>
       
        <h1 className="headingH">Subject Wise Marks of a Student</h1>
        <div>
        <label>Telugu Marks:</label>
        <input type="number" ref={TelMarksInputRef}
        onFocus={()=>{
        inputonFocus(TelMarksInputRef,"red","white");
        }}
        onChange={()=>{
          inputonChange(TelMarksInputRef,TelResultRef);
        }}
        onBlur={()=>{
          inputonBlur(TelMarksInputRef);
        }}
        ></input>
        <label ref={TelResultRef} ></label>
        </div>
        <div>
        <label>Hindi Marks:</label>
        <input type="number" ref={HinMarksInputRef}
         onFocus={()=>{
          inputonFocus(HinMarksInputRef,"red", "white");
        }}
        onChange={()=>{
          inputonChange(HinMarksInputRef,HinResultRef);
        }}
        onBlur={()=>{
          inputonBlur(HinMarksInputRef);
        }}
        ></input>
        <label ref={HinResultRef}></label>
        </div>
        <div>
        <label>English Marks:</label>
        <input type="number" ref={EngMarksInputRef}
         onFocus={()=>{
          inputonFocus(EngMarksInputRef, "red", "white");
        }}
        onChange={()=>{
          inputonChange(EngMarksInputRef,EngResultRef);
        }}
        onBlur={()=>{
          inputonBlur(EngMarksInputRef);
        }}
        ></input>
        <label ref={EngResultRef}></label>
        </div>
        <div>
        <label>Maths Marks:</label>
        <input type="number" ref={MathMarksInputRef}
         onFocus={()=>{
          inputonFocus(MathMarksInputRef);
        }}
        onChange={()=>{
          inputonChange(MathMarksInputRef,MathResultRef);
        }}
        onBlur={()=>{
          inputonBlur(MathMarksInputRef);
        }}
        ></input>
        <label ref={MathResultRef}></label>
        </div>
        <div>
        <label>Science Marks:</label>
        <input type="number" ref={SciMarksInputRef}
         onFocus={()=>{
          inputonFocus(SciMarksInputRef);
        }}
        onChange={()=>{
          inputonChange(SciMarksInputRef,SciResultRef);
        }}
        onBlur={()=>{
          inputonBlur(SciMarksInputRef);
        }}
        ></input>
        <label ref={SciResultRef}></label>
        </div>
        <div>
        <label>Social Marks:</label>
        <input type="number" ref={SocMarksInputRef}
         onFocus={()=>{
          inputonFocus(SocMarksInputRef);
        }}
        onChange={()=>{
          inputonChange(SocMarksInputRef,SocResultRef);
        }}
        onBlur={()=>{
          inputonBlur(SocMarksInputRef);
        }}
        ></input>
        <label ref={SocResultRef}></label>
        </div>
        <div>
            <button type="button" onClick={()=>{
               calculateResult();
            }}>Result</button>
        </div>
        <label style={{width:"350px"}} ref={ResultLabelRef}>Total Result of a Student</label>
      </form>
    </div>
  )
}

export default MarkSheet
