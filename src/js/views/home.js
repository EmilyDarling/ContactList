import React, { useState , useEffect, useContext} from "react";
import { Navbar } from "../component/navbar";
import { useNavigate} from "react-router-dom";
import { Context } from '../store/appContext.js';
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard";
import { Modal } from "../component/modal";

export const Home = () => {
	const { actions,store } = useContext(Context);

	useEffect(() => {
		actions.getAllContacts();
        

	}, []);

	return (
		<div className="container">
                <div>
                    <p className="text-right my-3">
                        {/* <Link className="btn btn-success" to="/add">Add new contact</Link> */}
                    </p>
                    <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                        <ul className="list-group pull-down" id="contact-list">
                            {/* <ContactCard onDelete={() => this.setState({ showModal: true})} /> */}
                            {store.contacts.map((aContact,index) =>  
							<ContactCard ind={index} contact={aContact} />)}
                            
                        </ul>
                    </div>
                </div>
                 <Modal /> 
            </div>
	);
};
