import React, { useState } from 'react';
import styles from './SkillsItem.module.scss';
import classNames from 'classnames';

export const SkillsItem = ({ title, description, className }) => {
  const [visible, setVisible] = useState(true);
  const handleToggleText = (event) => {
    event.preventDefault();
    setVisible((prevState) => !visible);
  };
  return (
    <article
      className={classNames(
        styles.skillsItem,
        visible && styles.skillsIsolatedHeightArticle,
      )}
      onClick={handleToggleText}
    >
      <h2>{title}</h2>
      <p
        className={classNames(
          styles.skillsDescription,
          !visible && styles.skillsDescriptionShort,
        )}
      >
        {description}
      </p>
    </article>
  );
};
