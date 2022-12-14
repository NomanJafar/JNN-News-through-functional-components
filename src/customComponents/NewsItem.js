import React from "react";
import './NewsItem.css';

const NewsItem =(props)=> {

    let { title, description,imageUrl,newsUrl,author,publishedDate} = props;
    return (
      <div className="card" style={{ width: "13rem" }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p>published by:{author} at {new Date(publishedDate).toGMTString()}</p>
          <a href={newsUrl} className="btn btn-primary" style={{backgroundColor:"black"}}>
            Details
          </a>
        </div>
      </div>
    );

}
export default NewsItem
