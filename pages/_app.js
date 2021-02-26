import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            margin: 0;
            font-family: "NanumSquare";
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
