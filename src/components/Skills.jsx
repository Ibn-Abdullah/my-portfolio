import React from "react";
import { FaUnity, FaReact } from "react-icons/fa";
import { SiNodedotjs, SiFirebase, SiTailwindcss } from "react-icons/si";

export default function SkillsSection() {
	const skills = [
		{
			title: "Unity Developer",
			description:
				"Experienced in C#, physics-based gameplay, and interactive mechanics using Unity Engine.",
			icon: (
				<FaUnity className="text-6xl text-blue-400 drop-shadow-[0_0_10px_#60a5fa]" />
			),
		},
		{
			title: "Fullstack Web Developer",
			description:
				"Building responsive web apps with React, Tailwind CSS, Node.js, and Firebase.",
			icon: (
				<div className="flex justify-center gap-5 text-5xl text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]">
					<FaReact />
					<SiTailwindcss />
					<SiNodedotjs />
					<SiFirebase />
				</div>
			),
		},
	];

	return (
		<section
			id="skills"
			className="max-w-6xl mx-auto py-32 px-6 text-center relative">
			{/* subtle background glow */}
			<div className="absolute inset-0 bg-linear-to-b from-transparent via-indigo-900/10 to-transparent pointer-events-none" />

			<h2 className="text-5xl font-bold mb-16 bg-linear-to-r from-blue-400 via-red-400 to-fuchsia-500 text-transparent bg-clip-text tracking-wide">
				SKILLS
			</h2>

			<div className="grid md:grid-cols-2 gap-12 relative z-10">
				{skills.map((s, i) => (
					<div
						key={i}
						className="bg-gray-800/50 hover:bg-gray-800/70 p-10 rounded-3xl border border-gray-700 hover:border-purple-400/40 transition-all backdrop-blur-md shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-2">
						<div className="flex justify-center mb-6">{s.icon}</div>
						<h3 className="text-3xl font-semibold mb-3 text-purple-300">
							{s.title}
						</h3>
						<p className="text-gray-400 leading-relaxed max-w-md mx-auto">
							{s.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
