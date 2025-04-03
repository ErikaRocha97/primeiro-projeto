import React from "react";
import "./styles.css";

//
//
// this.props = {
//     title: "Exemplo"
//     provider: "NASA"
// }

// export function Article(props)
export function Article({ url, title, provider, description, thumbnail }) {
  // desestruturar
  return (
    <article id="article">
      <div className="image">
        <img src={thumbnail} alt="" />
      </div>
      <div className="article-infos">
        <a href={url}>
          <h2>{title}</h2>
        </a>

        <h3>{provider}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
