'use client';

import Image from 'next/image';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogTrigger,
} from '@/components/ui/dialog';

type EventDetailProps = {
	title?: string;
	date?: string;
	location?: string;
	participants?: string;
	image?: string;
	description?: string;
};

export default function EventDetailTemplate({
	title = 'Hackathon',
	date = 'March 28-29, 2026',
	location = 'Chennai',
	participants = '500+ Participants',
	image = 'https://placehold.co/900x1600',
	description = 'An exciting 24-hour hackathon where developers, designers, and innovators collaborate to build impactful solutions.',
}: EventDetailProps) {
	return (
		<div className="bg-background text-foreground py-16">
			<div className="max-w-6xl mx-auto px-6">
				<div className="grid md:grid-cols-2 gap-12 items-start">
					<div className="flex justify-center md:justify-start">
						<div className="relative w-full max-w-55 sm:max-w-65 md:max-w-75 lg:max-w-85 aspect-5/7 rounded-2xl overflow-hidden border bg-muted shadow-md">
							<Image src={image} alt={title} fill unoptimized className="object-cover" />
						</div>
					</div>

					<div>
						<h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>

						<div className="space-y-3 text-muted-foreground mb-6">
							<div className="flex items-center gap-2">
								<Calendar size={16} />
								<span>{date}</span>
							</div>

							<div className="flex items-center gap-2">
								<MapPin size={16} />
								<span>{location}</span>
							</div>

							<div className="flex items-center gap-2">
								<Users size={16} />
								<span>{participants}</span>
							</div>
						</div>

						<p className="text-muted-foreground mb-8 leading-relaxed">{description}</p>

						<div className="flex gap-4">
							<Button>Register Now</Button>

							<Dialog>
								<DialogTrigger asChild>
									<Button variant="outline">More Info</Button>
								</DialogTrigger>

								<DialogContent className="sm:max-w-lg">
									<DialogHeader>
										<DialogTitle>{title} - Details</DialogTitle>
										<DialogDescription>Complete information about the event.</DialogDescription>
									</DialogHeader>

									<div className="mt-4 space-y-4 text-sm text-muted-foreground">
										<p>• Eligibility: Open to all departments</p>
										<p>• Team Size: 2–4 members</p>
										<p>• Prizes: Cash rewards & internship opportunities</p>
										<p>• Contact: mapps@sairam.edu</p>
									</div>
								</DialogContent>
							</Dialog>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
