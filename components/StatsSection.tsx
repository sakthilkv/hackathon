'use client';

import { useEffect, useState } from 'react';
import { Rocket, Building2, GraduationCap, UserPlus, Flame } from 'lucide-react';

function Counter({
	end,
	duration = 2000,
	suffix = '',
}: {
	end: number;
	duration?: number;
	suffix?: string;
}) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let start = 0;
		const increment = end / (duration / 16);

		const counter = setInterval(() => {
			start += increment;
			if (start >= end) {
				setCount(end);
				clearInterval(counter);
			} else {
				setCount(Math.floor(start));
			}
		}, 16);

		return () => clearInterval(counter);
	}, [end, duration]);

	return (
		<span className="text-4xl font-extrabold text-orange-500">
			{count}
			{suffix}
		</span>
	);
}

export default function StatsSection() {
	const stats = [
		{ icon: Rocket, value: 30, label: 'Startups Built' },
		{ icon: Building2, value: 50, label: 'Partner Companies' },
		{ icon: GraduationCap, value: 120, label: 'Internships Offered' },
		{ icon: UserPlus, value: 800, label: 'Registrations' },
		{ icon: Flame, value: 25, label: 'Events Hosted' },
	];

	return (
		<section className="bg-white py-20">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mb-14 text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Impact So Far</h2>
					<p className="mt-4 text-muted-foreground">
						Fueling innovation and empowering builders across campuses.
					</p>
				</div>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
					{stats.map((stat, index) => {
						const Icon = stat.icon;
						return (
							<div
								key={index}
								className="rounded-2xl border p-8 text-center shadow-sm transition hover:shadow-md"
							>
								<div className="mb-4 flex justify-center">
									<div className="rounded-full bg-orange-100 p-3">
										<Icon className="h-6 w-6 text-orange-500" />
									</div>
								</div>

								<Counter end={stat.value} suffix="+" />

								<p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
