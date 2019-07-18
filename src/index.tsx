import * as React from "react";
import { render } from "react-dom";
import Slider from "react-slick";
import Toolbar from "./components/toolbar";
import Hero from "./components/hero";
import Article from "./components/article";
import Footer from "./components/footer";

import "./styles.scss";

const placeholder = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Apollo_11_Launch_-_GPN-2000-000630.jpg',
  title: "Apollo 11 Launch",
  subtitle: "Featured Article"
};

const placeholder2 = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Tropical_kingbird_%28Tyrannus_melancholicus%29.JPG',
  title: "Tropical Kingbird Tyrannus Melancholicus",
  subtitle: "Picture of the day"
};

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="App">
      <Toolbar></Toolbar>
      <div className="content">
        <h1>Featured Today</h1>
        <div className="articles">
          <Slider {...settings}>
            <div>            
              <Hero
              className="featuredArticle" 
              src={placeholder.src}
              title={placeholder.title}
              subtitle={placeholder.subtitle}>
              </Hero>
            </div>

            <div>
              <Hero
                className="featuredPicture" 
                src={placeholder2.src}
                title={placeholder2.title}
                subtitle={placeholder2.subtitle}>
              </Hero>
            </div>
          </Slider>

        </div>

        <hr></hr>

        <h1>In the news</h1>
        <div className="newsArticles">
          <Article
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/5/5e/June9protestTreefong01.jpg"
          title="2019 Hong Kong anti-extradition bill protests"
          extract="The 2019 Hong Kong anti-extradition bill protests are a series of ongoing demonstrations in Hong Kong."
          >
          </Article>

          <Article
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/5/57/%28Ursula_von_der_Leyen%29_2019.07.16._Ursula_von_der_Leyen_presents_her_vision_to_MEPs_2_%28cropped%29.jpg"
          title="Ursula von der Leyen"
          extract="Ursula von der Leyen has been elected as president of the European Commission."
          >
          </Article>

          <Article
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/7/77/Lords-Cricket-Ground-Pavilion-06-08-2017.jpg"
          title="Cricket World Cup final"
          extract="England has defeated New Zealand to claim the 2019 ICC World Cup at Lords."
          >
          </Article>

          <Article
          imageSrc="https://upload.wikimedia.org/wikipedia/commons/2/2b/Spektr-RG_russian_X-ray_space_telescope_P1110968.jpg"
          title="Spektr-RG Launch"
          extract="Spektr-RG, a Russian-German high-energy space telescope, is launched from the Baikonur Cosmodrome, Kazakhstan."
          >
          </Article>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
