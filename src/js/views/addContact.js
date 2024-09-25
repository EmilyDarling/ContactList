import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate} from "react-router-dom";

import { Context } from "../store/appContext";


export const AddContact = () => {
	const { store, actions, setStore } = useContext(Context);
    let {contactid} = useParams();
    let contactIndex = parseInt(contactid);
	let newName = store.contacts[contactIndex].name,
	 newEmail = store.contacts[contactIndex].email,
	 newPhone = store.contacts[contactIndex].phone,
	  newAddress = store.contacts[contactIndex].address;

	const navigate = useNavigate();
	const submit = () =>{
		actions.updateContact(newName, newPhone, newEmail, newAddress, parseInt(store.contacts[contactIndex].id)); 
		//navigate("/");
	}

	return (
		<div className="container">
		<div>
			<h1 className="text-center mt-5">Add a new contact</h1>
			<form>
				<div className="form-group">
					<label>Full Name</label>
					<input type="text" className="form-control" placeholder={store.contacts[contactIndex].name} 
					onChange= {(e)=> newName=e.target.value} />
				</div>
				<div className="form-group">
					<label>Email</label>
					<input type="email" className="form-control" placeholder={store.contacts[contactIndex].email} 
					onChange= {(e)=> newEmail=e.target.value}/>
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input type="phone" className="form-control" placeholder={store.contacts[contactIndex].phone} 
					onChange= {(e)=> newPhone=e.target.value}/>
				</div>
				<div className="form-group">
					<label>Address</label>
					<input type="text" className="form-control" placeholder={store.contacts[contactIndex].address} 
					onChange= {(e)=> newAddress=e.target.value}/>
				</div>
				<button type="button" className="btn btn-primary form-control" onClick= {()=> submit()}>save</button>
				<Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
			</form>
		</div>
	</div>
	);
};
