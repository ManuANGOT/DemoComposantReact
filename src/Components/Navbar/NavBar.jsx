import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Link
} from 'react-router-dom';
import AddContact from '../../Views/AddContacts/AddContacts';
import HomeView from '../..Views/HomeView';
import ContactListView from '../../Views'

import ErrorComponent from '../ErrorComponent/ErrorComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faFolderPlus, faHomeAlt } from "@fortawesome/free-solid-svg-icons";

import './NavBar.css';

const NavBar = ({ListContact, updateListContact}) => {
    return (
        <div>
            <BrowserRouter>
                <div className='navBar'>
                    <Link to='/' className='btn btn-secondary navBarBtn'>HomeView</Link>
                    <Link to='/list' className='btn btn-secondary navBarBtn'>List</Link>
                    <Link to='/add' className='btn btn-secondary navBarBtn'>Add</Link> 


                    <Link to="/">
                        <FontAwesomeIcon className="iconMenu" icon={faHome}/>
                    </Link>
                    <Link to="/list">
                        <FontAwesomeIcon className="iconMenu" icon={faAddressCard}/>
                    </Link>
                    <Link to="/add">
                        <FontAwesomeIcon className="iconMenu" icon={faFolderPlus}/>
                    </Link>
                    <hr/>
                </div>

                <Routes>
                    <Route path='/' element = {<HomeView/>}/>
                    <Route path='/list' element = 
                    {
                        <ContactListView 
                            ListContact={ListContact} 
                            updateListContact={updateListContact}
                        />
                    }/>
                    <Route path='/add' element = 
                    {
                        <AddContact 
                            ListContact={ListContact} 
                            updateListContact={updateListContact} 
                        />
                    }/>
                    <Route path='/*' element = {<ErrorComponent/>}/>
                </Routes>
            </BrowserRouter>
            <div className="container">
                <Outlet/>
            </div>
        </div>
    );
};

export default NavBar;