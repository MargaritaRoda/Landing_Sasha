import React from 'react';
import styles from './Scroll.module.scss';
import ScrollToTop from 'react-scroll-up';

export const Scroll = () => {
  return (
    <ScrollToTop showUnder={160}>
      <button className={styles.scroll}>&uarr;</button>
    </ScrollToTop>
  );
};
