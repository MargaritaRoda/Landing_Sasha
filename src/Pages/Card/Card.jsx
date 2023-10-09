import React, { Fragment, useEffect, useState } from 'react';
import styles from './Card.module.scss';
import { Button } from '../../components/Button';
import { UnderlayPage } from '../../components/UnderlayPage';
import { useNavigate } from 'react-router-dom';
import { navigation } from '../../lib/constants';
// import {cardInfo} from "../../../server/info";
import { getCardData } from '../../lib/API';

const PUBLIC_PATH = process.env.PUBLIC_URL;

const sashaPhoto = `${PUBLIC_PATH}/assets/images/sasha.jpeg`;

export const Card = () => {
  const [cardInfo, setCardInfo] = useState();
  useEffect(() => {
    getCardData().then((data) => {
      setCardInfo(data);
    });
  }, [setCardInfo]);

  const navigate = useNavigate();
  const handleGo = (event) => {
    event.preventDefault();
    const textBtn = event.target.innerText;
    for (let i = 0; i < navigation.length; i++) {
      let { nameBtn, path_url } = navigation[i];
      if (nameBtn === textBtn) {
        if (!path_url.includes('https')) {
          navigate(path_url);
        } else {
          window.location.href = path_url;
        }
      }
    }
  };
  return cardInfo !== undefined ? (
    <UnderlayPage className={styles.cardWrap}>
      <div className={styles.card}>
        <img src={sashaPhoto} alt="Sasha" className={styles.img} />
        <div>
          <h2>{cardInfo.name}</h2>
          <h3>{cardInfo.subName}</h3>
          <ul className={styles.status}>
            {cardInfo.description?.map(({ num, title }, index) => (
              <Fragment key={index}>
                <li>
                  <var>{num}</var>
                  <label>{title}</label>
                </li>
              </Fragment>
            ))}
          </ul>
          <nav className={styles.buttons}>
            {navigation.map((text, index) =>
              text.nameBtn ? (
                <Button
                  children={text.nameBtn}
                  type="button"
                  className={styles.primary}
                  onClick={handleGo}
                  key={index}
                />
              ) : null,
            )}
          </nav>
        </div>
      </div>
    </UnderlayPage>
  ) : (
    <div>Loading</div>
  );
};
