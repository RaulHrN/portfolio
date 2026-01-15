import styles from './homePage.module.css';

export default function HomePage() {
  return (
    <main className="container">
      <article className={styles.info}>
        <section className={styles.info_section}>
          <div className={styles.title}></div>
          <div className={styles.subtitle}></div>
        </section>
        <section className={styles.info_section}>
          <div className={styles.description}></div>
        </section>
        <section className={styles.info_section}>
          <button>olá</button>
          <button>olá</button>
        </section>
      </article>
      <article>
        <figure></figure>
      </article>
    </main>
  )
}
