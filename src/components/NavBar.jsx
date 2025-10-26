import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaCode, FaLaptopCode } from "react-icons/fa";

export default function NavBar() {
	return (
		<motion.nav
			initial={{ y: -60, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6 }}
			className="fixed top-0 w-full z-50 px-8 py-4 backdrop-blur-xl bg-black/30 border-b border-white/10 flex items-center justify-between">
			<h1 className="text-2xl font-bold tracking-wide bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
				HAZEM<span className="text-white">.</span>
			</h1>

			<ul className="hidden md:flex gap-10 text-lg font-medium text-gray-300">
				<li>
					<a
						href="#home"
						className="hover:text-cyan-400 flex items-center gap-2 transition">
						<FaHome /> Home
					</a>
				</li>
				<li>
					<a
						href="#skills"
						className="hover:text-cyan-400 flex items-center gap-2 transition">
						<FaCode /> Skills
					</a>
				</li>
				<li>
					<a
						href="#projects"
						className="hover:text-cyan-400 flex items-center gap-2 transition">
						<FaLaptopCode /> Projects
					</a>
				</li>
			</ul>
		</motion.nav>
	);
}
