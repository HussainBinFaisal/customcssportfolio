import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.subtitle}>Lets dive into who I am!</p>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.textSection}>
            <p className={styles.text}>
              Assalamualikum, I am Hussain Bin Faisal, a passionate web developer with a strong enthusiasm for technology and coding. Coming from a humble background, I have honed my skills in web development, focusing on modern technologies like Next.js, TypeScript, Python, HTML, and CSS.
            </p>
            <p className={styles.text}>
              I specialize in building dynamic, responsive websites and applications. My goal is to create beautiful, functional digital experiences that enhance user satisfaction.
            </p>
            <p className={styles.text}>
              I believe technology can create a positive impact, and I am committed to continuous learning to stay at the forefront of this ever-evolving field.
            </p>
          </div>

          <div className={styles.iconContainer}>
            <h3 className={styles.iconTitle}>Technologies I Love</h3>
            <div className={styles.icons}>
              <FaHtml5 className={styles.icon} style={{ color: "#E34F26" }} />
              <FaCss3Alt className={styles.icon} style={{ color: "#1572B6" }} />
              <FaJsSquare className={styles.icon} style={{ color: "#F7DF1E" }} />
              <FaReact className={styles.icon} style={{ color: "#61DAFB" }} />
              <SiTypescript className={styles.icon} style={{ color: "#3178C6" }} />
              <FaPython className={styles.icon} style={{ color: "#FFD43B" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
