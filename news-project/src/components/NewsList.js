import React from 'react';
import axios from 'axios';
import NewsItem from './NewsItem.js';
import getDailyNews from '../api.js';

function NewsList() {

    let [articles, setArticles] = React.useState([]);

    React.useEffect(() => {

        const getArticles = async () => {
            let res = await axios.get('https://newsapi.org/v2/top-headlines?country=bg&apiKey=9cf6b520a3fe4addaa414169eb6ae1f9');
            setArticles(res.data.articles);
        }

        getArticles();
        //console.log(getDailyNews().data.articles);

        // setArticles(newArticles);

    }, []);

    return (<div>
        {articles.map(x => <NewsItem item={x.title} />)}
    </div>);


}

export default NewsList;