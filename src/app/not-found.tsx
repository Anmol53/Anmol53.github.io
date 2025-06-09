'use client';

import { useEffect } from 'react';
import styles from './not-found.module.css';

export default function NotFound() {
  useEffect(() => {
    const currentURL = window.location.href;
    const lowerCaseURL = currentURL.toLowerCase();
    if (currentURL !== lowerCaseURL) {
      location.replace(lowerCaseURL);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>404</h1>
        <p>You’re lost in space.</p>
      </div>
    </div>
  );
}
