import React, { useEffect, useState } from "react"
import { getNurseryToDistributorsByDistributorId } from "./retailerData"
import { RetailerFlowers } from "./RetailerFlowers"
import "./Retailer.css"

export const Retailer = ({ retailer }) => {
    const [nurseriesForCurrentRetailer, setNurseries] = useState([])
    const [nurseryToDistributorChannels, setNurseryToDistributorChannels] = useState([])

    //fetch relevant nurserytoDistributors (with nursery expanded)
    useEffect(
        () => {
            getNurseryToDistributorsByDistributorId(retailer.distributorId)
                .then(setNurseryToDistributorChannels)
        },
        [retailer]
    )

    useEffect(
        () => {
            let newArray = []
            nurseryToDistributorChannels.forEach(nurseryToDistributorChannel => newArray.push(nurseryToDistributorChannel.nursery))
            setNurseries(newArray)
        },
        [nurseryToDistributorChannels]
    )

    return (
        <div key={`retailer--${retailer.id}`} className="retailer" >
            <h2>{retailer.businessName}</h2>
            <div>{retailer.address}</div>
            <div className="flowers">
                <h4>Flowers in Stock</h4>
                {nurseriesForCurrentRetailer.map(nursery =>
                    <RetailerFlowers nurseryId={nursery.id} distributorMarkup={retailer.distributor.markupPercentage} retailerMarkup={retailer.markupPercentage} />
                )}

            </div>
            <div className="distributors">
                <h4>Distributor</h4>
                <p className="distributor">{retailer.distributor.businessName}</p>
            </div>
            <div className="nurseries">
                <h4>Nurseries</h4>
                {
                    nurseriesForCurrentRetailer.map(
                        (nursery) => {
                            return <div className="nursery" key={nursery.id}>
                                {nursery.businessName}
                            </div>
                        }
                    )
                }
            </div>
        </div >
    )
}