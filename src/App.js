import { React, useEffect, useState } from 'react';
import Contact from './models/Contact';
import { personnes } from './Datas./datas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBarComponent/NavBar';

function App() {
 
  const savedList = JSON.parse(localStorage.getItem('List'));


  const contactList = savedList ?
    savedList.map((contact) => new Contact(contact.nom, contact.prenom, contact.email
      , contact.telephone))
    :
    null;

  const [ListContact, updateListContact] = useState(contactList ? contactList : []);

  useEffect(()=> {
    localStorage.setItem('List', JSON.stringify(ListContact))
  })

  return (
    <div className="App">
      <NavBar ListContact={ListContact} updateListContact={updateListContact} />
    </div>
  );
}

export default App;