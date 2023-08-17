import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = "adfeb2dd9e2b42f6a54fec0c60bcc136";
    const newsEndpoint = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

    fetch(newsEndpoint)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
      })
      .catch(error => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Latest TechCrunch News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-auto rounded-md mb-4"
            />
            <p className="text-gray-600 mb-4">{article.description}</p>
            <p className="text-gray-400">Source: {article.source.name}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => (
  <div>
    <h1>About Page</h1>
    <p>This is the about page content.</p>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact Page</h1>
    <p>This is the contact page content.</p>
  </div>
);

function App() {
  return (
    <Router>
      <nav className="bg-blue-500 p-4">
  
      </nav>

      <div>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </div>
    </Router>
  );
}

export default App;