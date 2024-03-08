import { Fragment } from "react";
import AppStyle from "./App.module.scss";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Contacts from "./pages/Contacts"

const App = () => {
  return (
    <Fragment>
      <header className={AppStyle["header"]}>
        <h1 className={AppStyle["title-1"]} >
          Nurmuhammad - фрилансер, веб-разработчик
        </h1>

        <p className={AppStyle["subtitle"]}>
          Всем привет я профессиональный фрилансер верстальщик.
          Люблю создание сайтов и веб-разработку.
        </p>

        <nav className={AppStyle["header-menu"]}>
          <Link to={"/Portfolio"}>Главная</Link>
          <Link to={"/Portfolio/Services"}>Услуги</Link>
          <Link to={"/Portfolio/Portfolio"}>Портфолио</Link>
          <Link to={"/Portfolio/Contacts"}>Контакты</Link>
        </nav>
      </header>

      <main className={AppStyle["main"]}>

        <Routes>
          <Route path="/Portfolio" index element={<Home />} />

          <Route path="/Portfolio/Services" element={<Services />} />

          <Route path="/Portfolio/Portfolio" element={<Portfolio />} />

          <Route path="/Portfolio/Contacts" element={<Contacts />} />
        </Routes>

      </main>

      <footer className={AppStyle["footer"]}>
        &copy; 2024 Nurmuhammad
      </footer>

    </Fragment>
  )
}

export default App;