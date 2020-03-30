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
    const showResult = function (source, e) {
        let i = 0;
        let selectedPropertiesStr = "You selected:\n";

        if (source.state.petNameText) {
            i+=1;
            selectedPropertiesStr += `Pets Name: ${source.state.petNameText}\n`
        }
        if (source.state.petDescriptionText) {
            i+=2;
            selectedPropertiesStr += `Pets Description: ${source.state.petDescriptionText}\n`
        }
        if (source.state.petImageClass) {
            i+=4;
            const typePets = source.state.petImageClass.substr(3)
            selectedPropertiesStr += `Pets Type: ${typePets}\n`
        }
        if (typeof source.state.colorList[source.state.petColor] != "undefined") {
            i+=8;
            selectedPropertiesStr += `Pets Color: ${source.state.colorList[source.state.petColor]}\n`
        }
        if (i===4) {
            selectedPropertiesStr += "Please select some features of your pet."
        }

        alert(selectedPropertiesStr);
    }
    return <div>
        <Logo/>
        <AddNewForm vars={{colorList}} handlers={{showResult}}> </AddNewForm>
    </div>
}

export default App;
