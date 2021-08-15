import { ReactNode, FC, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import podzo from "../../public/PODZO.png";
import styles from "../../styles/Navbar.module.scss";

type Props = {
  children: ReactNode;
};
const Navbar: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.nav_logo}>
            <Image
              alt="home button"
              src={podzo}
              className={styles.nav_logo_image}
            />
          </a>
        </Link>
        <div className={styles.nav_links}>
          <Link href="/">
            <a className={styles.nav_links_link}>Home</a>
          </Link>
          <Link href="/restaurants">
            <a className={styles.nav_links_link}>Restaurants</a>
          </Link>
          <Link href="/contact">
            <a className={styles.nav_links_link}>Contact</a>
          </Link>
          <div className={styles.nav_links_vl}></div>
          <Link href="">
            <a className={styles.nav_links_link}>Login</a>
          </Link>
          <div className={styles.nav_links_signup}>
            <Link href="">
              <a className={styles.nav_links_link}>Sign up</a>
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </Fragment>
  );
};

export default Navbar;
