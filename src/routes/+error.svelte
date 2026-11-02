<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '#lib';
</script>

<svelte:head>
	<title>{page.status} — Achmad Zulfikri Portofolio</title>
</svelte:head>

<div class="mx-auto flex min-h-[65vh] max-w-4xl flex-col items-center justify-center px-5 py-16">
	<div
		class="relative w-full max-w-lg border-[3px] border-border-brutal bg-surface-card shadow-brutal-xl dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark-xl"
	>
		<!-- Top decorative strip -->
		<div class="flex h-3 w-full border-b-[3px] border-border-brutal dark:border-border-brutal-dark">
			<div class="w-1/3 bg-accent-yellow"></div>
			<div class="w-1/3 bg-accent-pink"></div>
			<div class="w-1/3 bg-accent-blue"></div>
		</div>

		<div class="p-8 text-center md:p-12">
			<!-- Error Code Badge -->
			<div class="mb-4 inline-block -rotate-3 border-[3px] border-border-brutal bg-accent-pink px-4 py-1 font-mono text-xs font-bold text-white uppercase shadow-brutal-sm dark:border-border-brutal-dark">
				ERROR STATUS
			</div>

			<div
				class="font-mono text-7xl font-extrabold tracking-tighter text-brand-500 md:text-8xl"
			>
				{page.status}
			</div>

			<!-- Decorative Divider -->
			<div
				class="mx-auto my-6 h-1 w-20 bg-accent-yellow border-2 border-border-brutal dark:border-border-brutal-dark"
			></div>

			<!-- Message -->
			<h1 class="font-sans text-2xl font-bold text-ink md:text-3xl dark:text-ink-inverted">
				{#if page.status === 404}
					<span class="text-highlight">Halaman Tidak Ditemukan</span>
				{:else}
					Terjadi Kesalahan
				{/if}
			</h1>

			<p class="mt-3 text-sm leading-relaxed text-ink-muted dark:text-ink-dark-muted">
				{#if page.error?.message}
					{page.error.message}
				{:else if page.status === 404}
					Halaman atau tautan yang kamu cari tidak ada atau mungkin sudah dipindahkan.
				{:else}
					Sesuatu yang tidak terduga terjadi. Coba kembali ke beranda.
				{/if}
			</p>

			<!-- Action -->
			<div class="mt-8 flex flex-wrap justify-center gap-4">
				<Button variant="primary" size="lg" href="/">← Kembali ke Beranda</Button>
			</div>

			<!-- Fun terminal hint -->
			<div class="mt-8 inline-block border-2 border-border-brutal bg-surface-muted px-3 py-1 font-mono text-xs text-ink dark:border-border-brutal-dark dark:bg-surface-dark-muted dark:text-ink-inverted">
				<span class="text-brand-500">$</span> 404_not_found.sh
			</div>
		</div>
	</div>
</div>
