import React from 'react';
import styles from './AboutItem.module.scss';
import { UnderlayPage } from '../UnderlayPage';

export const AboutItem = () => {
  return (
    <UnderlayPage>
      <div className={styles.wrapper}>
        <h3 className={styles.root}>
          Some words about and my professional journey...
        </h3>
      </div>
    </UnderlayPage>
  );
};
