import styles from './spinner.module.css';

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <div></div>
      <div></div>
    </div>
  );
}
