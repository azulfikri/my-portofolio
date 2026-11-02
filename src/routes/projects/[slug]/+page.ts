import { error } from '@sveltejs/kit';
import { getProjectBySlug, getAdjacentProjects, projects, type Project } from '#lib';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return projects.map((p: Project) => ({ slug: p.slug }));
};

export const load: PageLoad = ({ params }) => {
	const project = getProjectBySlug(params.slug);
	if (!project) {
		error(404, 'Proyek tidak ditemukan');
	}
	const { prev, next } = getAdjacentProjects(params.slug);
	return { project, prev, next };
};
