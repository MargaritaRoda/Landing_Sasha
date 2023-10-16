import React from 'react';
import styles from './UnderlayPage.module.scss';
import classNames from 'classnames';
import { LanguageBtn } from '../LanguageBtn';

export const UnderlayPage = ({ children, className, novisible }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <LanguageBtn className={novisible} />
      {children}
    </div>
  );
};
