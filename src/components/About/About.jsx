import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { FrontArticle } from '../FrontArticle';
import { aboutInfoEn } from '../../lib/info';
import { UnderlayPage } from '../UnderlayPage';
import { AboutItem } from '../AboutItem';

export const About = () => {
  return (
    <>
      <ParallaxProvider scrollAxis="vertical">
        <Parallax opacity={[0, 2]}>
          <AboutItem />
        </Parallax>
        <Parallax opacity={[0, 2]}>
          <FrontArticle
            title={aboutInfoEn.title[1]}
            descriptionText={aboutInfoEn.descriptionText[1]}
          />
        </Parallax>
        <Parallax opacity={[0, 2]}>
          <FrontArticle
            title={aboutInfoEn.title[2]}
            descriptionText={aboutInfoEn.descriptionText[2]}
          />
        </Parallax>
      </ParallaxProvider>
    </>
  );
};
