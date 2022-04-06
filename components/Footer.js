import Link from "next/link";
import styles from '@/styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Wakayama Events 2022</p>
      <p>
        Developed by <a href="https://alfiofedericodp.netlify.app/" target="_blank">Federico</a>
      </p>
      <p>
        <Link href="/about" >About</Link>
      </p>
    </footer>
  );
}

export default Footer;
