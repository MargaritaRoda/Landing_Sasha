import React from 'react';
import styles from './Skills.module.scss';
import { UnderlayPage } from '../../components/UnderlayPage';
import { SkillsItem } from '../../components/SkillsItem';
import { skills } from '../../lib/info';
import { Scroll } from '../../components/Scroll';

export const Skills = () => {
  return (
    <UnderlayPage className={styles.skills}>
      <div className={styles.skillsWrap}>
        <SkillsItem
          title={skills.title[0]}
          description={skills.description[0]}
        />
        <SkillsItem
          title={skills.title[1]}
          description={skills.description[1]}
        />
        <SkillsItem
          title={skills.title[2]}
          description={skills.description[2]}
        />
      </div>
      <Scroll />
    </UnderlayPage>
  );
};
