import React, {useState} from 'react';
//import axios from 'axios';
//import SubRequests from 'd8-subrequests';
//import logo from './logo.svg';
import Logo from './Logo';
import './App.scss';
import Avatar from './Avatar';
import AddNewForm from './AddNewForm'

 function App() {

const colorList = Avatar.getColors()

     return <div>
         <Logo/>
         <AddNewForm  vars={{colorList}}> </AddNewForm>
     </div>
 }

export default App;
