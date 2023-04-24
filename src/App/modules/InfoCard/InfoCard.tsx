import { Avatar } from '@/components/Avatar/Avatar';
import styles from './InfoCard.module.scss';
import { Chip } from '@/components/Chip/Chip';
import React from 'react';

interface IProps {
  title?: string;
  description?: string;
  avatarUrl?: string;
  chips?: string[];
}

export const InfoCard = React.memo((props: IProps): JSX.Element => {
  const { title, description, avatarUrl, chips } = props;

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Avatar src={avatarUrl} />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        {!!chips?.length && (
          <div className={styles.chips}>
            {chips.map((chip, i) => <Chip key={`chip${i}-${chip}`}>{chip}</Chip>)}
          </div>
        )}
      </div>
    </div>
  )
})