import React, { useState, useContext} from 'react';

import PropTypes from 'prop-types';
import { Context } from '../store/appContext.js';
import "../../styles/home.css";

export const Modal = (props) => {
    const { actions,store } = useContext(Context);
    
    const refresh =()=>{
        actions.deleteContact(store.contactID);
        actions.getAllContacts();
        actions.setShowModal(false);
    }

    return(
        <div className="modal" tabIndex="-1" role="dialog" style={{display: (store.showModal) ? 'inline-block' : 'none'}}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        
                    </div>
                    <div className="modal-body">
                        <p>If you delete this thing the entire universe will go down!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => actions.setShowModal(false) }>Oh no!</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => refresh()}>Yes baby!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}