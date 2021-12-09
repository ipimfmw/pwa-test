import { useEffect } from "react";
import Head from "next/head";

const Home = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/pwabuilder-sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <div>
      <Head>
        <title>NFT-mobilefront</title>
        <link rel="manifest" href="manifest.json" />
        <link rel="apple-touch-icon" href="image/89.png" />
      </Head>
      Hi im next! and this is deploying test!22222
    </div>
  );
};

export default Home;
