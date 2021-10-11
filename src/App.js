import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

const App = () => {

  const [quote,setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const quoteAPI = async() => {
    try {
      const data = await axios.get("https://api.quotable.io/random");
      // console.log(data.data);
      setQuote(data.data.content);
      setAuthor(data.data.author)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    quoteAPI();
  },[]);

  return (
    <Fragment>
    <section className="quote">
      <div className="container main-c">
        <div className="quote-area">
          <h2>{quote}</h2>
          <h3 className="text-end mt-4">~{author}</h3>
          <div className="text-center">
            <button className="btn btn-outline-success rounded-pill text-center btn-style mt-5 " onClick={quoteAPI}>New Quote</button>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  )
}

export default App
