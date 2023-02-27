// import { AddPost } from "./AddPost"
// import { ViewPost } from "./ViewPost"
// import { ShowPosts } from "./ShowPost/"
// import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Link } from 'react-router-dom'
import img from './images/lens.png'
import './css/landingpage.css'

export const Landing_page = ()=>{
    return(
        <div id='landing_wrap'>
            <div id='landing_img'>
                <img src={img} alt="image" id='landingImg'/>
            </div>
            <div id='landing_div'>
                <h1 id='landing_text'>10x Team 04</h1>
                <Link to="/show"><button id='landing_btn'><span id='landing_btn_text'>Enter</span></button></Link>
            </div>
        </div>
    )
}
export default Landing_page;