// MyPortfolioBNew - Jordan Timianis - 301352262 - September 20th
import React from 'react';
import { Link } from 'react-router-dom';
import orange_logo from '../src/assets/orange_img.png';
export default function Layout() {
    return (
    <>
    <section id="nav">
        <div className="heading">
            <img src={orange_logo}alt="logo" className="heading_logo1" width="100px" height="100px"/>
            <h1>My Portfolio</h1>
            <img src={orange_logo}alt="logo" className="heading_logo2" width="100px" height="100px"/>
        </div>
        <hr />
        <nav>
            |-----<Link to="/">Home</Link>-----|-----<Link to="/about">About</Link>-----|-----<Link to="/education">Education</Link>-----|-----<Link to="/project">Project</Link>-----|-----<Link to="/contact">Contact</Link>-----|
        </nav>
        <br/>
        <hr />
    </section>
    </>
    );
}
