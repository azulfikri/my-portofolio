<script lang="ts">
	import { projects } from '#lib';

	const currentYear = new Date().getFullYear();

	function scrollToTop() {
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	const navLinks = [
		{ href: '/', label: 'Beranda' },
		{ href: '/#about', label: 'Tentang Saya' },
		{ href: '/#projects', label: 'Proyek Saya' },
		{ href: '/#experience', label: 'Pengalaman & Pendidikan' },
		{ href: '/#publications', label: 'Publikasi Ilmiah' },
		{ href: '/#contact', label: 'Hubungi Saya' }
	];

	const socials = [
		{
			name: 'GitHub',
			href: 'https://github.com/azulfikri',
			tag: '@azulfikri',
			color: 'hover:bg-accent-yellow hover:text-ink'
		},
		{
			name: 'Google Scholar',
			href: 'https://scholar.google.co.id/citations?user=f95HcAoAAAAJ&hl=id',
			tag: '161 Sitasi',
			color: 'hover:bg-accent-green hover:text-white'
		},
		{
			name: 'LinkedIn',
			href: 'https://linkedin.com/in/achmadzulfikri',
			tag: '/in/achmadzulfikri',
			color: 'hover:bg-accent-blue hover:text-white'
		},
		{
			name: 'Email',
			href: 'mailto:achamadzulfikri20@gmail.com',
			tag: 'achamadzulfikri20@gmail.com',
			color: 'hover:bg-accent-pink hover:text-white'
		},
		{
			name: 'WhatsApp',
			href: 'https://wa.me/6285233418643',
			tag: '+62 852-3341-8643',
			color: 'hover:bg-accent-green hover:text-white'
		}
	];
</script>

<footer
	class="mt-20 border-t-4 border-border-brutal bg-[#12131f] text-slate-100 dark:border-border-brutal-dark dark:bg-[#0a0b12]"
>
	<!-- ══════════════════════════════════════════
	     1. TICKER / MARQUEE RIBBON
	     ══════════════════════════════════════════ -->
	<div
		class="overflow-hidden border-b-[3px] border-border-brutal bg-accent-yellow py-2.5 font-mono text-xs font-black tracking-widest text-ink uppercase dark:border-border-brutal-dark"
	>
		<div class="flex select-none whitespace-nowrap">
			<div
				class="flex shrink-0 items-center gap-6 motion-safe:animate-[marquee_25s_linear_infinite]"
			>
				<span>⚡ TERSEDIA UNTUK KERJA</span>
				<span>✦</span>
				<span>ACHMAD ZULFIKRI</span>
				<span>✦</span>
				<span>FULLSTACK &amp; WEB DEVELOPER</span>
				<span>✦</span>
				<span>COMPUTER VISION (YOLOV8)</span>
				<span>✦</span>
				<span>INTERNET OF THINGS (IOT)</span>
				<span>✦</span>
			</div>
			<div
				class="flex shrink-0 items-center gap-6 motion-safe:animate-[marquee_25s_linear_infinite]"
				aria-hidden="true"
			>
				<span>⚡ TERSEDIA UNTUK KERJA</span>
				<span>✦</span>
				<span>ACHMAD ZULFIKRI</span>
				<span>✦</span>
				<span>FULLSTACK &amp; WEB DEVELOPER</span>
				<span>✦</span>
				<span>COMPUTER VISION (YOLOV8)</span>
				<span>✦</span>
				<span>INTERNET OF THINGS (IOT)</span>
				<span>✦</span>
			</div>
		</div>
	</div>

	<!-- ══════════════════════════════════════════
	     2. MEGA FOOTER MAIN GRID
	     ══════════════════════════════════════════ -->
	<div class="mx-auto max-w-6xl px-5 py-12 md:py-16">
		<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
			<!-- Col 1: Brand & Bio (4 cols) -->
			<div class="space-y-4 lg:col-span-4">
				<div class="inline-block">
					<a
						href="/"
						class="font-mono text-2xl font-extrabold tracking-tight text-white transition-colors hover:text-accent-yellow"
					>
						&lt;Achmad Zulfikri /&gt;
					</a>
					<div class="mt-1 h-1 w-full bg-accent-yellow"></div>
				</div>

				<p class="text-sm leading-relaxed text-slate-300">
					Portofolio teknis rekayasa perangkat lunak — memadukan aplikasi web modern yang responsif,
					model Computer Vision berbasis YOLOv8, dan integrasi hardware IoT siap pakai di lapangan.
				</p>

				<!-- Status Card -->
				<div
					class="border-[3px] border-border-brutal bg-[#1c1e30] p-3.5 shadow-brutal-sm dark:border-border-brutal-dark dark:bg-[#161826]"
				>
					<div class="flex items-center gap-2">
						<span class="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-accent-green"></span>
						<span class="font-mono text-xs font-bold uppercase text-white">
							Open to Work
						</span>
					</div>
					<p class="mt-1 text-xs text-slate-400">
						Siap untuk posisi Junior/Fullstack Developer, magang lanjutan, atau proyek freelance.
					</p>
				</div>
			</div>

			<!-- Col 2: Navigation Links (2 cols) -->
			<div class="space-y-4 lg:col-span-2">
				<span
					class="inline-block border-2 border-border-brutal bg-accent-pink px-2.5 py-1 font-mono text-xs font-bold text-white uppercase shadow-brutal-sm dark:border-border-brutal-dark"
				>
					NAVIGASI
				</span>
				<ul class="space-y-2.5 font-mono text-sm">
					{#each navLinks as link (link.href)}
						<li>
							<a
								href={link.href}
								class="group inline-flex items-center gap-1.5 text-slate-300 transition-all hover:translate-x-1 hover:text-accent-yellow"
							>
								<span
									class="text-xs text-accent-yellow opacity-0 transition-opacity group-hover:opacity-100"
									>▸</span
								>
								<span>{link.label}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Col 3: Case Studies / Projects (3 cols) -->
			<div class="space-y-4 lg:col-span-3">
				<span
					class="inline-block border-2 border-border-brutal bg-accent-blue px-2.5 py-1 font-mono text-xs font-bold text-white uppercase shadow-brutal-sm dark:border-border-brutal-dark"
				>
					STUDI KASUS
				</span>
				<ul class="space-y-3 text-sm">
					{#each projects as project (project.slug)}
						<li>
							<a
								href="/projects/{project.slug}"
								class="group block transition-all hover:translate-x-1"
							>
								<div class="font-sans font-bold text-slate-100 group-hover:text-accent-yellow">
									{project.title}
								</div>
								<div class="font-mono text-xs text-slate-400">
									{project.year} • {project.tags[0]?.toUpperCase()}
								</div>
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Col 4: Connect & Direct Contact (3 cols) -->
			<div class="space-y-4 lg:col-span-3">
				<span
					class="inline-block border-2 border-border-brutal bg-accent-purple px-2.5 py-1 font-mono text-xs font-bold text-white uppercase shadow-brutal-sm dark:border-border-brutal-dark"
				>
					HUBUNGI
				</span>

				<p class="text-xs leading-relaxed text-slate-300">
					Punya peluang kerja atau tawaran kolaborasi? Silakan hubungi saya di saluran berikut:
				</p>

				<div class="space-y-2">
					{#each socials as social (social.name)}
						<a
							href={social.href}
							target={social.href.startsWith('mailto') ? undefined : '_blank'}
							rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
							class="group flex items-center justify-between border-2 border-border-brutal bg-[#1c1e30] px-3 py-2 font-mono text-xs font-bold text-slate-100 shadow-brutal-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brutal {social.color} dark:border-border-brutal-dark dark:bg-[#161826]"
						>
							<span class="truncate">{social.name}</span>
							<span
								class="ml-2 shrink-0 font-mono text-[10px] text-slate-400 group-hover:text-inherit"
							>
								{social.tag} ↗
							</span>
						</a>
					{/each}
				</div>

				<div class="border-t-2 border-slate-700/60 pt-3">
					<a
						href="mailto:achamadzulfikri20@gmail.com"
						class="block border-2 border-border-brutal bg-brand-500 py-2.5 text-center font-mono text-xs font-bold text-white uppercase shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 active:shadow-none dark:border-border-brutal-dark"
					>
						✉️ Kirim Email Cepat
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- ══════════════════════════════════════════
	     3. BOTTOM BAR (COPYRIGHT & BACK TO TOP)
	     ══════════════════════════════════════════ -->
	<div
		class="border-t-[3px] border-border-brutal bg-[#0b0c14] px-5 py-6 dark:border-border-brutal-dark dark:bg-[#06070a]"
	>
		<div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
			<div class="text-center sm:text-left">
				<p class="font-mono text-xs font-bold text-slate-200">
					&copy; {currentYear} Achmad Zulfikri. All Rights Reserved.
				</p>
				<p class="mt-0.5 font-mono text-[11px] text-slate-400">
					Dirancang dengan prinsip Neo-brutalism.
				</p>
			</div>

			<!-- Back to top button -->
			<button
				onclick={scrollToTop}
				class="inline-flex cursor-pointer items-center gap-2 border-2 border-border-brutal bg-[#1c1e30] px-3.5 py-1.5 font-mono text-xs font-bold text-white uppercase shadow-brutal-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-yellow hover:text-ink hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 active:shadow-none dark:border-border-brutal-dark dark:bg-[#161826]"
				aria-label="Kembali ke atas halaman"
			>
				<span>Ke Atas</span>
				<span class="font-bold">↑</span>
			</button>
		</div>
	</div>
</footer>
