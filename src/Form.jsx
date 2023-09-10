import React,{useState} from "react";

function Form () {

    const [fullName,setFullName] = useState({
        first_name : "",
        email : "",
    });

    const getInputValue = (event)=> {
        const {name ,value} = event.target;

        setFullName((previousValue) => {
            console.log(previousValue);
            return{
                ...previousValue,
                [name]  : value
            }
        });
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        
        console.log("Form Submitted successfully");

        // alert("Form Submitted Successfully");
        // setFullName(name);
    }
    

    return(
        <>
            <h1> Your Name Is:- {fullName.first_name} Your Email Is:- {fullName.email} </h1>
            <form onSubmit={onSubmitForm}>
                <div className="form-group mt-2">
                    <label>Name:-</label>
                    <input type="text" name="first_name" className="form-control" placeholder="Enter Name" value={fullName.first_name} onChange={getInputValue} />
                </div>
                <div className="form-group">
                    <label>Email address:-</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" value={fullName.email} onChange={getInputValue}/>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </>
    );
}

export default Form;
