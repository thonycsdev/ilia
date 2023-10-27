import Link from "next/link";
import React, { ReactNode } from "react";

type NavBarProps = {
	children: ReactNode;
};
function NavBar(props: NavBarProps) {
	const { children } = props;
	return (
		<>
			<nav className="flex items-center justify-between p-6 container mx-auto">
				<Link href="/" className="relative text-2xl font-extrabold">
					<span className="absolute w-10 h-2 bg-cyan-500 bottom-1 right-0"></span>
					<span className="relative z-10">Ilia Desafio V2</span>
				</Link>

				<div className="text-base text-gray-900 hidden lg:flex">
					<Link
						href="/"
						className="block font-bold mt-4 lg:inline-block text-cyan-600 lg:mt-0 mr-10"
					>
						Home
					</Link>
					<Link
						href="/costumers"
						className="block font-bold mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10"
					>
						Costumers
					</Link>
					<Link
						href={"/products"}
						className="block font-bold mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10"
					>
						Products
					</Link>
					<Link
						href={"/order"}
						className="block font-bold hover:text-gray-700 mt-4 lg:inline-block lg:mt-0 mr-10"
					>
						My Orders
					</Link>
				</div>

				<div className="flex items-center">
					<div className="mr-5 lg:mr-0">
						<button className="font-bold py-2 px-6 text-gray-600 hover:text-gray-700 text-base hidden lg:inline-flex">
							Sign in
						</button>
						<button className="hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 px-5 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-cyan-900">
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
