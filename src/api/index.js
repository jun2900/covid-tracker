import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let changeableUrl = url
    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths } } = await axios.get(changeableUrl)
        return { confirmed, recovered, deaths }
    } catch (error) {
        console.log(error);

    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        return countries.map(country => country.name)
    } catch (error) {
        console.log(error);

    }
}

export const fetchFirstCountry = () => {
    try {
        //fetch then 
        return fetch(`${url}/countries`).then(res => res.json()).then(data => data.countries[0].name)
    } catch (error) {
        console.log(error)
    }
}