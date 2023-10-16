import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { FrontArticle } from '../../components/FrontArticle';
import { AboutItem } from '../../components/AboutItem';
import { Scroll } from '../../components/Scroll';
import { useGetAboutInfoQuery } from '../../store/slicers/apiSlice';
import { useSelector } from 'react-redux';
import { languageSelector } from '../../store/selectors/lang.selector';

export const About = () => {
  const langCurr = useSelector(languageSelector);
  const lang = langCurr.textLang;

  const { data: aboutInfo } = useGetAboutInfoQuery({ lang });

  return aboutInfo ? (
    <>
      <ParallaxProvider scrollAxis="vertical">
        <Parallax opacity={[0, 2]}>
          <AboutItem children={aboutInfo.title.way} />
        </Parallax>
        <Parallax opacity={[0, 2]}>
          <FrontArticle
            title={aboutInfo.title.education}
            descriptionText={aboutInfo.descriptionText.education}
          />
        </Parallax>
        <Parallax opacity={[0, 2]}>
          <FrontArticle
            title={aboutInfo.title.professional}
            descriptionText={aboutInfo.descriptionText.professional}
          />
        </Parallax>
      </ParallaxProvider>
      <Scroll />
    </>
  ) : (
    <div>loading</div>
  );
};
