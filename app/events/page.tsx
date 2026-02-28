'use client';

import { Calendar, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function EventsPage() {
	const events = [
		{
			title: 'Hackathon',
			date: 'March 28-29, 2026',
			location: 'Chennai',
			participants: '500+',
			image: 'https://placehold.co/600x400',
			slug: 'hackathon',
		},
		{
			title: 'Internsmela',
			date: 'April 10, 2026',
			location: 'Campus Arena',
			participants: '1000+',
			image: 'https://placehold.co/600x400',
			slug: 'internsmela',
		},
		{
			title: 'Startup Connect',
			date: 'May 5, 2026',
			location: 'Innovation Hub',
			participants: '50+ Startups',
			image: 'https://placehold.co/600x400',
			slug: 'startup-connect',
		},
		{
			title: 'AI Workshop',
			date: 'June 12, 2026',
			location: 'AI Lab',
			participants: '300+',
			image: 'https://placehold.co/600x400',
			slug: 'ai-workshop',
		},
		{
			title: 'Web Dev Bootcamp',
			date: 'July 3, 2026',
			location: 'Seminar Hall',
			participants: '400+',
			image: 'https://placehold.co/600x400',
			slug: 'web-dev-bootcamp',
		},
		{
			title: 'Designathon',
			date: 'August 8, 2026',
			location: 'Design Studio',
			participants: '250+',
			image: 'https://placehold.co/600x400',
			slug: 'designathon',
		},
	];

	return (
		<div className="bg-background text-foreground">
			<section className="py-8">
				<div className="max-w-6xl mx-auto px-6">
					<div className="mb-8">
						<h1 className="text-3xl font-bold mb-3">Events</h1>
						<p className="text-muted-foreground max-w-2xl">
							Discover upcoming technical, entrepreneurial, and community-driven events organized by
							M-Apps Club at Sairam Institutions.
						</p>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{events.map((event, index) => (
							<div
								key={index}
								className="border rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-md transition flex flex-col"
							>
								<div className="relative w-full h-48">
									<Image
										src={event.image}
										alt={event.title}
										fill
										unoptimized
										className="object-cover"
									/>
								</div>

								<div className="p-5 flex flex-col flex-1">
									<h2 className="text-lg font-semibold mb-4">{event.title}</h2>

									<div className="space-y-2 text-sm text-muted-foreground mb-5">
										<div className="flex items-center gap-2">
											<Calendar size={15} />
											<span>{event.date}</span>
										</div>

										<div className="flex items-center gap-2">
											<MapPin size={15} />
											<span>{event.location}</span>
										</div>

										<div className="flex items-center gap-2">
											<Users size={15} />
											<span>{event.participants}</span>
										</div>
									</div>

									<div className="mt-auto flex gap-3">
										<Button className="flex-1">Register</Button>

										<Button asChild variant="outline" className="flex-1">
											<Link href={`/events/${event.slug}`}>See Details</Link>
										</Button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
