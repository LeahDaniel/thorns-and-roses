export const getAllNurseries = () => {
    return fetch("http://localhost:8088/nurseries?_embed=nurseryFlowers&_embed=nurseryToDistributorChannel")
        .then(res => res.json())
}
export const getAllFlowers = () => {
    return fetch("http://localhost:8088/flowers")
        .then(res => res.json())
}
export const getAllDistributors = () => {
    return fetch("http://localhost:8088/distributors")
        .then(res => res.json())
}
