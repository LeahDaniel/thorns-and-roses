import React, { useEffect, useState } from "react"
import { Retailer } from "./Retailer"
import { getAllRetailers } from "./retailerData"
import "./RetailerList.css"

export const RetailerList = () => {
    const [retailers, setRetailers] = useState([])
    

    //fetch retailers (with distributors expanded)
    useEffect(
        () => {
            getAllRetailers()
                .then(setRetailers)
        },
        []
    )


    return (
        <>
            <div className="retailers">
                {
                    retailers.map(
                        (retailer) => {
                            return <Retailer retailer={retailer}/>
                        }
                    )
                }
            </div>
        </>
    )
}