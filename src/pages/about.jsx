const AboutPage = () => {
  return (
    <>
      <h3>Hello!</h3>
      <br/>
      <br/>
      <p>
      I am <emph>Argi</emph>, an experienced front-end developer with nearly <b>4 years</b> of expertise
      particularly in front end development with Vue.js. I have solid experiences in testing
      (Jest, Cypress), server-side dev (Nuxt), containerization, Typescript, multiple CSS Frameworks and libraries,
      and some knowledges of other frameworks (Angular, React).
      <br/>
      <br/>
      In my spare time, I enjoy learning about Japanese culture,
      sparring at Codewars and playing Candy Crush 🍬
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
