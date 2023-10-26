import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<footer className="bg-white" aria-labelledby="footer-heading">
			<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="xl:col-span-1">
						<a className="relative text-2xl font-extrabold">
							<span className="absolute w-10 h-2 bg-cyan-400 bottom-1 right-0"></span>
							<span className="relative z-10">Contatos:</span>
						</a>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-8 mt-16 p-9 xl:mt-0 xl:col-span-2">
					<div className="md:grid md:grid-cols-2 md:gap-8">
						<Link href={"https://github.com/thonycsdev"}>
							<h3 className="text-xl font-bold text-cyan-500 hover:text-cyan-300">
								Github
							</h3>
						</Link>
					</div>
				</div>
			</div>
			<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
				<div className="flex flex-wrap items-baseline">
					<span className="mt-2 text-sm text-gray-300">
						Feito por:
						<a
							href="https://www.linkedin.com/in/anthonycoutinho98/"
							className="mx-2 font-semibbold text-black hover:text-cyan-500"
							rel="noopener noreferrer"
						>
							Anthony Coutinho da Silva
						</a>
					</span>
				</div>
			</div>
			<div />
		</footer>
	);
}

export default Footer;
