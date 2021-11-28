import React, { useEffect, useState } from "react"
import { getNurseryFlowersByNurseryId } from "./retailerData"
import "./RetailerFlowers.css"

export const RetailerFlowers = ({ nurseryId, distributorMarkup, retailerMarkup }) => {
    const [nurseryFlowers, setNurseryFlowers] = useState([])

    //fetch relevant nurseryFlowers (with flower expanded)
    useEffect(
        () => {
            getNurseryFlowersByNurseryId(nurseryId)
                .then(setNurseryFlowers)
        },
        [nurseryId]
    )


    return (
        <>
        {
            nurseryFlowers.map(
                (nurseryFlower) => {
                    const totalPrice = nurseryFlower.flowerPrice * distributorMarkup * retailerMarkup
                    return <div key={`flower--${nurseryFlower.id}`} className="flower">
                        <p>Species: {nurseryFlower.flower.species}</p>
                        <p>Color: {nurseryFlower.flower.color}</p>
                        <p>Price: {totalPrice}</p>
                    </div>
                }
            )
        }
        </>
    )
}