import { useEffect } from "react";
import ReactDOM from 'react-dom';

//98e79255

const API_URL = 'http://www.omdbapi.com?apikey=98e79255';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}$s=${title}`);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        searchMovies('superman');
    }, []);



    return (<h1>App</h1>);
}


export default App;