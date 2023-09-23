import React from 'react';
import styles from './PageContainer.module.scss';
import classNames from 'classnames';

export const PageContainer = ({ children, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      {children ? children : 'loading'}
    </div>
  );
};
