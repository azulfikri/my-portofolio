<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

	interface ButtonProps {
		variant?: 'primary' | 'secondary' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		href?: string;
		external?: boolean;
		children: Snippet;
	}

	type Props = ButtonProps & (HTMLButtonAttributes | HTMLAnchorAttributes);

	let {
		variant = 'primary',
		size = 'md',
		href,
		external = false,
		children,
		...restProps
	}: Props = $props();

	const baseClasses =
		'inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer border-[3px] border-border-brutal active:translate-x-0.75 active:translate-y-0.75 active:shadow-none dark:border-border-brutal-dark';

	const variantClasses: Record<string, string> = {
		primary:
			'bg-brand-500 text-white shadow-brutal hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-brutal-lg dark:shadow-brutal-dark dark:hover:shadow-brutal-dark-lg',
		secondary:
			'bg-surface-card text-ink shadow-brutal hover:bg-surface-muted hover:-translate-y-0.5 hover:shadow-brutal-lg dark:bg-surface-dark-card dark:text-ink-inverted dark:shadow-brutal-dark dark:hover:bg-surface-dark-muted dark:hover:shadow-brutal-dark-lg',
		ghost:
			'border-transparent shadow-none hover:border-border-brutal hover:shadow-brutal-sm dark:text-ink-inverted dark:hover:border-border-brutal-dark dark:hover:shadow-brutal-dark-sm'
	};

	const sizeClasses: Record<string, string> = {
		sm: 'px-3 py-1.5 text-sm gap-1.5',
		md: 'px-5 py-2.5 text-base gap-2',
		lg: 'px-7 py-3.5 text-lg gap-2.5'
	};

	let classes = $derived(`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`);
</script>

{#if href}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a
		{href}
		class={classes}
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
		{...restProps as HTMLAnchorAttributes}
	>
		{@render children()}
	</a>
{:else}
	<button class={classes} {...restProps as HTMLButtonAttributes}>
		{@render children()}
	</button>
{/if}
