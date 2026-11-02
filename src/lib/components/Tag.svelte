<script lang="ts">
	interface TagProps {
		label: string;
		active?: boolean;
		clickable?: boolean;
		onclick?: () => void;
	}

	let { label, active = false, clickable = false, onclick }: TagProps = $props();
</script>

{#if clickable}
	<button
		class="inline-block cursor-pointer border-[3px] border-border-brutal px-3 py-1 font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200
			{active
			? 'bg-brand-500 text-white shadow-brutal-sm dark:shadow-brutal-dark-sm'
			: 'bg-surface-card text-ink hover:-translate-y-0.5 hover:bg-brand-100 dark:border-border-brutal-dark dark:bg-surface-dark-card dark:text-ink-inverted dark:hover:bg-surface-dark-muted'}
			active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
		{onclick}
	>
		{label}
	</button>
{:else}
	<span
		class="inline-block border-[3px] border-border-brutal bg-surface-card px-3 py-1 font-mono text-xs font-bold tracking-wider uppercase dark:border-border-brutal-dark dark:bg-surface-dark-card dark:text-ink-inverted"
	>
		{label}
	</span>
{/if}
