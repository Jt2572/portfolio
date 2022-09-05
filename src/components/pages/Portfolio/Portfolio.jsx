import React from "react";
import image1 from "../../../images/portfolio/project-01.png";
import image2 from "../../../images/portfolio/project-02.png";
import image3 from "../../../images/portfolio/project-03.jpg";
import image4 from "../../../images/portfolio/project-04.jpg";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "eKnows eCommerce ",
    link: "https://pf-front-kappa.vercel.app/",
    description:
      "Ecommerce carried out with an excellent work team as a Final Project at Bootcamp Henry. It offers to the user the possibility of buying books online or accessing ebooks to read online, as long as they are registered, it also allows searching through different types of filters, as well as adding to Favorites, and making Reviews, among other features. Technologies such as React, Redux Toolkit, Node Express, Postgres, Sequelize, and Tailwind, as well as resources such as Figma, Trello, Illustrator, and Stripe, among others, were used to carry out this project.",
  },
  {
    id: 2,
    image: image2,
    title: "Food App",
    link: "#0",
    description:
      "PI",
  }, 
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
