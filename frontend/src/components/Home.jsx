// import React from 'react';
import { Link } from "react-router-dom";
import sample from'../images/sample img.png'
import './home.css'
const Home = () => {
  return (
    <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <h1>Login Success Page</h1>
        <img className="sample-img" src={sample}/>
      
        <Link to='/login' className="btn btn-light my-5">Logout</Link>
    </div>
  )
}

export default Home