import axios from "axios";

const URL ="https://api-colombia.com/api/v1";




export const getRegionesColombiaIDInfo = (id) =>{
    let response ="";
    axios.get(`${URL}/country/Region/${id}`).then(res =>{
        response = res.data;
    });
    return response;
}