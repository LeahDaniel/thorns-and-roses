import React, { useEffect, useState } from "react"
import { getAllNurseries, getAllFlowers, getAllDistributors } from "./nurseryData"
import "./NurseryList.css"

export const NurseryList = () => {
    const [nurseries, setNurseries] = useState([])
    const [flowers, setFlowers] = useState([])
    const [distributors, setDistributors] = useState([])

    //fetch nurseries (with nurseryFlowers and nurseryToDistributorChannel embedded), flowers, and distributors, and store in transient state
    useEffect(
        () => {
            getAllFlowers()
                .then(setFlowers)
                .then(getAllDistributors)
                .then(setDistributors)
                .then(getAllNurseries)
                .then(setNurseries)
        },
        []
    )


    return (
        <>
            <div className="nurseries">
                {
                    nurseries.map(
                        (nursery) => {
                            return <div key={`nursery--${nursery.id}`} className="nursery">
                                <h2>{nursery.businessName}</h2>
                                <div className="flowers">
                                    <h4>Flowers Grown</h4>
                                    {nursery.nurseryFlowers.map(nurseryFlower => {
                                        const foundFlower = flowers.find(flower => flower.id === nurseryFlower.flowerId)
                                        return <div key={`flower--${nurseryFlower.flowerId}`} className="flower">
                                            <p>Species: {foundFlower?.species}</p>
                                            <p>Color: {foundFlower?.color}</p>
                                            <p>Price: {nurseryFlower.flowerPrice}</p>
                                        </div>
                                    }
                                    )}
                                </div>
                                <div className="distributors">
                                    <h4>Distributors</h4>
                                    {nursery.nurseryToDistributorChannel.map(nurseryToDistributorChannel => {
                                        const foundDistributor = distributors.find(distributor => distributor.id === nurseryToDistributorChannel.distributorId)
                                        return <div key={`nurseryToDistributorChannel--${nurseryToDistributorChannel.id}`} className="distributor">
                                            {foundDistributor?.businessName}
                                        </div>
                                    }
                                    )}
                                </div>
                            </div>
                        }
                    )
                }
            </div>
        </>
    )
}