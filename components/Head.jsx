import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Argi Candri is a front end developer with some experiences in data science. "
      />
      <meta
        name="keywords"
        content="argi candri, argi, candri, web developer portfolio,  web developer,  developer, portfolio, full stack, frontend, vue, react, next"
      />
      <meta property="og:title" content="Argi Candri's Portfolio" />
      <meta
        property="og:description"
        content="A front end developer with some experiences in data science. "
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://artikandri.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Argi Candri',
};
