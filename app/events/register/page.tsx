'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { PlusIcon } from 'lucide-react';

export default function HackathonRegistration() {
	const [formData, setFormData] = useState({
		name: '',
		college: '',
		department: '',
	});

	const [teamMembers, setTeamMembers] = useState([{ name: '', email: '' }]);

	const handleChange = (field: string, value: string) => {
		setFormData({ ...formData, [field]: value });
	};

	const addMember = () => {
		if (teamMembers.length < 3) {
			setTeamMembers([...teamMembers, { name: '', email: '' }]);
		}
	};

	const updateMember = (index: number, field: string, value: string) => {
		const updated = [...teamMembers];
		updated[index][field as 'name' | 'email'] = value;
		setTeamMembers(updated);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const finalData = {
			...formData,
			teamMembers,
		};

		console.log(JSON.stringify(finalData, null, 2));
	};

	return (
		<div className="pt-14 bg-muted px-4 h-screen">
			<div className="max-w-2xl mx-auto ">
				<Card className="rounded-xl shadow-md ">
					<CardHeader className="pb-4">
						<CardTitle className="text-2xl">Hackathon Registration</CardTitle>
						<CardDescription>Maximum 3 team members</CardDescription>
					</CardHeader>

					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="space-y-4">
								<div className="grid gap-4 sm:grid-cols-2">
									<div className="space-y-1.5">
										<Label htmlFor="name">Full Name</Label>
										<Input
											className="bg-muted"
											id="name"
											value={formData.name}
											onChange={(e) => handleChange('name', e.target.value)}
										/>
									</div>

									<div className="space-y-1.5">
										<Label htmlFor="department">Department</Label>
										<Input
											className="bg-muted"
											id="department"
											value={formData.department}
											onChange={(e) => handleChange('department', e.target.value)}
										/>
									</div>
								</div>

								<div className="space-y-1.5">
									<Label htmlFor="college">College</Label>
									<Input
										className="bg-muted"
										id="college"
										value={formData.college}
										onChange={(e) => handleChange('college', e.target.value)}
									/>
								</div>
							</div>

							<Separator />

							<div className="space-y-4">
								<h3 className="text-base font-semibold">Team Members</h3>

								{teamMembers.map((member, index) => (
									<div key={index} className="grid gap-4 sm:grid-cols-2">
										<div className="space-y-1.5">
											<Label>Member {index + 1} Name</Label>
											<Input
												className="bg-muted"
												value={member.name}
												onChange={(e) => updateMember(index, 'name', e.target.value)}
											/>
										</div>

										<div className="space-y-1.5">
											<Label>Member {index + 1} Email</Label>
											<Input
												className="bg-muted"
												type="email"
												value={member.email}
												onChange={(e) => updateMember(index, 'email', e.target.value)}
											/>
										</div>
									</div>
								))}

								{teamMembers.length < 3 && (
									<Button type="button" variant="outline" onClick={addMember} className="w-full">
										<PlusIcon />
										Add Member
									</Button>
								)}
							</div>

							<Button type="submit" className="w-full">
								Submit Registration
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
