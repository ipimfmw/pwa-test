import Head from "next/head";
import Script from "next/script";

const Home = () => {
  return (
    <div>
      <Head>
        <title>NFT-mobilefront</title>
        <link rel="manifest" href="manifest.json" />
        <link rel="apple-touch-icon" href="image/89.png" />
        <Script src="https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate" />
      </Head>
      Hi im next! and this is deploying test!22222
    </div>
  );
};

export default Home;
