import React, { useState , useEffect, useContext} from 'react';
import {withRouter, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from '../store/appContext.js';

export const ContactCard = (props) => {
    const { actions,store } = useContext(Context);
    const navigate = useNavigate();
    let id = parseInt(props.contact.id);

        return (
            <li className="list-group-item" key={props.ind}>
                <div className="row w-100">
                    <div className="col-12 col-sm-6 col-md-3 px-0">
                        <img src="https://cdn.theatlantic.com/media/mt/science/cat_caviar.jpg" alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left" >
                        <div className=" float-right">
                            <button className="btn" onClick={() => navigate(`/updateContact/${id}`)}><i className="fas fa-pencil-alt mr-3"></i></button>
                            <button className="btn" onClick={() => actions.deleteContact(id)}><i className="fas fa-trash-alt"></i></button>
                        </div>
                        <label className="name lead">{props.contact.name}</label>
                        <br /> 
                        <i className="fas fa-map-marker-alt text-muted mr-3"></i>
                        <span className="text-muted">{props.contact.address}</span>
                        <br />
                        <span className="fa fa-phone fa-fw text-muted mr-3" data-toggle="tooltip" title="" data-original-title="(870) 288-4149"></span>
                        <span className="text-muted small">{props.contact.phone}</span>
                        <br />
                        <span className="fa fa-envelope fa-fw text-muted mr-3" data-toggle="tooltip" data-original-title="" title=""></span>
                        <span className="text-muted small text-truncate">{props.contact.email}</span>
                    </div>
                </div>
            </li>
        );
    }
    
