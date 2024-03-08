import React from 'react';
import ContactStyle from './Pages.module.scss';

const Contacts = () => {
  return (
    <div>
      <section className={ContactStyle['contact']}>
        <h2 className={ContactStyle['title-2']}>Contacts</h2>

        <p className={ContactStyle['contact-text']}>
          Write to me at ruqiyanurmatova@gmail.com and we will promptly discuss
          your project.
        </p>

        <h3 className={ContactStyle['title-3']}>My profiles on social networks:</h3>

        <ul className={ContactStyle['contact-list']}>
          <li>
            <a href="https://www.instagram.com/nurmukhammad_000?igsh=YzljYTk1ODg3Zg==" target="_blank">
              Instagram
            </a>
          </li>

          <li>
            <a href="https://github.com/procuberz" target="_blank">
              GitHub
            </a>
          </li>

          <li>
            <a href="https://t.me/procuber_z" target="_blank">
              Telegram
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contacts;
