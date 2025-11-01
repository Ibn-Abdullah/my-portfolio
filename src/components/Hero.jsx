import React from "react";
import {
	FaGithub,
	FaEnvelope,
	FaTwitter,
	FaInstagram,
	FaLink,
	FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section
			id="hero"
			className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 bg-linear-to-br from-slate-900 via-gray-900 to-black">
			{/* Left Section */}
			<div className="flex-1 text-center md:text-left">
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-5xl md:text-6xl font-bold mb-6 font-mono bg-linear-to-r from-blue-600 via-cyan-700 to-cyan-600 text-transparent bg-clip-text">
					HAZEM IBN-ABDULLAH
				</motion.h1>

				<p className="text-gray-400 text-lg max-w-lg mb-8">
					High school student passionate about coding, science, and creative
					technology. Blending logic with imagination.
				</p>

				<div className="flex justify-center md:justify-start gap-6 text-3xl">
					<a
						href="https://github.com/Ibn-Abdullah"
						target="_blank"
						rel="noreferrer"
						className="text-gray-300 hover:text-gray-400 transition-colors">
						<FaGithub />
					</a>
					<a
						href="https://x.com/haz_man_twit"
						target="_blank"
						rel="noreferrer"
						className="text-sky-400 hover:text-sky-300 transition-colors">
						<FaTwitter />
					</a>
					<a
						href="https://www.instagram.com/hazemjaba244/"
						target="_blank"
						rel="noreferrer"
						className="text-pink-500 hover:text-pink-400 transition-colors">
						<FaInstagram />
					</a>
					<a
						href="mailto:hjaballah244@gmail.com"
						target="_blank"
						className="text-red-500 hover:text-red-400 transition-colors">
						<FaEnvelope />
					</a>
					<a
						href="https://wa.me/201129136543"
						target="_blank"
						rel="noreferrer"
						className="text-green-500 hover:text-green-400 transition-colors">
						<FaWhatsapp />
					</a>
					<a
						href="https://linktr.ee/hazombi12345"
						target="_blank"
						rel="noreferrer"
						className="text-green-400 hover:text-green-300 transition-colors">
						<FaLink />
					</a>
				</div>
			</div>

			{/* Right Section - Animated Image */}
			<div className="flex-1 flex justify-center relative">
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.5)]">
					<img
						src="pic.jpg"
						alt="Hazem"
						className="w-full h-full object-cover"
					/>
					{/* <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 via-black-500/20 to-white-500/20 animate-pulse" /> */}
				</motion.div>

				{/* glowing rings */}
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
					className="absolute w-96 h-96 border border-blue-500/30 rounded-full blur-md"
				/>
				<motion.div
					animate={{ rotate: -360 }}
					transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
					className="absolute w-80 h-80 border border-pink-500/20 rounded-full blur-md"
				/>
			</div>
		</section>
	);
}
