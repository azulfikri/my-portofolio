<script lang="ts">
	import type { PageProps } from './$types';
	import { Tag, Button } from '#lib';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.project.title} — Achmad Zulfikri Portofolio</title>
	<meta name="description" content={data.project.summary} />
	<meta name="author" content="Achmad Zulfikri" />
	<!-- Open Graph / WhatsApp / LinkedIn -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{data.project.title} — Achmad Zulfikri Portofolio" />
	<meta property="og:description" content={data.project.summary} />
	{#if data.project.images.length > 0}
		<meta property="og:image" content={data.project.images[0].src} />
		<meta name="twitter:image" content={data.project.images[0].src} />
	{/if}
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{data.project.title} — Achmad Zulfikri Portofolio" />
	<meta name="twitter:description" content={data.project.summary} />
</svelte:head>

<div class="mx-auto max-w-4xl px-5 py-10 md:py-14">
	<!-- Back link -->
	<a
		href="/"
		class="inline-flex items-center gap-2 border-[3px] border-border-brutal bg-surface-card px-4 py-2 font-mono text-xs font-bold text-ink uppercase shadow-brutal-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brutal active:translate-x-0.75 active:translate-y-0.75 active:shadow-none dark:border-border-brutal-dark dark:bg-surface-dark-card dark:text-ink-inverted dark:shadow-brutal-dark-sm dark:hover:shadow-brutal-dark"
	>
		<span>←</span> Kembali ke Beranda
	</a>

	<!-- Main Article Card -->
	<article
		class="relative mt-8 border-[3px] border-border-brutal bg-surface-card shadow-brutal-xl dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark-xl"
	>
		<!-- Top decorative strip -->
		<div class="flex h-3 w-full border-b-[3px] border-border-brutal dark:border-border-brutal-dark">
			<div class="w-1/3 bg-accent-yellow"></div>
			<div class="w-1/3 bg-accent-pink"></div>
			<div class="w-1/3 bg-accent-blue"></div>
		</div>

		<div class="p-6 md:p-10">
			<!-- ── Header ── -->
			<header class="mb-8 border-b-[3px] border-border-brutal pb-8 dark:border-border-brutal-dark">
				<div class="flex flex-wrap items-center justify-between gap-3">
					<span
						class="inline-block border-2 border-border-brutal bg-accent-yellow px-3 py-1 font-mono text-xs font-bold uppercase shadow-brutal-sm dark:border-border-brutal-dark dark:shadow-brutal-dark-sm"
					>
						// STUDI KASUS PROYEK
					</span>
					<span
						class="border-2 border-border-brutal bg-accent-yellow-light px-3 py-1 font-mono text-xs font-bold text-ink dark:border-border-brutal-dark dark:bg-surface-dark-muted dark:text-ink-inverted"
					>
						TAHUN {data.project.year}
					</span>
				</div>

				<h1
					class="mt-4 font-sans text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl dark:text-ink-inverted"
				>
					<span class="text-highlight">{data.project.title}</span>
				</h1>

				<div class="mt-3 inline-flex items-center gap-2 border-2 border-border-brutal bg-surface-muted px-3 py-1.5 font-mono text-xs font-bold text-ink dark:border-border-brutal-dark dark:bg-surface-dark-muted dark:text-ink-inverted">
					<span class="text-brand-600 dark:text-brand-400">PERAN:</span>
					<span>{data.project.role}</span>
				</div>

				<div class="mt-6 flex flex-wrap gap-2">
					{#each data.project.stack as tech (tech)}
						<Tag label={tech} />
					{/each}
				</div>
			</header>

			<!-- ── Hero Image ── -->
			{#if data.project.images.length > 0}
				{#if data.project.platform === 'mobile'}
					<!-- Mobile Presentation: Centered phone mockup frame (never oversized) -->
					<div
						class="mb-10 flex flex-col items-center justify-center border-[3px] border-border-brutal bg-surface-muted p-6 shadow-brutal sm:p-10 dark:border-border-brutal-dark dark:bg-surface-dark-muted dark:shadow-brutal-dark"
					>
						<div
							class="max-w-67.5 sm:max-w-77.5 overflow-hidden rounded-2xl border-[3px] border-border-brutal shadow-brutal-lg transition-transform duration-300 hover:scale-[1.02] dark:border-border-brutal-dark"
						>
							<img
								src={data.project.images[0].src}
								alt={data.project.images[0].alt}
								class="h-auto w-full object-contain"
								loading="eager"
								decoding="async"
							/>
						</div>
						<div class="mt-4 flex items-center gap-2 font-mono text-xs font-bold text-ink-muted uppercase dark:text-ink-dark-muted">
							<span>📱 Tampilan Antarmuka Aplikasi Mobile</span>
						</div>
					</div>
				{:else}
					<!-- Web Presentation: Full-width responsive banner -->
					<div
						class="mb-10 overflow-hidden border-[3px] border-border-brutal bg-surface-muted shadow-brutal dark:border-border-brutal-dark dark:bg-surface-dark-muted dark:shadow-brutal-dark"
					>
						<img
							src={data.project.images[0].src}
							alt={data.project.images[0].alt}
							class="w-full object-cover"
							loading="eager"
							decoding="async"
						/>
					</div>
				{/if}
			{/if}

			<!-- ── Content Sections ── -->
			<div class="space-y-8 text-ink dark:text-ink-inverted">
				<!-- Masalah -->
				<section class="border-[3px] border-border-brutal bg-accent-pink-light/30 p-5 shadow-brutal-sm dark:border-border-brutal-dark dark:bg-accent-pink/10 dark:shadow-brutal-dark-sm">
					<div class="flex items-center gap-2">
						<span class="inline-block border-2 border-border-brutal bg-accent-pink px-2.5 py-0.5 font-mono text-xs font-bold text-white uppercase dark:border-border-brutal-dark">
							01
						</span>
						<h2 class="font-sans text-xl font-bold text-ink dark:text-ink-inverted">
							Masalah yang Dihadapi
						</h2>
					</div>
					<p class="mt-3 leading-relaxed text-ink md:text-base dark:text-ink-inverted">
						{data.project.problem}
					</p>
				</section>

				<!-- Solusi -->
				<section class="border-[3px] border-border-brutal bg-accent-blue-light/30 p-5 shadow-brutal-sm dark:border-border-brutal-dark dark:bg-accent-blue/10 dark:shadow-brutal-dark-sm">
					<div class="flex items-center gap-2">
						<span class="inline-block border-2 border-border-brutal bg-accent-blue px-2.5 py-0.5 font-mono text-xs font-bold text-white uppercase dark:border-border-brutal-dark">
							02
						</span>
						<h2 class="font-sans text-xl font-bold text-ink dark:text-ink-inverted">
							Solusi & Arsitektur
						</h2>
					</div>
					<p class="mt-3 leading-relaxed text-ink md:text-base dark:text-ink-inverted">
						{data.project.solution}
					</p>
				</section>

				<!-- Peran Saya -->
				<section class="border-[3px] border-border-brutal bg-accent-purple-light/30 p-5 shadow-brutal-sm dark:border-border-brutal-dark dark:bg-accent-purple/10 dark:shadow-brutal-dark-sm">
					<div class="flex items-center gap-2">
						<span class="inline-block border-2 border-border-brutal bg-accent-purple px-2.5 py-0.5 font-mono text-xs font-bold text-white uppercase dark:border-border-brutal-dark">
							03
						</span>
						<h2 class="font-sans text-xl font-bold text-ink dark:text-ink-inverted">
							Peran & Tanggung Jawab
						</h2>
					</div>
					<p class="mt-3 leading-relaxed text-ink md:text-base dark:text-ink-inverted">
						{data.project.role}
					</p>
				</section>

				<!-- Hasil -->
				{#if data.project.results}
					<section class="border-[3px] border-border-brutal bg-accent-green-light/40 p-5 shadow-brutal-sm dark:border-border-brutal-dark dark:bg-accent-green/10 dark:shadow-brutal-dark-sm">
						<div class="flex items-center gap-2">
							<span class="inline-block border-2 border-border-brutal bg-accent-green px-2.5 py-0.5 font-mono text-xs font-bold text-white uppercase dark:border-border-brutal-dark">
								04
							</span>
							<h2 class="font-sans text-xl font-bold text-ink dark:text-ink-inverted">
								Hasil yang Terukur
							</h2>
						</div>
						<p class="mt-3 font-mono text-sm leading-relaxed text-ink md:text-base dark:text-ink-inverted">
							✓ {data.project.results}
						</p>
					</section>
				{/if}

				<!-- Teknologi -->
				<section class="border-[3px] border-border-brutal bg-surface-card p-5 shadow-brutal-sm dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark-sm">
					<h2 class="font-mono text-xs font-bold tracking-widest text-brand-600 uppercase dark:text-brand-400">
						// STACK TEKNOLOGI YANG DIGUNAKAN
					</h2>
					<div class="mt-4 flex flex-wrap gap-2">
						{#each data.project.stack as tech (tech)}
							<Tag label={tech} />
						{/each}
					</div>
				</section>

				<!-- Galeri -->
				{#if data.project.images.length > 1}
					<section class="border-[3px] border-border-brutal bg-surface-card p-5 shadow-brutal-sm dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark-sm">
						<h2 class="font-mono text-xs font-bold tracking-widest text-brand-600 uppercase dark:text-brand-400">
							// GALERI PROYEK
						</h2>
						<div class="mt-4 grid gap-4 sm:grid-cols-2">
							{#each data.project.images.slice(1) as image (image.src)}
								<div
									class="flex justify-center overflow-hidden border-[3px] border-border-brutal bg-surface-muted p-3 shadow-brutal-sm dark:border-border-brutal-dark dark:bg-surface-dark-muted dark:shadow-brutal-dark-sm"
								>
									<img
										src={image.src}
										alt={image.alt}
										class="{data.project.platform === 'mobile' ? 'max-h-80 w-auto rounded-lg object-contain' : 'w-full object-cover'} transition-transform duration-300 hover:scale-105"
										loading="lazy"
										decoding="async"
									/>
								</div>
							{/each}
						</div>
					</section>
				{/if}

				<!-- Action Buttons -->
				{#if data.project.links.demo || data.project.links.repo || data.project.links.repoFrontend || data.project.links.repoBackend}
					<div
						class="flex flex-wrap items-center gap-4 border-t-[3px] border-border-brutal pt-6 dark:border-border-brutal-dark"
					>
						{#if data.project.links.demo}
							<Button variant="primary" size="lg" href={data.project.links.demo} external>
								🚀 Buka Demo Langsung ↗
							</Button>
						{/if}
						{#if data.project.links.repo}
							<Button variant="secondary" size="lg" href={data.project.links.repo} external>
								📦 Lihat Kode Repo ↗
							</Button>
						{/if}
						{#if data.project.links.repoFrontend}
							<Button variant="secondary" size="lg" href={data.project.links.repoFrontend} external>
								📦 Repo Frontend ↗
							</Button>
						{/if}
						{#if data.project.links.repoBackend}
							<Button variant="secondary" size="lg" href={data.project.links.repoBackend} external>
								📦 Repo Backend ↗
							</Button>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</article>

	<!-- ── Prev / Next Navigation ── -->
	<nav
		class="mt-10 grid gap-4 sm:grid-cols-2"
		aria-label="Navigasi proyek"
	>
		{#if data.prev}
			<a
				href="/projects/{data.prev.slug}"
				class="group flex items-center gap-4 border-[3px] border-border-brutal bg-surface-card p-4 shadow-brutal transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brutal-lg active:translate-x-0.75 active:translate-y-0.75 active:shadow-none dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark dark:hover:shadow-brutal-dark-lg"
			>
				<span
					class="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-border-brutal bg-accent-yellow font-mono text-xl font-bold text-ink shadow-brutal-sm transition-transform duration-200 group-hover:-translate-x-1 dark:border-border-brutal-dark dark:shadow-brutal-dark-sm"
				>
					←
				</span>
				<div class="min-w-0">
					<span
						class="font-mono text-xs font-bold tracking-wider text-ink-muted uppercase dark:text-ink-dark-muted"
					>
						Sebelumnya
					</span>
					<p
						class="truncate font-sans text-base font-bold text-ink group-hover:text-brand-600 dark:text-ink-inverted dark:group-hover:text-brand-400"
					>
						{data.prev.title}
					</p>
				</div>
			</a>
		{:else}
			<div></div>
		{/if}

		{#if data.next}
			<a
				href="/projects/{data.next.slug}"
				class="group flex items-center justify-end gap-4 border-[3px] border-border-brutal bg-surface-card p-4 text-right shadow-brutal transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brutal-lg active:translate-x-0.75 active:translate-y-0.75 active:shadow-none dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark dark:hover:shadow-brutal-dark-lg"
			>
				<div class="min-w-0">
					<span
						class="font-mono text-xs font-bold tracking-wider text-ink-muted uppercase dark:text-ink-dark-muted"
					>
						Berikutnya
					</span>
					<p
						class="truncate font-sans text-base font-bold text-ink group-hover:text-brand-600 dark:text-ink-inverted dark:group-hover:text-brand-400"
					>
						{data.next.title}
					</p>
				</div>
				<span
					class="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-border-brutal bg-accent-yellow font-mono text-xl font-bold text-ink shadow-brutal-sm transition-transform duration-200 group-hover:translate-x-1 dark:border-border-brutal-dark dark:shadow-brutal-dark-sm"
				>
					→
				</span>
			</a>
		{/if}
	</nav>
</div>
