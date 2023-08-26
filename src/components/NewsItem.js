
import React from "react";

const NewsItem = (props) => {
 
    let { tittle, description, imgurl, newsurl} = props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imgurl? "https://www.shutterstock.com/image-vector/breaking-news-background-world-global-600w-719766118.jpg" : imgurl} className="card-img-top" alt="no img" />
          <div className="card-body">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
