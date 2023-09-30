import NavBar from "@/components/NavBar/NavBar";
import { CostumerContextProvider } from "@/contexts/costumerContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<CostumerContextProvider>
			<NavBar>
				<Component {...pageProps} />
			</NavBar>
		</CostumerContextProvider>
	);
}
