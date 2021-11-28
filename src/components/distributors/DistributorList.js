import React, { useEffect, useState } from "react"
import { getAllDistributors } from "./distributorData"
import { DistributorFlowers } from "./DistributorFlowers"
import "./DistributorList.css"

export const DistributorList = () => {
    const [distributors, setDistributors] = useState([])

    //fetch distributors (with retailers and nurserytoDistrubutorChannel embedded)
    useEffect(
        () => {
            getAllDistributors()
                .then(setDistributors)
        },
        []
    )


    return (
        <div className="distributors">
            {
                distributors.map(
                    (distributor) => {
                        return <div key={`distributor--${distributor.id}`} className="distributor">
                            <h2>{distributor.businessName}</h2>
                            <div>
                                <h4>Flowers in Stock</h4>
                                {distributor.nurseryToDistributorChannel.map(nurseryToDistributorChannel => {
                                    return <DistributorFlowers key={nurseryToDistributorChannel.id} nurseryId={nurseryToDistributorChannel.nurseryId} markup={distributor.markupPercentage} />
                                }
                                )}
                            </div>
                            <div className="retailers">
                                <h4>Retailers</h4>
                                {distributor.retailers.map(retailer => {
                                    return <div key={`retailer--${retailer.id}`} className="retailer">
                                        {retailer.businessName}
                                    </div>
                                }
                                )}
                            </div>
                        </div>
                    }
                )
            }
        </div>
    )
}