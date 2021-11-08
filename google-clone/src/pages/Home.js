import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps"; //icons were imported from from Material UI (npm install @material-ui/core && @material-ui/icons) 
import { Avatar } from "@material-ui/core";
import SH_LOGO from './SH_LOGO.jpg';
import Search from './Search';



function Home()
{
    return (
        <div className='home'>
            <div className='home-header'>
                <div className='home-headerLeft'>
                    <Link to = '/about'>About</Link>
                    <Link to='/store'>Store</Link>
                    
                </div>
                <div className='home-headerRight'>
                    <Link to = '/Side hustle'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />

                    
                </div>
            </div>

            <div className='home-body'>
                <img src={SH_LOGO} alt="Logo" />
                
                <div className='home-inputContainer'>
                <Search />
                </div>
            </div>
            
    



        </div>
        

            
    )
}

export default Home