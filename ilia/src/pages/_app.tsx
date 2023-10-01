import NavBar from "@/Components/NavBar/NavBar";
import { CostumerContextProvider } from "@/contexts/costumerContext";
import { OrderContextProvider } from "@/contexts/orderContext";
import { ProductContextProvider } from "@/contexts/productContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<CostumerContextProvider>
				<OrderContextProvider>
					<ProductContextProvider>
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
					</ProductContextProvider>
				</OrderContextProvider>
			</CostumerContextProvider>
		</QueryClientProvider>
	);
}
