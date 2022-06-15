// import "../styles/globals.css";
import "../styles/Landing.css";
import "../styles/Footer.css";
import "../styles/Banner.css";
import "../styles/Nav.css";
import "../styles/test.css";
import "../styles/SignUp.css";
import "../styles/Login.css";
import "../styles/ErrorMessage.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<ColorModeProvider
				options={{
					useSystemColorMode: false,
				}}
			>
				<Component {...pageProps} />
			</ColorModeProvider>
			<Footer />
		</ChakraProvider>
	);
}

export default MyApp;
