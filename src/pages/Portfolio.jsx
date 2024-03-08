import React from 'react'
import PortfolioStyle from "./Pages.module.scss";
import Project from "./../images/photo_2024-03-08_19-47-07.jpg"

const Portfolio = () => {
  return (
    <div>
      <article className={PortfolioStyle["article"]}>

        <h2 className={PortfolioStyle["title-2"]}>
        My Projects
        </h2>

        <section className={PortfolioStyle["article-item"]}>
          <h3 className={PortfolioStyle["title-3"]}>
                   Forest Travel
          </h3>

          <div className={PortfolioStyle["article-item-images"]}>
            <img src={Project} alt="Portfolio Image" />
          </div>

          <p className={PortfolioStyle["article-item-text"]}>
            Forest Travel designed to provide travel services.
            It adapted only for PC and Desktops.
          </p>

          <a
            href="https://procuberz.github.io/Forest/"
            target='_blank'
            className={PortfolioStyle["article-item-link"]}
          >
          See project
          </a>
        </section>

      </article>
    </div>
  )
}

export default Portfolio