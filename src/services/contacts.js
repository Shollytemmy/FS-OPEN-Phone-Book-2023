import axios from "axios";



const baseUrl = "http://127.0.0.1:5174/persons"


const getAllPersons = () => {
    const request = axios.get(baseUrl)
   return  request.then((response) => response.data)

}

const createPersons = (personObj) => {
    const request = axios.post(baseUrl, personObj)
    return request.then((response) => response.data)

}

const removePersons = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then((response) => response.data)
}

const updatePersons = (id, personObj) =>{
    const request = axios.put(`${baseUrl}/${id}`, personObj)
    return request.then((response) => response.data)

}



export default {
    getAllPersons,
    createPersons,
    removePersons,
    updatePersons
}