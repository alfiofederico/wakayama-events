import Link from "next/link";
import styles from '@/styles/Footer.module.css'
import Cofee from "./Cofee";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Wakayama Events 2022</p>
      <p>
        Developed by{" "}
        <a
          href="https://alfiofedericodp.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Federico
        </a>
      </p>
      <p>
        Visit the Wakayama International club on{" "}
        <a
          href="https://www.facebook.com/groups/10150125009215317"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
      </p>
      <p>
        <Link href="/about">About</Link>
      </p>
      
        <Cofee />
      
    </footer>
  );
}

export default Footer;
