import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';
import MenuList from "../../containers/MenuList";
import {Route} from "react-router-dom";
import AboutCollege from "../AboutCollege/AboutCollege";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <MenuList />
            <div className='app-wrapper-content'>
              <Route path='/college'
                     render={() => <AboutCollege/>}/>

            </div>
            <Footer/>
        </div>
    );
}

export default App;
