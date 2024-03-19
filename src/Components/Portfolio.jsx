/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/lap.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "BlackJack game 🎉",
    description:
      "This is a model of a blackjack game. The Twenty-one Card game is a game whose objective is to be dealt cards with a higher count than those of the dealer, up to but not exceeding 21. The dealer selects different cards, starting with two cards first and then one card until the deal is complete.",
    url: "https://github.com/Ronnie5562/BlackJack-game",
  },
  {
    title: "QR Code Generator",
    description:
      "A QR Code Generator is a web application that allows users to generate QR codes. QR codes are two-dimensional barcodes that can be scanned using a smartphone or QR code reader to quickly access information or websites. This project provides a simple and easy-to-use interface for generating QR codes with custom data.",
    url: "https://github.com/Ronnie5562/QR-code-generator",
  },
  {
    title: "Netflix Clone with JavaScript",
    description:
      "This is a Netflix clone built with JavaScript. It replicates the user interface and functionality of the Netflix website, allowing users to browse and watch movies and TV shows. The project demonstrates the use of HTML, CSS, and JavaScript to create a responsive and interactive web application.",
    url: "https://github.com/Ronnie5562/Netflix-clone-with-js",
  },
  {
    title: "Superhero Search App",
    description:
      "This web app allows users to search for their favorite superhero and view pretty cool stuffs about them.",
    url: "https://github.com/Ronnie5562/Superhero-App",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
