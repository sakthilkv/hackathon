'use client';

import { Calendar, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

export default function FeaturedEvents() {
	const events = [
		{
			title: 'Hackathon',
			description:
				'Build, innovate and compete with top developers. 24 hours of pure creation and problem solving.',
			date: 'March 28-29, 2026',
			location: 'Chennai',
			participants: '500+ Participants',
			image: 'https://placehold.co/600x400',
		},
		{
			title: 'Internsmela',
			description:
				'Technical and non-technical events designed to challenge your skills and creativity.',
			date: 'April 10, 2026',
			location: 'Campus Arena',
			participants: '1000+ Students',
			image: 'https://placehold.co/600x400',
		},
		{
			title: 'Startup Connect',
			description:
				'Meet founders, investors, and industry leaders. Pitch ideas and build real opportunities.',
			date: 'May 5, 2026',
			location: 'Innovation Hub',
			participants: '50+ Startups',
			image: 'https://placehold.co/600x400',
		},
	];

	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-14">
					<h2 className="text-3xl md:text-4xl font-bold">Featured Events</h2>
					<p className="text-gray-500 mt-3">
						Explore our flagship events designed for innovation and growth
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{events.map((event, index) => (
						<div
							key={index}
							className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
						>
							<div className="relative w-full h-52">
								<Image
									src={event.image}
									alt={event.title}
									fill
									unoptimized
									className="object-cover"
								/>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-semibold mb-3">{event.title}</h3>

								<p className="text-gray-600 text-sm mb-5">{event.description}</p>

								<div className="space-y-3 text-sm text-gray-500">
									<div className="flex items-center gap-2">
										<Calendar size={16} />
										<span>{event.date}</span>
									</div>

									<div className="flex items-center gap-2">
										<MapPin size={16} />
										<span>{event.location}</span>
									</div>

									<div className="flex items-center gap-2">
										<Users size={16} />
										<span>{event.participants}</span>
									</div>
								</div>

								<Button className="mt-6 w-full p-5">Register Now</Button>
							</div>
						</div>
					))}
				</div>

				<div className="flex justify-center mt-12">
					<Button variant="outline" className="px-8 py-6">
						See All Events
					</Button>
				</div>
			</div>
		</section>
	);
}
