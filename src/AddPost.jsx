import { useState } from "react"
import camera from './images/camera.png'
import icon from './images/icon.png'
import { Link } from "react-router-dom"
import './css/addpost.css'
import './css/showpost.css'

export const AddPost = () => {
    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [file, setfile] = useState(null);
    const [desc, setdesc] = useState("");

    const handleSubmit = () => {
        const formdata = new FormData();
        formdata.append('name', name);
        formdata.append('address', address);
        formdata.append('file', file);
        formdata.append('desc', desc);

        formdata.forEach((val, key) => {
            console.log(val, key)
        })

        fetch("http://localhost:8080/api", {
            method: 'POST',
            body: formdata
        })
    }

    function HandleBrowseClick() {
        var fileinput = document.getElementById("browse");
        fileinput.click();
    }

    function HandleChange(e) {
        var fileinput = document.getElementById("browse");
        var textinput = document.getElementById("filename");
        textinput.value = fileinput.value;
        setfile(e.target.files[0])
    }

    return (
        <div>
            <section>
                <div id="div">
                    <img className="imag1" src={icon} alt="icon" height="50px" width="50px" />
                    <h2 className="heading">Instaclone</h2>
                    <img className="camera" src={camera} alt="camera" height="40px" width="40px" />
                </div>
            </section>
            <section id="form-container">
                <div className="browsebtn">
                    <input type="file" id="browse" name="fileupload" style={{ display: "none" }} onChange={HandleChange} />
                    <input type="text" id="filename" readOnly={true} placeholder="No File Choosen" />
                    <input type="button" value="Browse" id="fakeBrowse" onClick={HandleBrowseClick} />
                </div>
                <div className="user">
                    <input className="author" id="author" placeholder="Author" onChange={(e) => setname(e.target.value)} />
                    <input className="location" id="location" placeholder="Location" onChange={(e) => setaddress(e.target.value)} />
                </div>
                <input className="description" placeholder="description" onChange={(e) => setdesc(e.target.value)} />
                <Link to="/show">   <button className="btn" onClick={handleSubmit}>Post</button> </Link>
            </section>
        </div>
    )
}