import React from "react";
import { Article } from "./components/Article/Article";
import { Navbar } from "./components/Navbar/Navbar";

import "./styles/App.css";
import article1Img from "./assets/images/article1.jpg";
// import article3Img from "./assets/images/article3.jpg";
// import { Counter } from "./components/Counter/Counter";

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do componente
  render() {
    return (
      // Não pode retornar mais de 1 tag
      <>
        <Navbar />

        {/* <Counter /> */}

        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab commodi minus amet neque minima officiis reiciendis earum, unde nisi inventore repellendus eaque nesciunt, voluptas repellat odio cupiditate quam ipsam! Facere!"
            thumbnail={article1Img}
          />
        </section>

        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab commodi minus amet neque minima officiis reiciendis earum, unde nisi inventore repellendus eaque nesciunt, voluptas repellat odio cupiditate quam ipsam! Facere!"
            thumbnail={article1Img}
          />
        </section>
      </>
    );
  }
}

export default App;

// Class component: baseado em classe (padrão antigo);
// Converter função para classe:
// function App() { } -> class App extends React.Component { }
// return() -> Render() {return ( )}
// ctrl + espaço -> importar React (biblioteca instalada no package.json)

// Function component: baseado em função (padrão atual).

// ! Conceitos de propriedades (props) e estados

// ? Props: passar informações para os componentes.
//  < Article title="Exemplo" />

// ? Estados:
