import React from 'react';
import styles from './AboutItem.module.scss';
import { UnderlayPage } from '../UnderlayPage';

export const AboutItem = ({ children }) => {
  return (
    <UnderlayPage>
      <div className={styles.wrapper}>
        <h3 className={styles.root}>{children}</h3>
      </div>
    </UnderlayPage>
  );
};
