import React from "react";
import "./styles.css";

//
//
// this.props = {
//     title: "Exemplo"
//     provider: "NASA"
// }

// export function Article(props)
export function Article({ title, provider, description, thumbnail }) {
  // desestruturar
  return (
    <article id="article">
      <div className="image">
        <img src={thumbnail} alt="" />
      </div>
      <div className="article-infos">
        <h2>{title}</h2>
        <h3>{provider}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
