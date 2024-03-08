import { Fragment } from 'react';
import AppStyle from './App.module.scss';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';

const App = () => {
  return (
    <Fragment>
      <header className={AppStyle['header']}>
        <h1 className={AppStyle['title-1']}>
          Nurmuhammad - freelancer, web-developer
        </h1>

        <p className={AppStyle['subtitle']}>
          Hello everyone, I am a professional freelance layout designer. love
          creation websites and web development.
        </p>

        <nav className={AppStyle['header-menu']}>
          <Link to={'/portfolio'}>Home</Link>
          <Link to={'/portfolio/Services'}>Services</Link>
          <Link to={'/portfolio/portfolio'}>Portfolio</Link>
          <Link to={'/portfolio/Contacts'}>Contacts</Link>
        </nav>
      </header>

      <main className={AppStyle['main']}>
        <Routes>
          <Route path="/portfolio" index element={<Home />} />

          <Route path="/portfolio/Services" element={<Services />} />

          <Route path="/portfolio/portfolio" element={<Portfolio />} />

          <Route path="/portfolio/Contacts" element={<Contacts />} />
        </Routes>
      </main>

      <footer className={AppStyle['footer']}>&copy; 2024 Nurmuhammad</footer>
    </Fragment>
  );
};

export default App;
