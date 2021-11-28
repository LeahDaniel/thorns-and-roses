import React, { useEffect, useState } from "react"
import { getNurseryFlowersByNurseryId } from "./distributorData"
import "./DistributorFlowers.css"

export const DistributorFlowers = ({ nurseryId, markup }) => {
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
        <div className="flowers">
            {
                nurseryFlowers.map(
                    (nurseryFlower) => {
                        const totalPrice = nurseryFlower.flowerPrice * markup
                        return <div key={`flower--${nurseryFlower.flowerId}`} className="flower">
                            <p>Species: {nurseryFlower.flower.species}</p>
                            <p>Color: {nurseryFlower.flower.color}</p>
                            <p>Price: {totalPrice}</p>
                        </div>
                    }
                )
            }
        </div>
    )
}