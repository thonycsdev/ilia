import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

const routesInApplication = {
	home: "/",
	orders: "/orders",
	products: "/products",
	costumers: "/costumers",
};

type NavBarProps = {
	children: ReactNode;
};
function NavBar(props: NavBarProps) {
	const { children } = props;
	const router = useRouter();
	return (
		<>
			<nav className="flex items-center justify-between p-6 bg-gradient-to-l from-cyan-200 to-cyan-600">
				<Link href="/" className="relative text-2xl font-extrabold">
					<div className="flex items-center gap-5">
						<img
							src="https://ilia.digital/wp-content/uploads/2022/11/Logo.png"
							className="w-20 h-20"
						/>
						<span className="relative z-10 text-white font-extrabold font-sans">
							Challenge V2
						</span>
					</div>
				</Link>

				<div className="text-base text-gray-900 hidden lg:flex">
					<Link
						href="/"
						className={`block font-bold mt-4 lg:inline-block ${
							router.pathname === routesInApplication.home
								? "text-cyan-50"
								: "text-gray-700"
						} lg:mt-0 mr-10`}
					>
						Home
					</Link>
					<Link
						href="/costumers"
						className={`block font-bold mt-4 lg:inline-block ${
							router.pathname === routesInApplication.costumers
								? "text-cyan-50"
								: "text-gray-700"
						} lg:mt-0 mr-10`}
					>
						Costumers
					</Link>
					<Link
						href={"/products"}
						className={`block font-bold mt-4 lg:inline-block ${
							router.pathname === routesInApplication.products
								? "text-cyan-50"
								: "text-gray-700"
						} lg:mt-0 mr-10`}
					>
						Products
					</Link>
					<Link
						href={"/orders"}
						className={`block font-bold mt-4 lg:inline-block ${
							router.pathname === routesInApplication.orders
								? "text-cyan-50"
								: "text-gray-700"
						} lg:mt-0 mr-10`}
					>
						My Orders
					</Link>
				</div>

				<div className="flex items-center">
					<div className="mr-5 lg:mr-0">
						<button className="font-bold py-2 px-6 text-gray-600 hover:text-gray-700 text-base hidden lg:inline-flex">
							Sign in
						</button>
						<button className="hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 px-5 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-cyan-500">
							Sign up
						</button>
					</div>
					<div className="block lg:hidden">
						<button className="flex items-center px-4 py-3 border focus:outline-none">
							<svg
								className="fill-current h-3 w-3"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							</svg>
						</button>
					</div>
				</div>
			</nav>

			{children}
		</>
	);
}

export default NavBar;
