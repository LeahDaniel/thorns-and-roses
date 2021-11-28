export const getAllRetailers = () => {
    return fetch("http://localhost:8088/retailers?&_expand=distributor")
        .then(res => res.json())
}
export const getNurseryToDistributorsByDistributorId = (distributorId) => {
    return fetch(`http://localhost:8088/nurseryToDistributorChannel?_expand=nursery&distributorId=${distributorId}`)
        .then(res => res.json())
}

export const getNurseryFlowersByNurseryId= (nurseryId) => {
    return fetch(`http://localhost:8088/nurseryFlowers?nurseryId=${nurseryId}&_expand=flower`)
        .then(res => res.json())
}