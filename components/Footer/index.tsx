import styles from '../../styles/Footer.module.scss';
import { Github, Linkedin, Twitter } from '../../utils/icons';
import { IconType } from 'react-icons';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Made by{' '}
        <a href='https://github.com/attigh' target='_blank' rel='noreferrer'>
          <b>Hamza Attig</b>
        </a>
      </p>
      <div>
        <a href='https://linkedin.com/in/hamzaattig/' className={styles.icon} target='_blank' rel='noreferrer'>
          <Linkedin />
        </a>
        <a href='#' className={styles.icon} target='_blank' rel='noreferrer'>
          <Twitter />
        </a>
        <a href='https://github.com/attigh' className={styles.icon} target='_blank' rel='noreferrer'>
          <Github />
        </a>
      </div>
    </div>
  );
}
