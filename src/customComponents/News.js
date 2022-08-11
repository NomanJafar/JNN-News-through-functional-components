import React,{useEffect,useState} from "react";
import Loadinglogic from "./Loadinglogic";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




const News = (props)=> {
  
const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(true);
const [pageno, setPageno] = useState(1);
const [fetchedResults, setFetchedResults] = useState(12);






  
  
  const updateData= async ()=>{
    props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${pageno}&pageSize=${props.articlesPerPage}`;
    setLoading(true);

    setPageno(pageno+1)
    
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();

    console.log(parseData);

    props.setProgress(70);

    console.log(parseData.totalResults);

    setArticles(articles.concat(parseData.articles));
    setLoading(false);
    setFetchedResults(fetchedResults+props.articlesPerPage);

    
    
    document.title="JNN - " + props.category;
    props.setProgress(100);

    console.log("fetched results are"+fetchedResults);
  }
  
useEffect(() => {
 updateData();
}, []);









// previous and next click handlers
  // handlerPrevBtn =  () => {
  //   console.log("prev");
  //   this.setState({pageno: this.state.pageno - 1});
  //   this.updateData();
  // };
  // handlerNextBtn =  () => {
  //   console.log("next");
  //   this.setState({pageno: this.state.pageno + 1});
  //   this.updateData();
  // };



 const fetchMoreData = () => {
  console.log(pageno)

    console.log(pageno)
    updateData();
  };





    return (
      <div>

        {console.log("render")}

        <div className="container text-center " style={{marginTop:"60px"}}>
          <h1>News Headlines</h1>
          
        </div>
  {/* /infinite scroll */}
  <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<Loadinglogic/>}
        >

        <div className="container my-3">
          <div className="row">
          
          
        
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url + Math.random()}>
                  <NewsItem
                    title={element.title.slice(0, 50) + "..."}
                    description={
                      element.description &&
                      element.description.slice(0, 80) + "..."
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://scx2.b-cdn.net/gfx/news/2022/apple-was-accused-by-c.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      publishedDate={element.publishedAt}
                      />
                  {loading && <Loadinglogic/>}
                </div>
              );
            })}
            
          </div>
        </div>
        </InfiniteScroll>
        




        {/* // previous and next buttons */}
        {/* <div className="d-flex justify-content-between mx-5 my-3">
          <button
            disabled={this.state.pageno <= 1}
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.handlerPrevBtn}
            style={{ backgroundColor: "black" }}
          >
            &#8592;Prev
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.handlerNextBtn}
            style={{ backgroundColor: "black" }}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }




News.defaultProps ={
  country:"us",
  articlesPerPage:12,
  category:"general"
}
News.propTypes ={
  country: PropTypes.string,
  articlesPerPage: PropTypes.number,
  category:PropTypes.string
}
export default News