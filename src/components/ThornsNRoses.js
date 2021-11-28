import "./ThornsNRoses.css"
import React from "react"
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";

export const ThornsNRoses = () => {
    return (
        <>
            <h1>Thorns & Roses</h1>
            <NavBar />
            <ApplicationViews />
        </>
    )
}
