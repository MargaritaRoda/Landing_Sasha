import React from 'react';
import styles from './Card.module.scss';
import { Button } from '../Button';
import { UnderlayPage } from '../UnderlayPage';

const PUBLIC_PATH = process.env.PUBLIC_URL;

const sashaPhoto = `${PUBLIC_PATH}/assets/images/sasha.jpeg`;

const navButtonText = ['About me', 'Methods', 'Appointment'];

export const Card = () => {
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
            {navButtonText.map((text, index) => (
              <Button
                children={text}
                type="button"
                className={styles.primary}
                key={index}
              />
            ))}
          </nav>
        </div>
      </div>
    </UnderlayPage>
  );
};
