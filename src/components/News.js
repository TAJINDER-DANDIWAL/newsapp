import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem.js";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let url =
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=b2300eefc4f545c398f08780daa9cffc";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      setArticles(parsedData.articles);
      setLoading(false);
    };

    fetchData();
  }, []);

  const fireNext = () => {
    console.log("next");
  };

  const firePrev = () => {
    console.log("prev");
  };

  return (
    <div className="container my-3">
      <h1 id="aeiou" className="text-center" >TAJINDER - Top Headlines</h1>
      <div className="row">
        {articles.map((element) => (
          <div className="col-md-4" key={element.url}>
            <NewsItem
              newsurl={element.url}
              title={element.title}
              description={element.description}
              imgurl={element.urlToImage}
            />
          </div>
        ))}
      </div>
      <div className="container my-3 mx-3 d-flex justify-content-between">
        <button
          disabled={articles.page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={firePrev}
        >
          &larr; Previous
        </button>
        <button type="button" className="btn btn-dark" onClick={fireNext}>
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
