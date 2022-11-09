import { Coord } from "../types";

export const getUserLocation = async(): Promise<Coord> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                resolve({lat: coords.latitude, lon: coords.longitude})
            },
            (err) => {
                alert('No se pudo obtener la geolocalización');
                console.log(err);
                reject();
            }
        )
    })
}
