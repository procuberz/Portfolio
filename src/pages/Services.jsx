import React from 'react'
import ServiceStyle from "./Pages.module.scss";

const Services = () => {
  return (
    <div>
      <section className={ServiceStyle["services"]}>
        <h2 className={ServiceStyle["title-2"]}>
          Мои услуги по верстке сайтов
        </h2>

        <ul className={ServiceStyle["services-list"]}>
          <li>
            Верстка по макетам из Photoshop или Figma
          </li>

          <li>
            Мобильная, адаптивная верстка под смартфоны и планшеты
          </li>

          <li>
            SEO оптимизированная верстка для продвижения в поисковых системах
          </li>

          <li>
            Различные JavaScript и jQuery скрипты для интерактива на сайте.
          </li>

          <li>
            Retina оптимизированная верстка, так что ваш сайт будет не стыдно открыть на технике Apple или 4K дисплее.
          </li>
        </ul>

        <p className={ServiceStyle["services-text"]}>
          Верстаю сайты переводя макеты из Figma или Photoshop в чистый, валидный и семантический HTML код. Это значит что он будет работать без ошибок, хорошо индексироваться поисковыми роботами и поможет вашему сайту занять хорошие позиции в поиске.
        </p>

        <h3 className={ServiceStyle["title-3"]}>
          Мои навыки в верстке сайтов:
        </h3>

        <ul className={ServiceStyle["services-list"]}>
          <li>
            HTML5, CSS3, Flexbox, SCSS, JS, jQuery, Gulp
          </li>

          <li>
            Аккуратный, логичный, продуманный код
          </li>

          <li>
            Соблюдение стандартов W3C и правил BEM naming
          </li>

          <li>
            SEO-верстка — помогает продвижению сайта в Яндекс и Google
          </li>

          <li>
            Адаптация / внедрение плагинов.
          </li>

          <li>
            Использование спрайтов — позволяет ускорить загрузку страницы

          </li>

          <li>
            Pixel perfect — идеальное совпадение с дизайн макетом

          </li>

          <li>
            Retina Ready — на retina и 4К экранах графика будет смотреться четко и не размыто
          </li>
        </ul>

        <p className={ServiceStyle["services-text"]}>
          Оптимизирую скорость загрузки страницы - благодаря обработке графики. Сайт будет быстро загружаться - это порадует ваших пользователей и поможет вам получить более высокие позиции в поиске.
        </p>

        <p className={ServiceStyle["services-text"]}>
          Моя верстка легко интегрируется в любую систему управления контентом: WordPress, Bitrix, ModX, Joomla, OpenCart, ShopScript и другие.
        </p>
      </section>
    </div>
  )
}

export default Services