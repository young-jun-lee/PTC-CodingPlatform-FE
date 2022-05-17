// import "../styles/globals.css";
import "../styles/Landing.css";
import "../styles/Footer.css";
import "../styles/Banner.css";
import "../styles/Nav.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
