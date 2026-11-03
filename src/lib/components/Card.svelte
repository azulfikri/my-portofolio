<script lang="ts">
	import type { Project } from '../types';
	import Tag from './Tag.svelte';

	interface CardProps {
		project: Project;
		index?: number;
	}

	let { project, index = 0 }: CardProps = $props();

	/** Each card gets a different accent color strip — playful neo-brutalism */
	const accentColors = [
		{ bg: 'bg-accent-yellow', text: 'text-ink', shadow: 'shadow-brutal-yellow' },
		{ bg: 'bg-accent-pink', text: 'text-white', shadow: 'shadow-brutal-pink' },
		{ bg: 'bg-accent-blue', text: 'text-white', shadow: 'shadow-brutal-blue' },
		{ bg: 'bg-brand-500', text: 'text-white', shadow: 'shadow-brutal-brand' }
	];

	let accent = $derived(accentColors[index % accentColors.length]);
</script>

<a
	href="/projects/{project.slug}"
	class="group relative block border-[3px] border-border-brutal bg-surface-card shadow-brutal transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brutal-lg active:translate-x-1 active:translate-y-1 active:shadow-none dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark dark:hover:shadow-brutal-dark-lg"
>
	<!-- Colored accent strip on top -->
	<div class="h-2 w-full {accent.bg}"></div>

	<!-- Image -->
	<div
		class="relative aspect-[16/10] w-full overflow-hidden border-b-[3px] border-border-brutal bg-surface-muted dark:border-border-brutal-dark dark:bg-surface-dark-muted"
	>
		{#if project.images.length > 0}
			{#if project.platform === 'mobile'}
				<!-- Mobile presentation: full height phone mockup, perfectly centered -->
				<div class="flex h-full w-full items-center justify-center p-3 sm:p-4">
					<img
						src={project.images[0].src}
						alt={project.images[0].alt}
						class="h-full w-auto max-h-full rounded-lg border-2 border-border-brutal object-contain shadow-brutal-sm transition-transform duration-300 group-hover:scale-105 dark:border-border-brutal-dark"
						loading="lazy"
						decoding="async"
					/>
				</div>
				<span
					class="absolute top-2.5 right-2.5 border-2 border-border-brutal bg-accent-yellow px-2 py-0.5 font-mono text-[10px] font-bold text-ink uppercase shadow-brutal-sm dark:border-border-brutal-dark"
				>
					📱 Mobile App
				</span>
			{:else}
				<!-- Web presentation: full cover landscape preview -->
				<img
					src={project.images[0].src}
					alt={project.images[0].alt}
					class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					loading="lazy"
					decoding="async"
				/>
				<span
					class="absolute top-2.5 right-2.5 border-2 border-border-brutal bg-accent-blue px-2 py-0.5 font-mono text-[10px] font-bold text-white uppercase shadow-brutal-sm dark:border-border-brutal-dark"
				>
					💻 Web App
				</span>
			{/if}
		{:else}
			<div
				class="flex h-full w-full items-center justify-center font-mono text-sm text-ink-muted dark:text-ink-dark-muted"
			>
				No Preview
			</div>
		{/if}
	</div>

	<!-- Content -->
	<div class="p-5">
		<div class="mb-2 flex items-center justify-between">
			<h3
				class="font-sans text-lg font-bold text-ink transition-colors group-hover:text-brand-600 dark:text-ink-inverted dark:group-hover:text-brand-400"
			>
				{project.title}
			</h3>
			<span
				class="border-2 border-border-brutal bg-accent-yellow-light px-2 py-0.5 font-mono text-xs font-bold text-ink dark:border-border-brutal-dark dark:bg-surface-dark-muted dark:text-ink-inverted"
			>
				{project.year}
			</span>
		</div>

		<p class="mb-4 text-sm leading-relaxed text-ink-muted dark:text-ink-dark-muted">
			{project.summary}
		</p>

		<div class="flex flex-wrap items-center justify-between gap-2">
			<div class="flex flex-wrap gap-2">
				{#each project.stack.slice(0, 3) as tech (tech)}
					<Tag label={tech} />
				{/each}
				{#if project.stack.length > 3}
					<Tag label="+{project.stack.length - 3}" />
				{/if}
			</div>
			<span
				class="font-mono text-xs font-bold text-brand-600 transition-transform duration-200 group-hover:translate-x-1 dark:text-brand-400"
			>
				Baca →
			</span>
		</div>
	</div>
</a>
