import React from 'react';
import styles from './FrontArticle.module.scss';
import classNames from 'classnames';
import { UnderlayPage } from '../UnderlayPage';

const PUBLIC_PATH = process.env.PUBLIC_URL;

export const FrontArticle = ({ title, descriptionText, className }) => {
  return (
    <UnderlayPage>
      <article className={styles.articleCard}>
        <h3 className={classNames(styles.articleTitle, className)}>{title}</h3>
        <p className={styles.articleText}>{descriptionText}</p>
      </article>
    </UnderlayPage>
  );
};
