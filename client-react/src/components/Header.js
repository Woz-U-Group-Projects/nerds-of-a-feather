import React from 'react';

const Header = ({ title }) => (
    <div>
        <a href="/">Home</a>
        <a href="/sign up">Sign Up</a>
        <a href="/Login">Login</a>
        <a href="/Cars">Car Directory </a>
        <a href="/Car Form">Add Your Car</a>
        <h1>{title}</h1>
    </div>);

    export default Header;

