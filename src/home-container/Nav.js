import React,{Component,useState} from 'react';
import 'tachyons';
import './Nav.scss';
import { useLocation } from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap'
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { HashLink as Link } from 'react-router-hash-link';
import  logo from './debugged.png';
const Nav1 =()=>
{

  const location = useLocation();

    return (
      <Navbar fixed="top" variant="dark" className="Navbar-color" expand="lg">
        <Navbar.Brand>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img src={logo} style={{height:'50px',width:'190px'}} alt='logo' />
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"className="white"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto Navbar-text-color right" >
             <Link to='/#homeicon' ><span className={`white nav  ul f4 pa2 ${location.hash==='#homeicon'?'active1':'left ul'} `} >Home</span></Link>
             <Link to='/#about'><span className={`white nav  ul f4 pa2 ${location.hash==='#about'?'active1':'left ul'} `}>About Us</span></Link>
             <Link to='/work/#projcomp'><span className={`white nav  ul f4 pa2 ${location.hash==='#projcomp' && location.pathname==='/work/'?'active1':'left ul'} `}> Our Work</span></Link>
             <Link to='/contact/#contactdiv'><span className={`white nav  ul f4 pa2 ${location.pathname==='/contact/'&& location.hash==='#contactdiv'?'active1':'left ul'} `}>Contact Us</span></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }

export default Nav1;
