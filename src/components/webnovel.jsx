import React from 'react';
import { useState, useEffect } from "react";

function Webnovel() {
    const divBody = {
        marginTop: "0px",
        marginRight: "0px",
        marginLeft: "260px",
        marginBottom: "0px",
        paddingTop: "20px",
        paddingLeft: "20px",
        backgroundColor: "#23242a",
        position: "absolute",
        height: "100vh", 
    };
    const pageTitel = {
        fontSize: "26px",
        textAlign: "center",
        color: "hsla(0,0%,100%,.75)",
        textDecoration: "none",
    };
    const novelInputTitel = {
        paddingTop: "30px",
        paddingBottom: "30px",
        fontSize: "22px",
        color: "hsla(0,0%,100%,.75)",
        textDecoration: "none",
        textAlign: "center",
    };
    const inputUrl = {
        width: "860px",
		background: "#fff",
		color: "$input-text-color",
		font: "inherit",
		border: 0,
		outline: 0,
		padding: "15px 18px",
    };
    const urlButton = {
        marginLeft: "-76px",
        display: "inline-block",
        background: "#764bc4",
        color: "inherit",
        font: "inherit",
        border: 0,
        outline: 0,
        padding: "12px 36px",
        transition: "all 200ms ease-in",
        cursor: "pointer",
    };
    const container = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    };
    const novelImage = {
        width: "260px",
        height: "320px",
        border: "2px",
        textAlign: "right",
        margin: "30px",
    };
    const right = {
        display: "flex",
        flexDirection: "row-reverse",
        textAlign: "right",
    };
    const novelTitel = {
        textAlign: "left",
        paddingTop: "30px",
        paddingBottom: "30px",
        fontSize: "22px",
        color: "hsla(0,0%,100%,.75)",
        textDecoration: "none",
    };
    const padding = {
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "20px",
    };
    const column = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    };
    const chapterInplut = {
        marginRight: "25px",
        width: "200px",
        height: "30px",
    };


    const [data, setdata] = useState({
        titel: "",
        descripiton: "",
        image: "",
    });
    var url = ""

    useEffect(() => {
        if (url !== "")
        fetch("/novel?url=" + url).then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    titel: data.titel,
                    descripiton: data.descripiton,
                    image: data.imagePath,
                });
            })
        );
    }, [setURl]);
    
    function setURl() {
        var input = document.getElementById('novelInput');
        url = input;
    }
    return (
        <body style={divBody}>
            <h2 style={pageTitel}>Create a Ebook from a Webnovel</h2>
            <div style={container}>
                <form style={novelInputTitel}>
                    <p style={{textAlign: "left"}}>Input the Url of the Novel:</p>
                    <input style={inputUrl} type="text" id="novelInput" placeholder="Enter Url" />
                    <button style={urlButton} onClick={setURl()} type="button">Search</button>
                </form>
            </div>
            
            <div style={right}>
                <div style={novelImage}>
                    <img src={data.image} alt={"image not found"} width={260} height={360} />
                </div>
                <div style={novelTitel}>
                    <h2 style={{textAlign: "center", fontSize: "22px"}}>data.titel</h2>
                    <p style={padding}>
                        data.description
                    </p>
                    <div style={column}>
                         <div style={padding}>
                            <p style={{marginBottom: "5px"}}>Enter the first Chapter:</p>
                            <input style={chapterInplut} type="text" id="firstChapter" placeholder="First Chapter" /> 
                        </div>
                        <div style={padding}>
                            <p style={{marginBottom: "5px"}}>Enter the last Chapter:</p>
                            <input style={chapterInplut} type="text" id="lastChapter" placeholder="Last Chapter" />
                        </div>
                        <div style={padding}>
                            <p style={{marginBottom: "5px"}}>Enter the Class Name:</p>
                            <input style={chapterInplut} type="text" id="lastChapter" placeholder="Class Name" />
                        </div>
                        <div style={padding}>
                            <p style={{marginBottom: "5px"}}>Enter the Class Type:</p>
                            <input style={chapterInplut} type="text" id="lastChapter" placeholder="Class Type" />
                        </div>
                    </div>
                </div>
            </div>

            <div style={container}>
                <form style={novelInputTitel}>
                    <p style={{textAlign: "left"}}>Input the first Chpaters Url:</p>
                    <input style={inputUrl} type="text" id="novelInput" placeholder="Enter Url" />
                    <button style={urlButton} type="button" >Start Test</button>
                </form>
            </div>

            <div>
                <h2>Testing
                    <button></button>
                </h2>
                <div>
                    <p>Description for the testing section goes here.</p>
                </div>
            </div>

            <section>
                <input type="text" id="removeList" placeholder="elements to remove" />
            </section>
        </body>
    )
}

export default Webnovel;