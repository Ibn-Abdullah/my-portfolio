import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./index.css";

export default function App() {
	return (
		<div className="min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100 transition-colors duration-500">
			<NavBar />
			<Hero />
			<Skills />
			<Projects />
			<footer className="text-center mt-20 text-gray-500 dark:text-gray-400 text-sm pb-6">
				© {new Date().getFullYear()} , Built by Hazem Abdullah Gaballah
			</footer>
		</div>
	);
}
