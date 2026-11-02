<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';

	let mobileMenuOpen = $state(false);

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}

	const navLinks = [
		{ href: '/#about', label: 'Tentang' },
		{ href: '/#projects', label: 'Proyek' },
		{ href: '/#experience', label: 'Pengalaman' },
		{ href: '/#publications', label: 'Publikasi' },
		{ href: '/#contact', label: 'Kontak' }
	];
</script>

<header
	class="sticky top-0 z-50 border-b-[3px] border-border-brutal bg-surface-light/95 backdrop-blur-sm dark:border-border-brutal-dark dark:bg-surface-dark/95"
>
	<nav class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
		<!-- Logo -->
		<a
			href="/"
			class="font-mono text-lg sm:text-xl font-bold text-ink transition-colors hover:text-brand-600 dark:text-ink-inverted dark:hover:text-brand-400"
		>
			&lt;Achmad Zulfikri /&gt;
		</a>

		<!-- Desktop nav -->
		<ul class="hidden items-center gap-8 md:flex">
			{#each navLinks as link (link.href)}
				<li>
					<a
						href={link.href}
						class="font-semibold text-ink transition-colors hover:text-brand-600 dark:text-ink-inverted dark:hover:text-brand-400"
					>
						{link.label}
					</a>
				</li>
			{/each}
			<li>
				<ThemeToggle />
			</li>
		</ul>

		<!-- Mobile: theme toggle + hamburger -->
		<div class="flex items-center gap-3 md:hidden">
			<ThemeToggle />
			<button
				class="flex cursor-pointer flex-col gap-1.5 p-1"
				onclick={toggleMenu}
				aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
				aria-expanded={mobileMenuOpen}
			>
				<span
					class="block h-0.75 w-6 bg-ink transition-all duration-300 dark:bg-ink-inverted {mobileMenuOpen
						? 'translate-y-2.25 rotate-45'
						: ''}"
				></span>
				<span
					class="block h-0.75 w-6 bg-ink transition-all duration-300 dark:bg-ink-inverted {mobileMenuOpen
						? 'opacity-0'
						: ''}"
				></span>
				<span
					class="block h-0.75 w-6 bg-ink transition-all duration-300 dark:bg-ink-inverted {mobileMenuOpen
						? '-translate-y-2.25 -rotate-45'
						: ''}"
				></span>
			</button>
		</div>
	</nav>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div
			class="border-t-[3px] border-border-brutal bg-surface-light md:hidden dark:border-border-brutal-dark dark:bg-surface-dark"
		>
			<ul class="flex flex-col px-5 py-4">
				{#each navLinks as link (link.href)}
					<li>
						<a
							href={link.href}
							class="block py-3 font-semibold text-ink transition-colors hover:text-brand-600 dark:text-ink-inverted dark:hover:text-brand-400"
							onclick={closeMenu}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</header>
