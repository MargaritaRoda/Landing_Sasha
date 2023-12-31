import React from 'react';
import styles from './Skills.module.scss';
import { UnderlayPage } from '../../components/UnderlayPage';
import { SkillsItem } from '../../components/SkillsItem';
import { Scroll } from '../../components/Scroll';
import { useGetSkillsQuery } from '../../store/slicers/apiSlice';
import { useSelector } from 'react-redux';
import { languageSelector } from '../../store/selectors/lang.selector';

export const Skills = () => {
  const langCurr = useSelector(languageSelector);

  const lang = langCurr.textLang;
  const { data: skills } = useGetSkillsQuery({ lang });

  return skills ? (
    <UnderlayPage className={styles.skills}>
      <div className={styles.skillsWrap}>
        <SkillsItem
          title={skills.title.diagnostics}
          description={skills.description.diagnostics}
        />
        <SkillsItem
          title={skills.title.injection}
          description={skills.description.injection}
        />
        <SkillsItem
          title={skills.title.joints}
          description={skills.description.joints}
        />
      </div>
      <Scroll />
    </UnderlayPage>
  ) : (
    <div>loading</div>
  );
};
