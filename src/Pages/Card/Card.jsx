import React from 'react';
import styles from './Card.module.scss';
import { Button } from '../../components/Button';
import { UnderlayPage } from '../../components/UnderlayPage';
import { useNavigate } from 'react-router-dom';
import { navigation } from '../../lib/constants';

const PUBLIC_PATH = process.env.PUBLIC_URL;

const sashaPhoto = `${PUBLIC_PATH}/assets/images/sasha.jpeg`;

export const Card = () => {
  const navigate = useNavigate();
  const handleGo = (event) => {
    event.preventDefault();
    const textBtn = event.target.innerText;
    for (let i = 0; i < navigation.length; i++) {
      let { nameBtn, path_url } = navigation[i];
      if (nameBtn === textBtn) {
        if (!path_url.includes('https')) {
          navigate(path_url);
        } else {
          window.location.href = path_url;
        }
      }
    }
  };
  return (
    <UnderlayPage>
      <div className={styles.card}>
        <img src={sashaPhoto} alt="Sasha" className={styles.img} />
        <div>
          <h2>Sasha</h2>
          <h3>Врач 1й категории</h3>
          <ul className={styles.status}>
            <li>
              <var>1200</var>
              <label>Patients</label>
            </li>
            <li>
              <var>3</var>
              <label>Methods</label>
            </li>
            <li>
              <var>100</var>
              <label>Save lives</label>
            </li>
          </ul>
          <nav className={styles.buttons}>
            {navigation.map((text, index) =>
              text.nameBtn ? (
                <Button
                  children={text.nameBtn}
                  type="button"
                  className={styles.primary}
                  onClick={handleGo}
                  key={index}
                />
              ) : null,
            )}
          </nav>
        </div>
      </div>
    </UnderlayPage>
  );
};
