
import './App.css';
import React, { useState } from 'react'
import NavBar from './customComponents/NavBar';
import News  from './customComponents/News';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
const apiKey="a99d51173fa7417ca1e8f81a81629cca";
// apiKey=process.env.REACT_API_NEWS_API;

  // toggleCountry();
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState("us")




const toggleCountry=(country)=>{
console.log(country);
  setCountry(country);
}


    
    return (
      <div>





<BrowserRouter>
<LoadingBar color='#f11946' progress={progress}  height={3} />
<NavBar title="JNN" country={toggleCountry} countryToshow={country}/>

        <Routes>
          <Route    path="/home" element={<News apiKey={apiKey} key="general" articlesPerPage={12} setProgress={setProgress}  country={country} category="general"/>} />
          <Route  exact  path="/" element={<News apiKey={apiKey} key="general" articlesPerPage={12} setProgress={setProgress} country={country} category="general"/>} />
          <Route  exact  path="/business" element={<News apiKey={apiKey} key="business" articlesPerPage={12}setProgress={setProgress}  country={country} category="business"/>} />
          <Route  exact  path="/entertainment" element={<News apiKey={apiKey} key="entertainment" setProgress={setProgress}  articlesPerPage={12} country={country} category="entertainment"/>} />
          <Route  exact  path="/health" element={<News apiKey={apiKey} key="health" articlesPerPage ={12} setProgress={setProgress}  country={country} category="health"/>} />
          <Route  exact  path="/science" element={<News apiKey={apiKey} key="science" articlesPerPage={12} setProgress={setProgress}  country={country} category="science"/>} />
          <Route  exact  path="/sports" element={<News apiKey={apiKey} key="sports" articlesPerPage={12} setProgress={setProgress}  country={country} category="sports"/>} />
          <Route  exact  path="/technology" element={<News apiKey={apiKey} key="technology" articlesPerPage={12} setProgress={setProgress}   country={country} category="technology"/>} />
          
          <Route  exact  path="/at" element={<News apiKey={apiKey} key="at" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/au" element={<News apiKey={apiKey} key="au" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/be" element={<News apiKey={apiKey} key="be" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/bg" element={<News apiKey={apiKey} key="bg" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/br" element={<News apiKey={apiKey} key="br" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/ca" element={<News apiKey={apiKey} key="ca" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/ch" element={<News apiKey={apiKey} key="ch" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/cn" element={<News apiKey={apiKey} key="cn" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/co" element={<News apiKey={apiKey} key="co" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/cu" element={<News apiKey={apiKey} key="cu" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/cz" element={<News apiKey={apiKey} key="cz" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/de" element={<News apiKey={apiKey} key="de" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/eg" element={<News apiKey={apiKey} key="eg" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/fr" element={<News apiKey={apiKey} key="fr" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/gb" element={<News apiKey={apiKey} key="gb" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/gr" element={<News apiKey={apiKey} key="gr" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/hk" element={<News apiKey={apiKey} key="hk" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/hu" element={<News apiKey={apiKey} key="hu" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/id" element={<News apiKey={apiKey} key="id" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/ie" element={<News apiKey={apiKey} key="ie" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/il" element={<News apiKey={apiKey} key="il" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/in" element={<News apiKey={apiKey} key="in" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/it" element={<News apiKey={apiKey} key="it" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/jp" element={<News apiKey={apiKey} key="jp" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/kr" element={<News apiKey={apiKey} key="kr" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/lv" element={<News apiKey={apiKey} key="lv" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/ma" element={<News apiKey={apiKey} key="ma" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/mx" element={<News apiKey={apiKey} key="mx" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/my" element={<News apiKey={apiKey} key="my" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/ng" element={<News apiKey={apiKey} key="ng" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/nl" element={<News apiKey={apiKey} key="nl" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/no" element={<News apiKey={apiKey} key="no" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/nz" element={<News apiKey={apiKey} key="nz" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/ph" element={<News apiKey={apiKey} key="ph" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/pl" element={<News apiKey={apiKey} key="pl" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/pt" element={<News apiKey={apiKey} key="pt" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/ro" element={<News apiKey={apiKey} key="ro" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/rs" element={<News apiKey={apiKey} key="rs" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/ru" element={<News apiKey={apiKey} key="ru" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/sa" element={<News apiKey={apiKey} key="sa" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/se" element={<News apiKey={apiKey} key="se" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/si" element={<News apiKey={apiKey} key="si" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/sk" element={<News apiKey={apiKey} key="sk" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/th" element={<News apiKey={apiKey} key="th" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/tr" element={<News apiKey={apiKey} key="tr" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/tw" element={<News apiKey={apiKey} key="tw" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/ua" element={<News apiKey={apiKey} key="ua" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/us" element={<News apiKey={apiKey} key="us" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/ve" element={<News apiKey={apiKey} key="ve" articlesPerPage={12} setProgress={setProgress} country={country} />} />
          <Route  exact  path="/za" element={<News apiKey={apiKey} key="za" articlesPerPage={12} setProgress={setProgress} country={country} />} />


        </Routes>
    

</BrowserRouter>
       
        
      </div>
    )
  }
export default App;

