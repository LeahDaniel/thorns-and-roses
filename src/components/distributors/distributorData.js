export const getAllDistributors = () => {
    return fetch("http://localhost:8088/distributors?_embed=retailers&_embed=nurseryToDistributorChannel")
        .then(res => res.json())
}
export const getNurseryFlowersByNurseryId= (nurseryId) => {
    return fetch(`http://localhost:8088/nurseryFlowers?nurseryId=${nurseryId}&_expand=flower`)
        .then(res => res.json())
}
