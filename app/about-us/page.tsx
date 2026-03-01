'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail } from 'lucide-react';

const members = [
	{
		role: 'Mastermind',
		name: 'Kishore Kumar D',
		email: 'secl23it03@sairamtap.edu.in',
		dept: 'IT',
		org: 'SSEC',
		image: '/members/kishore.png',
	},
	{
		role: 'Advocate',
		name: 'Varshini E',
		email: 'sec22cs165@sairamtap.edu.in',
		dept: 'CSE',
		org: 'SSEC',
		image: '/members/varshini.jpeg',
	},
	{
		role: 'Advocate',
		name: 'Ezhil M',
		email: 'sec23it210@sairamtap.edu.in',
		dept: 'IT',
		org: 'SSEC',
		image: '/members/ezhil.jpeg',
	},
	{
		role: 'Guide',
		name: 'Sakthi Lakshmi Kanthan V',
		email: 'sec22it048@sairamtap.edu.in',
		dept: 'IT',
		org: 'SSEC',
		image: '/members/sakthilk-mapps.jpg',
	},
	{
		role: 'Guide',
		name: 'Sanjay K',
		email: 'sec23cs201@sairamtap.edu.in',
		dept: 'CSE',
		org: 'SSEC',
		image: '/members/siranjeevi.png',
	},
	{
		role: 'Influencer',
		name: 'Rithika S',
		email: 'sec23cs108@sairamtap.edu.in',
		dept: 'CSE',
		org: 'SSEC',
		image: '/members/rithika.jpeg',
	},
	{
		role: 'Communicator',
		name: 'Roshini G',
		email: 'sit23cs002@sairamtap.edu.in',
		dept: 'CSE',
		org: 'SSEC',
		image: '/members/roshini.jpeg',
	},
	{
		role: 'Advocate',
		name: 'Madhan R',
		email: 'sec22it175@sairamtap.edu.in',
		dept: 'IT',
		org: 'SSEC',
		image: '/members/madhan.jpeg',
	},
];

export default function AboutCommitteePage() {
	return (
		<div className="min-h-screen bg-muted/40 py-16 px-6">
			<div className="max-w-6xl mx-auto space-y-12">
				<div className="text-center space-y-3">
					<h1 className="text-3xl font-bold">Our Committee</h1>
					<p className="text-base text-muted-foreground">
						The team behind the vision and execution.
					</p>
				</div>

				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{members.map((member, index) => (
						<Card
							key={index}
							className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
						>
							<CardHeader className="flex flex-row items-center gap-4 p-6">
								<div className="relative w-20 h-20 rounded-full overflow-hidden">
									<Image src={member.image} alt={member.name} fill className="object-cover" />
								</div>

								<div className="space-y-2">
									<CardTitle className="text-base font-semibold leading-none">
										{member.name}
									</CardTitle>
									<Badge variant="secondary" className="text-xs px-3 py-1">
										{member.role}
									</Badge>
									{(member.dept || member.org) && (
										<p className="text-sm text-muted-foreground">
											{member.dept} {member.dept && member.org && '•'} {member.org}
										</p>
									)}
								</div>
							</CardHeader>

							{member.email && (
								<CardContent className="pt-0 pb-6 px-6">
									<div className="flex items-center gap-3 text-sm text-muted-foreground">
										<Mail size={16} />
										<span className="truncate">{member.email}</span>
									</div>
								</CardContent>
							)}
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
