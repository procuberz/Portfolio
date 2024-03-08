import React from 'react'
import PortfolioStyle from "./Pages.module.scss";

const Portfolio = () => {
  return (
    <div>
      <article className={PortfolioStyle["article"]}>

        <h2 className={PortfolioStyle["title-2"]}>
          Мои работы
        </h2>

        <section className={PortfolioStyle["article-item"]}>
          <h3 className={PortfolioStyle["title-3"]}>
            Portfolio Mini
          </h3>

          <div className={PortfolioStyle["article-item-image"]}>
            <img src="" alt="Portfolio Image" />
          </div>

          <p className={PortfolioStyle["article-item-text"]}>
            Portfolio desc
          </p>

          <a
            href="https://procuberz.github.io/portfolio"
            target='_blank'
            className={PortfolioStyle["article-item-link"]}
          >
            Смотреть работу
          </a>
        </section>

      </article>
    </div>
  )
}

export default Portfolio