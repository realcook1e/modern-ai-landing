export interface NavItem {
	id: string;
	title: string;
	url: string;
	onlyMobile?: boolean;
}

export interface RoadmapItem {
	id: string;
	title: string;
	text: string;
	date: string;
	status: "done" | "progress";
	imageUrl: string;
	colorful?: boolean;
}

export interface CollabItem {
	id: string;
	title: string;
	text?: string;
}

export interface CollabApp {
	id: string;
	title: string;
	icon: string;
	width: number;
	height: number;
}

export interface PricingItem {
	id: string;
	title: string;
	description: string;
	price: string | null;
	features: string[];
}

export interface BenefitItem {
	id: string;
	title: string;
	text: string;
	backgroundUrl: string;
	iconUrl: string;
	imageUrl: string;
	light?: boolean;
}

export interface SocialItem extends Omit<NavItem, "onlyMobile"> {
	iconUrl: string;
}
