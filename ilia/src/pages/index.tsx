import Footer from "@/components/Footer/Footer";
import QuickAccess from "@/components/QuickAcess/QuickAccess";

export default function Home() {
	return (
		<>
			<header>
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
									<button className="hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-cyan-500">
										See Products
									</button>
								</div>
								<div className="sm:mt-0 sm:ml-3 mt-3">
									<button className="items-center block px-10 py-3.5 text-base font-medium text-center text-cyan-500 transition duration-500 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
										Create Order
									</button>
								</div>
							</div>
						</div>
						<div className="lg:w-5/6 lg:max-w-lg xl:mt-0 w-full mt-12">
							<div className="relative">
								<img
									src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1999&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="themeptation"
									className="relative z-10 transform rotate-6 shadow-2xl"
								/>
								<div className="absolute -top-10 -left-24 w-full h-full bg-cyan-500 transform -rotate-6"></div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<body>
				<QuickAccess />
			</body>
			<Footer />
		</>
	);
}
