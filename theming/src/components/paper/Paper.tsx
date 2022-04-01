import React from 'react';

import styles from './paper.module.scss';

export const Paper: React.FC = ({ children }) => {
  return <div className={`text background-2 ${styles.paper}`}> {children} </div>;
};
