import NavBar from "@/components/NavBar/NavBar";
import { CostumerContextProvider } from "@/contexts/costumerContext";
import { OrderContextProvider } from "@/contexts/orderContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<CostumerContextProvider>
			<OrderContextProvider>
				<NavBar>
					<Component {...pageProps} />
				</NavBar>
				<ToastContainer
					position="bottom-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
			</OrderContextProvider>
		</CostumerContextProvider>
	);
}
