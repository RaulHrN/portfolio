import Link from 'next/link'

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.language_manu}>
          <p>pt-br</p>
        </div>
        <div className={styles.link_container}>
          <Link href="/" className={styles.nav_link}>
          Home
        </Link>
        <Link href="/projects" className={styles.nav_link}>
          Projects
        </Link>
        <Link href="/resume" className={styles.nav_link}>Resume</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
