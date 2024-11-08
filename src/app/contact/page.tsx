import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.subtitle}>I love to hear from you. Get in touch!</p>

        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.inputField}
              placeholder="Your Name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.inputField}
              placeholder="Your Email"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className={styles.textArea}
              placeholder="Your Message"
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  );
}
