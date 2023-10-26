import NavBar from "@/components/NavBar/NavBar";
import { CostumerContextProvider } from "@/contexts/costumerContext";
import { OrderContextProvider } from "@/contexts/orderContext";
import { ProductContextProvider } from "@/contexts/productContext";
import queryClient from "@/contexts/queryClient/queryClient";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider>
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
			</ChakraProvider>
		</QueryClientProvider>
	);
}
