import React from 'react';
import styles from './UnderlayPage.module.scss';
import classNames from 'classnames';

export const UnderlayPage = ({ children, className }) => {
  return <div className={classNames(styles.root, className)}>{children}</div>;
};
