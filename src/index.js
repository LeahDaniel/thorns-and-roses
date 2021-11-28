import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ThornsNRoses } from "./components/ThornsNRoses.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThornsNRoses />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)