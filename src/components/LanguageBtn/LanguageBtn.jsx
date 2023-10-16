import React from 'react';
import styles from './LanguageBtn.module.scss';
import { Button } from '../Button';
import { language } from '../../lib/constants';
import { useDispatch, useSelector } from 'react-redux';
import { switchLang } from '../../store/slicers/lang.slicer';
import classNames from 'classnames';
import { languageSelector } from '../../store/selectors/lang.selector';

export const LanguageBtn = ({ className }) => {
  const dispatch = useDispatch();
  const selectLang = useSelector(languageSelector);

  const handleSwitchLang = (event, textLang) => {
    dispatch(switchLang({ textLang }));
  };

  return (
    <div className={classNames(styles.wrap, className)}>
      {language.map(({ textLang, locale }, index) => (
        <Button
          children={textLang}
          key={index}
          className={classNames(
            styles.btn,
            selectLang.textLang.toLowerCase() === textLang.toLowerCase()
              ? styles.active
              : undefined,
          )}
          onClick={() => handleSwitchLang({}, textLang)}
        />
      ))}
    </div>
  );
};
