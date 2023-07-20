import { Link, Routes, Route } from "react-router-dom";
import { route } from "routes-gen";
import logo from './logo/Ebook Generator.png';
import Webnovel from './components/webnovel';
import WebnovelViewer from './components/webnovel_viewer';
import React, { useState } from 'react';

function App() {
    // usestate for setting a javascript
    // object for storing and using data
    // const [data, setdata] = useState({
    //     name: "",
    //     age: 0,
    //     date: "",
    //     programming: "",
    // });
 
    // Using useEffect for single rendering
    // useEffect(() => {
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
    //     fetch("/data").then((res) =>
    //         res.json().then((data) => {
    //             // Setting a data from api
    //             setdata({
    //                 name: data.Name,
    //                 age: data.Age,
    //                 date: data.Date,
    //                 programming: data.programming,
    //             });
    //         })
    //     );
    // }, []);

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
      setIsHover(true);
    };
    const handleMouseLeave = () => {
      setIsHover(false);
    };

    const myUl = {
        backgroundColor: "#1c1d21",
        listStyleType: "none",
        margin: 0,
        border: 0,
        padding: 0,
        width: "260px",
        height: "100%", 
        position: "fixed", 
        overflow: "auto", 
    };
    const logoDesign = {
        width: "200px",
        height: "75px",
    };
    const liTitel = {
        borderBottom: "1px solid #33343a", 
        height: "75px",
        lineHeight: "70px",
        textAlign: "center",
        marginBottom: "20px",
    };
    const liNav = {
        fontSize: "22px",
        paddingLeft: "30px",
        paddingBottom: "20px",
        paddingTop: "20px",
        paddingRight: "30px",
    };
    const linkStyle = {
        display: "block",
        color: isHover? "#dee2e6" : "hsla(0,0%,100%,.75)",
        textDecoration: "none",
    };
    return (
      <div>
        <nav>
            <ul style={myUl}>
                <li style={liTitel}>
                    <img style={logoDesign} src={logo} alt="Logo" height="40" />
                </li>
                <li style={liNav}>
                    <Link style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to={route("/")}>Create Ebook</Link>
                </li>
                <li style={liNav}>
                    <Link style={linkStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} to={route("/webnovelviewer")}>Ebook Libary</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Webnovel />}/>
            <Route path="/webnovelviewer" element={<WebnovelViewer />}/>
        </Routes>
    </div>
    );
}
 
export default App;