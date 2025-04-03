import { useEffect, useState } from "react";
import { Article } from "./components/Article/Article";
import { Navbar } from "./components/Navbar/Navbar";
import { TailSpin } from "react-loader-spinner";
import "./styles/App.css";
import axios from "axios";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/"
      );

      const newsData = response.data.results;

      setNews(newsData);
    }

    loadNews();
  }, []);

  return (
    <>
      <Navbar />

      <section id="articles">
        {news.length === 0 ? (
          <div
            style={{
              height: "400px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TailSpin
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          news.map((article) => {
            return (
              <Article
                key={article.id}
                url={article.url}
                title={article.title}
                provider={article.news_site}
                description={article.summary}
                thumbnail={article.image_url}
              />
            );
          })
        )}
      </section>
    </>
  );
}

export default App;
