import NavBar from "@/components/NavBar/NavBar";
import { CostumerContextProvider } from "@/contexts/costumerContext";
import { OrderContextProvider } from "@/contexts/orderContext";
import { ProductContextProvider } from "@/contexts/productContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CartContextProvider } from "@/contexts/cartContext";
const montserrat = Montserrat({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={montserrat.className}>
			<ChakraProvider>
				<CostumerContextProvider>
					<OrderContextProvider>
						<ProductContextProvider>
							<CartContextProvider>
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
							</CartContextProvider>
						</ProductContextProvider>
					</OrderContextProvider>
				</CostumerContextProvider>
			</ChakraProvider>
		</div>
	);
}
