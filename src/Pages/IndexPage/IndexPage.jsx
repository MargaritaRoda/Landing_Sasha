import React from 'react';
import styles from './IndexPage.module.scss';
import { Container } from '../../components/TitlePageAbout';
import { Header } from '../../components/Header';
import { PageContainer } from '../../components/PageContainer';
import { FrontArticle } from '../../components/FrontArticle';
import { frontArticleRu } from '../../lib/info';
import classNames from 'classnames';

export const IndexPage = () => {
  return (
    <PageContainer className={styles.pageContainer}>
      <Header />
      <Container className={classNames(styles.pageContainer, styles.card)}>
        <FrontArticle
          name={frontArticleRu.name}
          text={frontArticleRu.text}
          titleText={frontArticleRu.titleText}
        />
      </Container>
    </PageContainer>
  );
};
