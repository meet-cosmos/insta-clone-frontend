import { AddPost } from "./AddPost"

import { ShowPosts } from "./ShowPost"
import Landing_page from "./LandingPage"
import {BrowserRouter, Route, Routes} from "react-router-dom"

const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/post" element={<AddPost/>}></Route>
                <Route path="/show" element={<ShowPosts/>}></Route>
                <Route path="/" element={<Landing_page/>}></Route>
                <Route path="*" element={<h1>Page does not exist</h1>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App