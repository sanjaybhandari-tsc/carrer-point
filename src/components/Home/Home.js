import styles from '@/styles/Home/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Career Point Placement Services</h1>
        <p>Your gateway to top opportunities</p>
        <button className={styles.cta}>Get Started</button>
      </section>

      <section className={styles.features}>
        <div className={styles.card}>
          <h3>Top Companies</h3>
          <p>Get placed in leading organizations</p>
        </div>

        <div className={styles.card}>
          <h3>Skill Training</h3>
          <p>Learn industry-relevant skills</p>
        </div>

        <div className={styles.card}>
          <h3>Career Guidance</h3>
          <p>Expert mentorship for your growth</p>
        </div>
      </section>
    </div>
  );
}