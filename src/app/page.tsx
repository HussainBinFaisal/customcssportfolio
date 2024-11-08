import styles from "./Home.module.css";
import { FaArrowRight } from 'react-icons/fa';
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={styles.homeContainer}>
        <h1 className={styles.homeTitle}>Welcome to My Portfolio</h1>
        <p className={styles.homeSubtitle}>I am a passionate Web Developer who loves creating innovative and efficient solutions.</p>

        {/* Greeting and Name */}
        <div className={styles.nameAndGreeting}>
          <span>Hello, I am Hussain!</span>
        </div>

        {/* Button to navigate to About */}
        <Link href="about">
          <button className={styles.homeButton}>
            <FaArrowRight className="mr-2" />
            Go to About
          </button>
        </Link>
      </div>
    </div>
  );
}
