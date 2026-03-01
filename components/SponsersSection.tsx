'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function SponsorsSection() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const scroll = () => {
			container.scrollLeft += 1;
			if (container.scrollLeft >= container.scrollWidth / 2) {
				container.scrollLeft = 0;
			}
		};

		const interval = setInterval(scroll, 20);
		return () => clearInterval(interval);
	}, []);

	const sponsors = [
		{ name: 'Google', logo: 'https://placehold.co/600x400' },
		{ name: 'Microsoft', logo: 'https://placehold.co/600x400' },
		{ name: 'Amazon', logo: 'https://placehold.co/600x400' },
		{ name: 'Meta', logo: 'https://placehold.co/600x400' },
		{ name: 'Netflix', logo: 'https://placehold.co/600x400' },
		{ name: 'Adobe', logo: 'https://placehold.co/600x400' },
		{ name: 'Tesla', logo: 'https://placehold.co/600x400' },
		{ name: 'Spotify', logo: 'https://placehold.co/600x400' },
	];

	return (
		<section id="sponsors" className="pb-16 bg-white scroll-mt-24">
			<div className="max-w-7xl mx-auto px-6 text-center mb-10">
				<h2 className="text-3xl font-bold">Our Sponsors</h2>
				<p className="text-gray-500 mt-2">Backed by industry leaders</p>
			</div>

			<div ref={containerRef} className="overflow-hidden whitespace-nowrap scroll-smooth">
				<div className="inline-flex gap-16 items-center">
					{[...sponsors, ...sponsors].map((sponsor, index) => (
						<div
							key={index}
							className="flex items-center justify-center min-w-30 sm:min-w-37.5 md:min-w-[180px]"
						>
							<Image
								src={sponsor.logo}
								alt={sponsor.name}
								width={140}
								height={60}
								className="object-contain grayscale hover:grayscale-0 transition duration-300"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
