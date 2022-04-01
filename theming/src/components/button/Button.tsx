import React from 'react';

interface Props {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  color?: string;
}

import styles from './button.module.scss';

export const Button: React.FC<Props> = ({ label, onClick, color }) => {
  return (
    <button
      className={`${styles.button} ${color ? styles[color] : styles['primary']}`}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {label}
    </button>
  );
};
