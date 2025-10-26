import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
	const projects = [
		{
			title: "Chat App",
			category: "Web App",
			image: "chatapp.png",
			link: "https://h-chat-production.up.railway.app/",
		},
		{
			title: "To-Do App",
			category: "Web App",
			image: "todo.png",
			link: "https://to-do-react-theta-sand.vercel.app/",
		},
		{
			title: "Store App",
			category: "Web App",
			image: "store.png",
			link: "https://store-1-qhn4.onrender.com",
		},
		{
			title: "Foxxy Box",
			category: "Unity Game",
			image: "Foxxy.png",
			link: "https://haz-man.itch.io/foxxy-box",
		},
		{
			title: "Headball",
			category: "Unity Game",
			image: "Football.png",
			link: "https://haz-man.itch.io/football-game",
		},
		{
			title: "Jump!!!",
			category: "Unity Game",
			image: "platform.png",
			link: "https://haz-man.itch.io/jump",
		},
	];

	return (
		<section
			id="projects"
			className="py-28 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-center relative overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_60%)]"></div>

			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
				Projects ({projects.length})
			</motion.h2>

			<div className="max-w-[95%] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 relative z-10">
				{projects.map((p, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: i * 0.1 }}
						whileHover={{ scale: 1.03 }}>
						<div className="group relative bg-gray-800/50 backdrop-blur-md border border-gray-700 hover:border-cyan-400/60 overflow-hidden shadow-lg hover:shadow-cyan-400/20 transition-all flex flex-col h-[480px]">
							<img
								src={p.image}
								alt={p.title}
								className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
							/>
							<div className="p-8 flex flex-col justify-between flex-grow text-left">
								<div>
									<h3 className="text-3xl font-semibold text-cyan-400 mb-2">
										{p.title}
									</h3>
									<p className="text-gray-400 text-base">{p.category}</p>
								</div>

								<a
									href={p.link}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-6 inline-block px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md hover:shadow-cyan-500/40 transition-all">
									View Project
								</a>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
