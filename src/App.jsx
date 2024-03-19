import { Fragment } from 'react';
import AppStyle from './App.module.scss';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';
import { TypeAnimation } from 'react-type-animation';

const App = () => {
  return (
    <Fragment>
      <header className={AppStyle['header']}>
        <TypeAnimation
          sequence={[`Nurmuhammad - freelancer, web - developer`, 1000]}
          className={AppStyle['title-1']}
          wrapper="h2"
          repeat={Infinity}
        />

        <TypeAnimation
          sequence={[
            `Hello everyone, I am a professional freelance layout designer, who loves creation websites and web development.`,
            1000,
          ]}
          className={AppStyle['subtitle']}
          wrapper="p"
          repeat={Infinity}
        />

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
