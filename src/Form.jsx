import React,{useState} from "react";

function Form () {

    /**
     * Hard coded
     */
    const [name,setName] = useState("");
    
    const [fullName,setFullName] = useState("");

    const [email,setEmail] = useState("");

    const [newEmail,setNewEmail] = useState("");

    const setInputFormName = (event)=> {
        setName(event.target.value);
    }

    const setInputFormEmail = (event)=> {
        setEmail(event.target.value);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        
        setFullName(name);

        setNewEmail(email);
    }
    

    return(
        <>
            <h1>{fullName} {newEmail}</h1>
            <form onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label>Email address:-</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={setInputFormEmail}/>
                </div>
                <div className="form-group mt-2">
                    <label>Name:-</label>
                    <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={setInputFormName} />
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </>
    );
}

export default Form;

