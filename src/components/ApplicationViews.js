import React from "react"
import { Route } from "react-router-dom"
import { DistributorList } from "./distributors/DistributorList"
import { NurseryList } from "./nurseries/NurseryList"
import { RetailerList } from "./retailers/RetailerList"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/nurseries">
                <NurseryList/>
            </Route>
            <Route path="/distributors">
                <DistributorList/>
            </Route>
            <Route path="/retailers">
                <RetailerList/>
            </Route>
        </>
    )
}
