import React, {useState} from 'react';

const Form = (props) => {
    const[firstname, setFirstName] = useState("");
    const[lastname, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmpassword, setConfirmPassword] = useState("");
    // const[firstnameerrors, setFirstNameErrors] = useState("");
    
    // const onNameChange = (event) => {
    //     setFirstName(event.target.value);

    //     if(event.target.value.length < 3){
    //         setFirstNameErrors("name should be 3 characters")
    //     }
    //     else{
    //         setFirstNameErrors("")
    //     }
    // }



    return(
        <div className="form">
            <h1>Hello</h1>
            <form>
                <div className="form-group" >
                    <label>FirstName</label>
                    <input type="text" name="first" onChange={onNameChange}/>
                    <span className="alert-danger">{firstnameerrors}</span>
                </div> 
                <div className="form-group">
                    <label>LastName</label>
                    <input type="text" name="first" onChange={(event)=>setLastName(event.target.value)}/>
                </div> 
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="first" onChange={(event)=>setEmail(event.target.value)}/>
                </div> 
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="first" onChange={(event)=>setPassword(event.target.value)} />
                </div> 
                <div className="form-group">
                    <label>Confirm password</label>
                    <input type="password" name="first" onChange={(event)=>setConfirmPassword(event.target.value)}/>
                </div>  
                <input type="submit" />  
            </form>
            <div>
                <p>FirstName: {firstname}</p>
                <p>LastName: {lastname}</p>
                <p>Email: {email}</p>
                <p>passowrd: {password}</p>
                <p>confirmpassword: {confirmpassword}</p>
            </div>
        </div>
    )
}

export default Form;