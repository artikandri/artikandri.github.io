import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'artikandri.github.io',
    href: 'https://artikandri.github.io',
  },
  {
    social: 'email',
    link: 'argikartika@gmail.com',
    href: 'mailto:argikartika@gmail.com',
  },
  {
    social: 'github',
    link: 'artikandri',
    href: 'https://github.com/artikandri',
  },
  {
    social: 'linkedin',
    link: 'Argi Candri',
    href: 'https://www.linkedin.com/in/argi-k-candri-28976b114/',
  },
  {
    social: 'codepen',
    link: 'artikandri',
    href: 'https://codepen.io/artikandri',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
