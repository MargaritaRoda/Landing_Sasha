import React from 'react';
import styles from './Header.module.scss';
import { Button } from '../Button';

const textHeader = ['Обо мне', 'Услуги', 'Контакты'];

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <nav className={styles.headerNav}>
        {textHeader.map((item, index) => {
          return (
            <Button key={index} children={item} className={styles.btnNav} />
          );
        })}
      </nav>
    </div>
  );
};
