import { useState } from "react"
import { useEffect } from "react"
import { json } from "react-router-dom";
import camera from './images/camera.png'
import icon from './images/icon.png'
import './css/showpost.css'
import { Link } from "react-router-dom";

export const ShowPosts = (props) => {
    const [data, setData] = useState(null);

    const fetchPost = async () => {
        const resp = await fetch('http://localhost:8080/all')
        setData(await resp.json())
    }

    useEffect(() => {
        fetchPost()
    }, [])

    console.log(data);

    if (data == null) {
        return (
            <div><h1>Loading</h1></div>
        )
    }
    return (
        <section>
            <section>
                <div id="div">
                    <img className="imag1" src={icon} alt="Instagram" height="50px" width="50px" />
                    <h2 className="heading">Instaclone</h2>
                    <Link to='/post'>
                        <img className="camera" src={camera} alt="camera" height="38px" width="38px" />
                    </Link>
                </div>
            </section>
            <section>
                {props.val === true ? window.location.reload(true) : ""}
                {
                    data?.result.map((postd, index) => (
                        <div id="card-content" key={index}>
                            <div id="head-part">
                                <b>{postd.name}</b>
                                <div className="sub-content">
                                    {postd.address}
                                    <i className="fa-solid fa-ellipsis fa-lg"></i>
                                </div>
                            </div>

                            <div id="image-content">
                                <img className="imgTag" src={`http://localhost:8080/images/${postd.file}`} key={index} alt="PostImage" />
                            </div>
                            <div id="likes-content">
                                <i className="fa-regular fa-heart fa-lg"></i>
                                <i className="fa-regular fa-paper-plane fa-lg"></i>
                                <span className="dateField">{postd.date}</span>
                            </div>
                            <span className="likes">{postd.likes} likes</span>
                            <div className="desc">
                                <b>{postd.desc}</b>
                            </div>
                        </div>
                    ))}
            </section>

        </section>
    )
}