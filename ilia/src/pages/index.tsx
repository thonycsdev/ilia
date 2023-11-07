import Footer from "@/components/Footer/Footer";
import QuickAccess from "@/components/QuickAccess/QuickAccess";
import { Costumer, Order } from "@/models/costumer";
import costumerRepository from "@/repositories/customerRepository";
import orderRepository from "@/repositories/orderRepository";
import Link from "next/link";
import { useEffect } from "react";

type HomeProps = {
	response: {
		orders: Order[];
		costumers: Costumer[];
	};
};

export default function Home({ response }: HomeProps) {
	useEffect(() => {
		if (!response) {
			return;
		}
	}, [response]);
	//O app n foi feito sendo mobile first. Foi idealmente pensado para fullhd ou resulucoes maiores
	return (
		<>
			<div className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto">
				<div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
					<div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left">
						<h1 className="text-gray-900 md:text-6xl lg:text-8xl mb-8 text-4xl font-extrabold leading-none tracking-tighter">
							Costumers and Orders
						</h1>
						<p className="mb-8 text-base leading-relaxed text-left text-gray-600">
							Technical Challenge Ilia
						</p>
						<div className="lg:mt-6 max-w-7xl sm:flex mt-0">
							<div className="sm:mt-0 mt-3">
								<Link href={"/products"}>
									<button className="hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-cyan-900">
										See Products
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="lg:w-5/6 lg:max-w-lg xl:mt-0 w-full mt-12">
						<div className="relative">
							<img
								src="https://ilia.digital/wp-content/uploads/2022/11/Logo.png"
								alt="ilia-logo"
								className="relative z-10 transform rotate-6"
							/>
							<div className="absolute -top-10 -left-24 w-full h-full bg-cyan-900 transform -rotate-6"></div>
						</div>
					</div>
				</div>
			</div>

			<QuickAccess
				costumersLength={response.costumers.length}
				ordersLength={response.orders.length}
			/>
			<Footer />
		</>
	);
}

export async function getServerSideProps() {
	const { getAllCostumers } = costumerRepository();
	const { getAllOrders } = orderRepository();
	const orders = await getAllOrders();
	const costumers = await getAllCostumers();

	return {
		props: {
			response: {
				orders,
				costumers,
			},
		},
	};
}
