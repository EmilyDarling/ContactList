import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate} from "react-router-dom";

import { Context } from "../store/appContext";


export const AddContact = () => {
	const { store, actions, setStore } = useContext(Context);
    
	let newName = "",
	 newEmail = "",
	 newPhone = "",
	  newAddress = "";

	const navigate = useNavigate();
	const submit = () =>{
		actions.addNewContact(newName, newPhone, newEmail, newAddress); 
		navigate("/");
	}

	return (
		<div className="container">
		<div>
			<h1 className="text-center mt-5">Add a new contact</h1>
			<form>
				<div className="form-group">
					<label>Full Name</label>
					<input type="text" className="form-control"  
					onChange= {(e)=> newName=e.target.value} />
				</div>
				<div className="form-group">
					<label>Email</label>
					<input type="email" className="form-control"
					onChange= {(e)=> newEmail=e.target.value}/> 
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input type="phone" className="form-control" 
					onChange= {(e)=> newPhone=e.target.value}/>
				</div>
				<div className="form-group">
					<label>Address</label>
					<input type="text" className="form-control" 
					onChange= {(e)=> newAddress=e.target.value}/>
				</div>
				<button type="button" className="btn btn-primary form-control" onClick= {()=> submit()}>save</button>
				<Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
			</form>
		</div>
	</div>
	);
};
