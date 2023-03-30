import axios from "axios";


export default async function getDailyNews() {

    const responce = await axios.get('https://newsapi.org/v2/everything?q=bulgaria&apiKey=9cf6b520a3fe4addaa414169eb6ae1f9');
    return responce;
}