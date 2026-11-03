/** Image entry with alt text for accessibility */
export interface ProjectImage {
	src: string;
	alt: string;
}

/** Optional external links */
export interface ProjectLinks {
	demo?: string;
	repo?: string;
	repoFrontend?: string;
	repoBackend?: string;
}

/** Core project data model (PRD bab 8) */
export interface Project {
	slug: string;
	title: string;
	summary: string;
	year: number;
	role: string;
	tags: string[];
	stack: string[];
	problem: string;
	solution: string;
	results: string;
	links: ProjectLinks;
	images: ProjectImage[];
	featured: boolean;
	platform?: 'mobile' | 'web';
}
