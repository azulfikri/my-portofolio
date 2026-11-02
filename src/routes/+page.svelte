<script lang="ts">
	import { Button, Tag, Card, projects, getAllTags } from '#lib';

	const allTags = getAllTags();

	let selectedTag = $state<string | null>(null);

	let filteredProjects = $derived.by(() => {
		const tag = selectedTag;
		return tag ? projects.filter((p) => p.tags.includes(tag)) : projects;
	});

	const skillCategories = [
		{
			title: 'Frontend & Mobile',
			skills: ['Vue.js', 'Flutter', 'Tailwind CSS', 'Bootstrap'],
			color: 'bg-accent-blue-light dark:bg-accent-blue/20',
			accent: 'text-accent-blue'
		},
		{
			title: 'Backend & Database',
			skills: ['Laravel', 'Express.js', 'FastAPI', 'Prisma', 'Supabase', 'PostgreSQL', 'MySQL'],
			color: 'bg-accent-green-light dark:bg-accent-green/20',
			accent: 'text-accent-green'
		},
		{
			title: 'AI & Computer Vision',
			skills: ['YOLOv8', 'Python', 'Roboflow'],
			color: 'bg-accent-purple-light dark:bg-accent-purple/20',
			accent: 'text-accent-purple'
		},
		{
			title: 'IoT & Otomasi',
			skills: ['ESP32', 'Arduino', 'IoT Sensors', 'Relay Automation'],
			color: 'bg-accent-yellow-light dark:bg-accent-yellow/20',
			accent: 'text-accent-yellow dark:text-accent-yellow'
		}
	];

	const statHighlights = [
		{ value: '4+', label: 'Proyek Selesai', color: 'bg-accent-yellow', rotate: '-rotate-1' },
		{ value: 'YOLOv8', label: 'AI & CV (Skripsi)', color: 'bg-accent-pink-light', rotate: 'rotate-1' },
		{ value: 'MSIB', label: 'Pengalaman Magang', color: 'bg-accent-blue-light', rotate: '-rotate-0.5' },
		{ value: '>90%', label: 'Akurasi AI (mAP50)', color: 'bg-accent-green-light', rotate: 'rotate-0.5' }
	];

	interface TimelineItem {
		type: 'Pengalaman' | 'Pendidikan';
		title: string;
		organization: string;
		location?: string;
		period: string;
		description?: string;
		points?: string[];
		badgeColor: string;
	}

	const timelineData: TimelineItem[] = [
		{
			type: 'Pendidikan',
			title: 'Sarjana Komputer (S.Kom.) — Teknik Informatika',
			organization: 'Universitas Madura',
			location: 'Pamekasan, Madura',
			period: 'Lulusan Informatika',
			badgeColor: 'bg-accent-yellow text-ink',
			points: [
				'Lulusan Program Studi Teknik Informatika dengan ketertarikan kuat pada rekayasa perangkat lunak modern.',
				'Menyelesaikan skripsi penelitian deteksi kematangan cabai rawit menggunakan YOLOv8 dengan mAP50 > 90% dan inferensi real-time.'
			]
		},
		{
			type: 'Pengalaman',
			title: 'Peserta Bootcamp Laravel',
			organization: 'Moagits Learning',
			location: 'Sleman',
			period: 'Nov – Des 2025',
			badgeColor: 'bg-accent-pink text-white',
			points: [
				'Mempelajari pengembangan aplikasi web menggunakan Laravel melalui pelatihan berbasis proyek.',
				'Mengembangkan proyek sistem pemesanan lapangan dengan fitur integrasi pembayaran, notifikasi email, dan caching basis data.',
				'Mempraktikkan pengembangan fitur backend dan pengelolaan basis data dalam aplikasi web.'
			]
		},
		{
			type: 'Pengalaman',
			title: 'Praktik Kerja: Sistem Otomasi Berbasis IoT Budidaya Jamur Tiram',
			organization: 'Cah Fungi',
			location: 'Sampang, Madura',
			period: '2025',
			badgeColor: 'bg-accent-green text-white',
			points: [
				'Merancang dan merakit sistem otomasi penyiraman menggunakan ESP32, sensor DHT22, modul relay, dan pompa air untuk mendukung pengaturan kondisi lingkungan kumbung jamur tiram.',
				'Memprogram mikrokontroler ESP32 untuk membaca data suhu dan kelembapan serta mengendalikan pompa berdasarkan kondisi lingkungan.',
				'Mengintegrasikan perangkat dengan sistem komunikasi IoT untuk pemantauan data sensor dan pengendalian penyiraman.'
			]
		},
		{
			type: 'Pengalaman',
			title: 'Program MSIB Batch 7: Studi Independen Full-Stack Specialist',
			organization: 'PT. Stechoq Robotika Indonesia (Bidang Industri 4.0 Manufaktur)',
			location: 'Yogyakarta',
			period: 'Sep 2024 – Des 2024',
			badgeColor: 'bg-accent-blue text-white',
			points: [
				'Mengembangkan antarmuka Material Supply Warehouse Management System menggunakan Vue.js dan Bootstrap.',
				'Berkontribusi dalam pengembangan REST API menggunakan Express.js, pengelolaan basis data menggunakan Prisma, serta integrasi API dengan frontend.',
				'Membantu proses debugging dan perbaikan fungsionalitas aplikasi untuk mendukung integrasi antara frontend, backend, dan basis data.',
				'Menerapkan teknologi pengembangan web seperti HTML, CSS, JavaScript, Node.js, Vue.js, Express.js, Prisma, dan Git selama program Studi Independen MSIB Batch 7.'
			]
		}
	];

	interface PublicationItem {
		title: string;
		authors: string;
		venue: string;
		year: string;
		citations: string;
		link: string;
	}

	const scholarStats = {
		citations: '161',
		hIndex: '4',
		i10Index: '4',
		profileUrl: 'https://scholar.google.co.id/citations?user=f95HcAoAAAAJ&hl=id'
	};

	const publicationsData: PublicationItem[] = [
		{
			title:
				'Analysis of phishing attack trends, impacts and prevention methods: literature study',
			authors: 'FPE Putra, U Ubaidi, A Zulfikri, G Arifin, RM Ilhamsyah',
			venue: 'Brilliance: Research of Artificial Intelligence 4 (1), 413-421, 2024',
			year: '2024',
			citations: '100',
			link: 'https://scholar.google.co.id/citations?view_op=view_citation&hl=id&user=f95HcAoAAAAJ&citation_for_view=f95HcAoAAAAJ:u-x6o8ySG0sC'
		},
		{
			title:
				'Analisis Keamanan Jaringan Dari Serangan Malware Menggunakan Filtering Firewall Dengan Port Blocking',
			authors: 'A Zulfikri, FPE Putra, MA Huda, H Hasbullah, M Mahendra, M Surur',
			venue: 'Digital Transformation Technology 3 (2), 857-863, 2023',
			year: '2023',
			citations: '31',
			link: 'https://scholar.google.co.id/citations?view_op=view_citation&hl=id&user=f95HcAoAAAAJ&citation_for_view=f95HcAoAAAAJ:u5HHmVD_uO8C'
		},
		{
			title:
				'Analysis comparative of performance optimization techniques for PHP framework testing: Laravel, CodeIgniter, Symfony',
			authors: 'FPE Putra, A Zulfikri, A Rohman, R Alim',
			venue: 'Brill. Res. Artif. Intell 5 (1), 242-248, 2025',
			year: '2025',
			citations: '18',
			link: 'https://scholar.google.co.id/citations?view_op=view_citation&hl=id&user=f95HcAoAAAAJ&citation_for_view=f95HcAoAAAAJ:d1gkVwhDpl0C'
		},
		{
			title:
				'Analysis of Phishing Attack Trends, Impacts and Prevention Methods: Literature Study (DOI Index)',
			authors: 'FPE Putra, U Ubaidi, A Zulfikri, G Arifin, RM Ilhamsyah',
			venue: 'Brilliance: Research of Artificial Intelligence, doi:10.47709/brilliance.v4i1.4357, 2024',
			year: '2024',
			citations: '12',
			link: 'https://scholar.google.co.id/citations?view_op=view_citation&hl=id&user=f95HcAoAAAAJ&citation_for_view=f95HcAoAAAAJ:9yKSN-GCB0IC'
		}
	];

	// Contact form state
	let contactName = $state('');
	let contactEmail = $state('');
	let contactMessage = $state('');
	let formSubmitted = $state(false);

	function handleContactSubmit(e: Event) {
		e.preventDefault();
		if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) return;
		const subject = encodeURIComponent(`Pesan Proyek dari ${contactName}`);
		const body = encodeURIComponent(
			`Halo Achmad Zulfikri,\n\nNama: ${contactName}\nEmail: ${contactEmail}\n\nPesan:\n${contactMessage}\n\n---\nDikirim via formulir portofolio.`
		);
		window.location.href = `mailto:achamadzulfikri20@gmail.com?subject=${subject}&body=${body}`;
		formSubmitted = true;
	}
</script>

<svelte:head>
	<title>Achmad Zulfikri — Web Portofolio & Showcase Proyek</title>
	<meta
		name="description"
		content="Web portofolio Achmad Zulfikri — Fullstack, Computer Vision & IoT Developer. Menampilkan studi kasus proyek deteksi cabai YOLOv8, warehouse management, dan monitoring kandang ayam."
	/>
</svelte:head>

<div class="mx-auto max-w-6xl px-5 py-8 md:py-16">
	<!-- ══════════════════════════════════════════
	     1. HERO SECTION
	     ══════════════════════════════════════════ -->
	<section class="relative mb-20 md:mb-28">
		<!-- Decorative floating shapes -->
		<div
			class="pointer-events-none absolute -top-4 right-8 hidden h-16 w-16 rotate-12 border-[3px] border-border-brutal bg-accent-yellow shadow-brutal-sm md:block dark:border-border-brutal-dark dark:shadow-brutal-dark-sm"
		></div>
		<div
			class="pointer-events-none absolute -bottom-6 left-12 hidden h-12 w-12 -rotate-6 rounded-full border-[3px] border-border-brutal bg-accent-pink shadow-brutal-sm md:block dark:border-border-brutal-dark dark:shadow-brutal-dark-sm"
		></div>

		<!-- Availability Badge -->
		<div
			class="brutal-sticker mb-6 inline-flex items-center gap-2.5 border-[3px] border-border-brutal bg-accent-green-light px-3.5 py-1.5 font-mono text-xs font-bold tracking-wider uppercase shadow-brutal-sm dark:border-border-brutal-dark dark:bg-accent-green/20 dark:shadow-brutal-dark-sm"
		>
			<span class="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-accent-green"></span>
			<span>Tersedia untuk Kerja / Open to Work</span>
		</div>

		<!-- Main Hero Card -->
		<div
			class="relative border-[3px] border-border-brutal bg-surface-card p-6 shadow-brutal-xl md:p-12 dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark-xl"
		>
			<!-- Colorful corner decoration -->
			<div class="absolute top-0 right-0 h-20 w-20 bg-accent-yellow dark:bg-accent-yellow/30"></div>
			<div class="absolute top-0 right-0 h-10 w-10 bg-accent-pink dark:bg-accent-pink/30"></div>

			<div class="relative grid items-center gap-10 lg:grid-cols-12">
				<!-- Left Text Column -->
				<div class="lg:col-span-7">
					<div class="mb-3">
						<span
							class="inline-block border-2 border-border-brutal bg-accent-yellow-light px-3.5 py-1.5 font-mono text-base font-extrabold tracking-wide text-ink uppercase shadow-brutal-sm sm:text-lg md:text-xl dark:border-border-brutal-dark dark:bg-accent-yellow/25 dark:text-ink-inverted"
						>
							👋 Halo, perkenalkan nama saya
						</span>
					</div>

					<h1
						class="mt-2 font-sans text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl xl:text-7xl dark:text-ink-inverted"
					>
						<span class="text-highlight">Achmad Zulfikri</span>
						<span class="text-brand-500">.</span>
					</h1>

					<p
						class="mt-3 inline-block border-b-4 border-accent-yellow pb-1 font-mono text-lg font-bold text-ink-muted sm:text-xl dark:text-ink-dark-muted"
					>
						Developer Web, Computer Vision &amp; IoT
					</p>

					<p
						class="mt-6 max-w-xl text-base leading-relaxed text-ink md:text-lg dark:text-ink-inverted"
					>
						Membangun aplikasi web yang cepat, sistem IoT yang andal, dan implementasi Computer Vision
						yang menyelesaikan masalah nyata di lapangan. Setiap proyek disajikan sebagai
						<strong class="text-brand-600 dark:text-brand-400">studi kasus</strong>
						dengan peran, tantangan, dan hasil yang terukur.
					</p>

					<!-- Action Buttons -->
					<div class="mt-8 flex flex-wrap items-center gap-4">
						<Button variant="primary" size="lg" href="#projects">Lihat Proyek ↓</Button>
						<Button variant="secondary" size="lg" href="#contact">Hubungi Saya ✉️</Button>
						<Button
							variant="secondary"
							size="lg"
							href="https://github.com/azulfikri"
							external
						>
							GitHub ↗
						</Button>
					</div>
				</div>

				<!-- Right Photo Column -->
				<div class="flex justify-center lg:col-span-5 lg:justify-end">
					<div class="relative w-full max-w-xs sm:max-w-sm">
						<!-- Offset decorative rotated box -->
						<div
							class="absolute inset-0 translate-x-3 translate-y-3 rotate-3 border-[3px] border-border-brutal bg-accent-yellow dark:border-border-brutal-dark dark:bg-accent-yellow/30"
						></div>

						<!-- Photo Window Card -->
						<div
							class="relative overflow-hidden border-[3px] border-border-brutal bg-surface-card shadow-brutal-lg transition-transform duration-300 hover:-translate-y-1 hover:rotate-1 dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark-lg"
						>
							<!-- Window Top Bar -->
							<div
								class="flex items-center justify-between border-b-[3px] border-border-brutal bg-surface-muted px-3.5 py-2 dark:border-border-brutal-dark dark:bg-surface-dark-muted"
							>
								<div class="flex items-center gap-2">
									<div class="flex gap-1.5">
										<span
											class="h-2.5 w-2.5 rounded-full border border-border-brutal bg-accent-pink dark:border-border-brutal-dark"
										></span>
										<span
											class="h-2.5 w-2.5 rounded-full border border-border-brutal bg-accent-yellow dark:border-border-brutal-dark"
										></span>
										<span
											class="h-2.5 w-2.5 rounded-full border border-border-brutal bg-accent-green dark:border-border-brutal-dark"
										></span>
									</div>
									<span class="font-mono text-xs font-bold text-ink-muted dark:text-ink-dark-muted">
										azulfikri
									</span>
								</div>
								<span
									class="font-mono text-[10px] font-bold text-brand-600 uppercase dark:text-brand-400"
								>
									LIVE
								</span>
							</div>

							<!-- Image -->
							<div class="aspect-square w-full overflow-hidden bg-surface-muted dark:bg-surface-dark-muted">
								<img
									src="/images/profile.png"
									alt="Foto Profil GitHub Achmad Zulfikri"
									class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
									loading="eager"
								/>
							</div>

							<!-- Bottom Status Ribbon on Photo -->
							<div
								class="flex items-center justify-between border-t-[3px] border-border-brutal bg-accent-yellow px-3.5 py-2 font-mono text-xs font-bold text-ink dark:border-border-brutal-dark"
							>
								<span class="truncate">✦ ACHMAD ZULFIKRI</span>
								<span class="shrink-0 font-mono text-[11px] font-bold">@azulfikri</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Quick Metric Highlights — colorful cards -->
		<div class="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
			{#each statHighlights as stat (stat.label)}
				<div
					class="border-[3px] border-border-brutal {stat.color} p-4 shadow-brutal-sm transition-transform duration-200 hover:-translate-y-0.5 {stat.rotate} dark:border-border-brutal-dark dark:shadow-brutal-dark-sm"
				>
					<div class="font-sans text-2xl font-extrabold text-ink sm:text-3xl dark:text-ink-inverted">
						{stat.value}
					</div>
					<div
						class="mt-1 font-mono text-xs font-semibold text-ink-muted uppercase dark:text-ink-dark-muted"
					>
						{stat.label}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- ══════════════════════════════════════════
	     2. TENTANG SAYA SECTION
	     ══════════════════════════════════════════ -->
	<section id="about" class="mb-20 scroll-mt-24 md:mb-28">
		<!-- Section Header (Centered) -->
		<div class="mb-10 text-center">
			<span
				class="inline-block border-[3px] border-border-brutal bg-accent-pink-light px-3 py-1 font-mono text-xs font-bold tracking-widest text-ink uppercase shadow-brutal-sm dark:border-border-brutal-dark dark:bg-accent-pink/20 dark:text-ink-inverted dark:shadow-brutal-dark-sm"
			>
				// 01. TENTANG SAYA
			</span>
			<h2
				class="mt-3 font-sans text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl dark:text-ink-inverted"
			>
				Tentang Saya
			</h2>
			<p class="mt-2 font-mono text-sm font-semibold text-ink-muted dark:text-ink-dark-muted">
				Latar belakang, fokus rekayasa perangkat lunak, &amp; keahlian teknis
			</p>
		</div>

		<div class="grid gap-8 lg:grid-cols-12">
			<!-- Bio / About Description -->
			<div
				class="relative border-[3px] border-border-brutal bg-surface-card p-6 shadow-brutal md:p-8 lg:col-span-5 dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark"
			>
				<!-- Decorative corner -->
				<div
					class="absolute -top-2 -right-2 h-8 w-8 rotate-12 border-[3px] border-border-brutal bg-accent-yellow dark:border-border-brutal-dark"
				></div>

				<h3 class="font-sans text-2xl font-bold text-ink dark:text-ink-inverted">
					Sedikit <span class="text-highlight">Cerita</span>
				</h3>

				<div
					class="mt-4 space-y-4 text-sm leading-relaxed text-ink md:text-base dark:text-ink-inverted"
				>
					<p>
						Saya adalah Pengembang Web &amp; Mobile dan Lulusan Informatika Universitas Madura dengan ketertarikan kuat pada rekayasa perangkat lunak modern,
						khususnya integrasi antara <strong class="text-accent-blue">aplikasi web &amp; mobile</strong>,
						<strong class="text-accent-purple">Computer Vision (YOLOv8 &amp; FastAPI)</strong>, dan
						<strong class="text-accent-green">perangkat IoT</strong>.
					</p>
					<p>
						Bagi saya, kode bukan sekadar baris sintaks, melainkan alat untuk memecahkan kendala
						nyata, mulai dari mempermudah petani menyortir cabai lewat integrasi YOLOv8 &amp; FastAPI,
						otomatisasi pencatatan pergudangan berskala manufaktur selama program MSIB, hingga monitoring kandang ayam petelur berbasis Flutter &amp; Supabase.
					</p>
					<p>
						Fokus utama saya saat ini adalah mendalami ekosistem Teknologi pengembangan web modern dan
						siap berkontribusi secara profesional sebagai developer.
					</p>
				</div>
			</div>

			<!-- Skills Categories Grid -->
			<div class="grid gap-4 sm:grid-cols-2 lg:col-span-7">
				{#each skillCategories as category (category.title)}
					<div
						class="border-[3px] border-border-brutal {category.color} p-5 shadow-brutal-sm transition-transform duration-200 hover:-translate-y-0.5 dark:border-border-brutal-dark dark:shadow-brutal-dark-sm"
					>
						<h4
							class="font-mono text-xs font-bold tracking-wider uppercase {category.accent}"
						>
							⬥ {category.title}
						</h4>
						<div class="mt-3 flex flex-wrap gap-2">
							{#each category.skills as skill (skill)}
								<Tag label={skill} />
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ══════════════════════════════════════════
	     3. PROYEK SAYA SECTION
	     ══════════════════════════════════════════ -->
	<section id="projects" class="mb-20 scroll-mt-24 md:mb-28">
		<!-- Section Header (Centered) -->
		<div class="mb-8 text-center">
			<span
				class="inline-block border-[3px] border-border-brutal bg-accent-yellow px-3 py-1 font-mono text-xs font-bold tracking-widest text-ink uppercase shadow-brutal-sm dark:border-border-brutal-dark dark:shadow-brutal-dark-sm"
			>
				// 02. PORTOFOLIO KARYA
			</span>
			<h2
				class="mt-3 font-sans text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl dark:text-ink-inverted"
			>
				Proyek Saya
			</h2>
			<p class="mt-2 font-mono text-sm font-semibold text-ink-muted dark:text-ink-dark-muted">
				Koleksi studi kasus rekayasa web, implementasi Computer Vision, &amp; sistem IoT
			</p>
		</div>

		<!-- Tag Filter Buttons (Centered) -->
		<div class="mb-10 flex flex-wrap items-center justify-center gap-2">
			<span
				class="font-mono text-xs font-bold tracking-wider text-ink-muted uppercase dark:text-ink-dark-muted"
			>
				Filter Tag:
			</span>
			<Tag
				label="Semua"
				active={selectedTag === null}
				clickable={true}
				onclick={() => (selectedTag = null)}
			/>
			{#each allTags as tag (tag)}
				<Tag
					label={tag}
					active={selectedTag === tag}
					clickable={true}
					onclick={() => (selectedTag = selectedTag === tag ? null : tag)}
				/>
			{/each}
		</div>

		<!-- Projects Grid: All 4 projects unified -->
		<div class="grid gap-8 md:grid-cols-2">
			{#each filteredProjects as project, i (project.slug)}
				<Card {project} index={i} />
			{/each}
		</div>

		{#if filteredProjects.length === 0}
			<div
				class="border-[3px] border-border-brutal bg-surface-card p-8 text-center shadow-brutal dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark"
			>
				<p class="font-mono text-sm text-ink-muted dark:text-ink-dark-muted">
					Tidak ada proyek dengan filter tag "{selectedTag}".
				</p>
				<button
					onclick={() => (selectedTag = null)}
					class="mt-4 cursor-pointer border-2 border-border-brutal bg-accent-yellow px-4 py-2 font-mono text-xs font-bold uppercase shadow-brutal-sm transition-all hover:shadow-brutal active:translate-x-0.5 active:translate-y-0.5 dark:border-border-brutal-dark"
				>
					Tampilkan Semua Proyek
				</button>
			</div>
		{/if}
	</section>

	<!-- ══════════════════════════════════════════
	     4. PENGALAMAN & PENDIDIKAN SECTION
	     ══════════════════════════════════════════ -->
	<section id="experience" class="mb-20 scroll-mt-24 md:mb-28">
		<!-- Section Header (Centered) -->
		<div class="mb-14 text-center">
			<span
				class="inline-block border-[3px] border-border-brutal bg-accent-blue-light px-3 py-1 font-mono text-xs font-bold tracking-widest text-ink uppercase shadow-brutal-sm dark:border-border-brutal-dark dark:bg-accent-blue/20 dark:text-ink-inverted dark:shadow-brutal-dark-sm"
			>
				// 03. PENGALAMAN &amp; PENDIDIKAN
			</span>
			<h2
				class="mt-3 font-sans text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl dark:text-ink-inverted"
			>
				Pengalaman &amp; Pendidikan
			</h2>
			<p class="mt-2 font-mono text-sm font-semibold text-ink-muted dark:text-ink-dark-muted">
				Perjalanan profesional dan latar belakang akademis saya
			</p>
		</div>

		<!-- Timeline Container -->
		<div class="relative mx-auto max-w-4xl">
			<!-- Mobile spine (left aligned) -->
			<div
				class="absolute top-0 bottom-0 left-4 w-0.75 bg-border-brutal md:hidden dark:bg-border-brutal-dark"
			></div>

			<!-- Desktop spine (centered) -->
			<div
				class="absolute top-0 bottom-0 left-1/2 hidden -translate-x-1/2 w-0.75 bg-border-brutal md:block dark:bg-border-brutal-dark"
			></div>

			<div class="space-y-10 md:space-y-12">
				{#each timelineData as item, index (item.title)}
					{@const isLeft = index % 2 === 0}
					<div
						class="relative flex flex-col md:flex-row items-center {isLeft ? 'md:flex-row-reverse' : ''}"
					>
						<!-- Mobile dot marker -->
						<div
							class="absolute left-4 -translate-x-1/2 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-border-brutal bg-accent-yellow shadow-brutal-sm md:hidden dark:border-border-brutal-dark dark:shadow-brutal-dark-sm"
						>
							<span class="h-2 w-2 rounded-full bg-border-brutal dark:bg-border-brutal-dark"></span>
						</div>

						<!-- Desktop dot marker -->
						<div
							class="absolute left-1/2 -translate-x-1/2 top-8 z-10 hidden h-7 w-7 items-center justify-center rounded-full border-[3px] border-border-brutal bg-accent-yellow shadow-brutal-sm md:flex dark:border-border-brutal-dark dark:shadow-brutal-dark-sm"
						>
							<span class="h-2.5 w-2.5 rounded-full bg-border-brutal dark:bg-border-brutal-dark"></span>
						</div>

						<!-- Card Container -->
						<div class="w-full pl-10 md:w-1/2 md:pl-0 {isLeft ? 'md:pr-10' : 'md:pl-10'}">
							<div
								class="relative border-[3px] border-border-brutal bg-surface-card p-6 shadow-brutal transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal-lg md:p-7 dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark dark:hover:shadow-brutal-dark-lg"
							>
								<!-- Top color strip by type -->
								<div
									class="absolute top-0 left-0 h-1.5 w-full {item.type === 'Pendidikan'
										? 'bg-accent-yellow'
										: 'bg-accent-blue'}"
								></div>

								<!-- Header: Period Badge + Type -->
								<div class="mb-3 flex flex-wrap items-center justify-between gap-2">
									<span
										class="inline-flex items-center gap-1.5 border-2 border-border-brutal bg-accent-yellow-light px-2.5 py-0.5 font-mono text-xs font-bold text-ink dark:border-border-brutal-dark dark:bg-surface-dark-muted dark:text-ink-inverted"
									>
										<span>📅</span>
										<span>{item.period}</span>
									</span>

									<span
										class="border-2 border-border-brutal {item.badgeColor} px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider dark:border-border-brutal-dark"
									>
										{item.type}
									</span>
								</div>

								<!-- Title / Role -->
								<h3
									class="font-sans text-lg font-extrabold text-ink md:text-xl dark:text-ink-inverted"
								>
									{item.title}
								</h3>

								<!-- Organization & Location -->
								<div
									class="mt-1 font-mono text-xs font-bold text-brand-600 dark:text-brand-400"
								>
									{item.organization}
									{#if item.location}
										<span class="font-normal text-ink-muted dark:text-ink-dark-muted">
											• {item.location}
										</span>
									{/if}
								</div>

								<!-- Description -->
								{#if item.description}
									<p
										class="mt-3 text-sm leading-relaxed text-ink-muted dark:text-ink-dark-muted"
									>
										{item.description}
									</p>
								{/if}

								<!-- Bullet Points -->
								{#if item.points && item.points.length > 0}
									<ul
										class="mt-4 space-y-2 text-xs leading-relaxed text-ink dark:text-ink-inverted"
									>
										{#each item.points as point (point)}
											<li class="flex items-start gap-2">
												<span class="mt-0.5 font-bold text-brand-500">✦</span>
												<span class="leading-normal">{point}</span>
											</li>
										{/each}
									</ul>
								{/if}
							</div>
						</div>

						<!-- Empty space for the opposite half on desktop -->
						<div class="hidden md:block md:w-1/2"></div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ══════════════════════════════════════════
	     4. PUBLIKASI SECTION
	     ══════════════════════════════════════════ -->
	<section id="publications" class="mb-24 scroll-mt-24 md:mb-32">
		<!-- Section Header (Centered) -->
		<div class="mb-10 text-center">
			<span
				class="inline-block border-[3px] border-border-brutal bg-accent-purple px-3 py-1 font-mono text-xs font-bold tracking-widest text-white uppercase shadow-brutal-sm dark:border-border-brutal-dark dark:shadow-brutal-dark-sm"
			>
				// 04. RISET &amp; PUBLIKASI
			</span>
			<h2
				class="mt-3 font-sans text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl dark:text-ink-inverted"
			>
				Publikasi Ilmiah
			</h2>
			<p class="mt-2 font-mono text-sm font-semibold text-ink-muted dark:text-ink-dark-muted">
				Karya tulis ilmiah &amp; artikel penelitian yang terindeks di Google Scholar
			</p>
		</div>

		<!-- Scholar Stats Overview Banner -->
		<div
			class="mb-8 border-[3px] border-border-brutal bg-surface-card p-6 shadow-brutal dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark"
		>
			<div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
				<!-- Scholar Brand & Metrics -->
				<div class="flex flex-wrap items-center gap-6 sm:gap-8">
					<div class="flex items-center gap-3">
						<div
							class="flex h-12 w-12 items-center justify-center border-2 border-border-brutal bg-accent-blue font-serif text-2xl font-bold text-white shadow-brutal-sm dark:border-border-brutal-dark"
						>
							🎓
						</div>
						<div>
							<div class="font-sans text-sm font-black text-ink dark:text-ink-inverted">
								Google Scholar
							</div>
							<div class="font-mono text-xs text-ink-muted dark:text-ink-dark-muted">
								Profil Peneliti Terverifikasi
							</div>
						</div>
					</div>

					<div class="hidden h-10 w-0.5 bg-border-brutal/30 sm:block dark:bg-border-brutal-dark/30"></div>

					<!-- Stat pills -->
					<div class="flex flex-wrap items-center gap-4 sm:gap-6">
						<div class="border-2 border-border-brutal bg-surface-light px-3.5 py-1.5 shadow-brutal-sm dark:border-border-brutal-dark dark:bg-surface-dark-muted">
							<div class="font-mono text-[10px] font-bold text-ink-muted uppercase dark:text-ink-dark-muted">
								Total Sitasi
							</div>
							<div class="font-mono text-lg font-black text-brand-600 dark:text-brand-400">
								{scholarStats.citations}
							</div>
						</div>

						<div class="border-2 border-border-brutal bg-surface-light px-3.5 py-1.5 shadow-brutal-sm dark:border-border-brutal-dark dark:bg-surface-dark-muted">
							<div class="font-mono text-[10px] font-bold text-ink-muted uppercase dark:text-ink-dark-muted">
								h-index
							</div>
							<div class="font-mono text-lg font-black text-accent-purple dark:text-accent-pink">
								{scholarStats.hIndex}
							</div>
						</div>

						<div class="border-2 border-border-brutal bg-surface-light px-3.5 py-1.5 shadow-brutal-sm dark:border-border-brutal-dark dark:bg-surface-dark-muted">
							<div class="font-mono text-[10px] font-bold text-ink-muted uppercase dark:text-ink-dark-muted">
								i10-index
							</div>
							<div class="font-mono text-lg font-black text-accent-green dark:text-accent-green-light">
								{scholarStats.i10Index}
							</div>
						</div>
					</div>
				</div>

				<!-- Link to Scholar Profile Button -->
				<a
					href={scholarStats.profileUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex shrink-0 items-center justify-center gap-2 border-[3px] border-border-brutal bg-accent-yellow px-5 py-3 font-mono text-xs font-bold text-ink uppercase shadow-brutal transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-yellow/90 hover:shadow-brutal-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-none dark:border-border-brutal-dark dark:shadow-brutal-dark"
				>
					<span>Buka Profil Google Scholar</span>
					<span>↗</span>
				</a>
			</div>
		</div>

		<!-- Publications Grid -->
		<div class="grid gap-6 md:grid-cols-2">
			{#each publicationsData as pub, i (pub.link)}
				{@const accentStrips = ['bg-accent-yellow', 'bg-accent-blue', 'bg-accent-pink', 'bg-accent-green']}
				{@const stripColor = accentStrips[i % accentStrips.length]}
				<article
					class="group relative flex flex-col justify-between border-[3px] border-border-brutal bg-surface-card p-6 shadow-brutal transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal-lg dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark dark:hover:shadow-brutal-dark-lg"
				>
					<!-- Top Color Strip -->
					<div class="absolute top-0 left-0 h-1.5 w-full {stripColor}"></div>

					<div>
						<!-- Badges: Year & Citations -->
						<div class="flex items-center justify-between gap-3 pt-1">
							<span
								class="border-2 border-border-brutal bg-surface-light px-2.5 py-0.5 font-mono text-xs font-bold text-ink shadow-brutal-sm dark:border-border-brutal-dark dark:bg-surface-dark-muted dark:text-ink-inverted"
							>
								📅 {pub.year}
							</span>
							<span
								class="border-2 border-border-brutal bg-accent-green-light px-2.5 py-0.5 font-mono text-xs font-black text-ink shadow-brutal-sm dark:border-border-brutal-dark dark:bg-accent-green dark:text-white"
							>
								💬 {pub.citations} Sitasi
							</span>
						</div>

						<!-- Paper Title -->
						<h3 class="mt-4 font-sans text-lg font-bold leading-snug text-ink dark:text-ink-inverted">
							<a
								href={pub.link}
								target="_blank"
								rel="noopener noreferrer"
								class="transition-colors hover:text-brand-600 dark:hover:text-brand-400"
							>
								{pub.title}
							</a>
						</h3>

						<!-- Authors -->
						<p class="mt-3 text-xs leading-relaxed text-ink-muted dark:text-ink-dark-muted">
							<strong class="font-mono text-ink dark:text-ink-inverted">Penulis:</strong>
							{pub.authors}
						</p>

						<!-- Venue / Journal -->
						<div class="mt-3 border-l-2 border-border-brutal/40 pl-3 font-mono text-xs italic text-ink/80 dark:border-border-brutal-dark/40 dark:text-ink-dark-muted">
							{pub.venue}
						</div>
					</div>

					<!-- Bottom Action Link -->
					<div class="mt-6 border-t-2 border-border-brutal/20 pt-4 dark:border-border-brutal-dark/20">
						<a
							href={pub.link}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-600 transition-colors hover:text-brand-800 dark:text-brand-400 dark:hover:text-brand-300"
						>
							<span>Lihat Detail di Google Scholar</span>
							<span>↗</span>
						</a>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- ══════════════════════════════════════════
	     5. KONTAK SECTION
	     ══════════════════════════════════════════ -->
	<section id="contact" class="scroll-mt-24">
		<!-- Section Header -->
		<div class="mb-10 text-center">
			<span
				class="inline-block border-[3px] border-border-brutal bg-accent-yellow px-3 py-1 font-mono text-xs font-bold tracking-widest text-ink uppercase shadow-brutal-sm dark:border-border-brutal-dark dark:shadow-brutal-dark-sm"
			>
				// 05. HUBUNGI SAYA
			</span>
			<h2
				class="mt-3 font-sans text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl dark:text-ink-inverted"
			>
				Hubungi Saya
			</h2>
			<p class="mt-2 font-mono text-sm font-semibold text-ink-muted dark:text-ink-dark-muted">
				Mari terhubung dan bekerja sama
			</p>
		</div>

		<!-- Main 2-Column Container -->
		<div
			class="relative border-[3px] border-border-brutal bg-surface-card p-6 shadow-brutal-xl md:p-10 lg:p-12 dark:border-border-brutal-dark dark:bg-surface-dark-card dark:shadow-brutal-dark-xl"
		>
			<!-- Top accent strip -->
			<div
				class="absolute top-0 left-0 flex h-2 w-full border-b-2 border-border-brutal dark:border-border-brutal-dark"
			>
				<div class="w-1/3 bg-accent-yellow"></div>
				<div class="w-1/3 bg-accent-pink"></div>
				<div class="w-1/3 bg-accent-blue"></div>
			</div>

			<div class="grid gap-10 lg:grid-cols-12 lg:gap-12">
				<!-- Left Column: Info & Contact Cards -->
				<div class="flex flex-col justify-between lg:col-span-5">
					<div>
						<h3 class="font-sans text-2xl font-bold text-ink sm:text-3xl dark:text-ink-inverted">
							Mari kita bicarakan <span class="text-highlight">proyek Anda</span>.
						</h3>

						<p
							class="mt-4 text-sm leading-relaxed text-ink-muted md:text-base dark:text-ink-dark-muted"
						>
							Saya selalu tertarik mendengar tentang proyek dan peluang baru. Baik Anda memiliki
							pertanyaan, tawaran pekerjaan, atau hanya ingin menyapa, jangan ragu untuk menghubungi
							saya!
						</p>

						<!-- Contact Cards List (similar to screenshot) -->
						<div class="mt-8 space-y-4">
							<!-- Email Pill -->
							<a
								href="mailto:achamadzulfikri20@gmail.com"
								class="group flex items-center gap-4 border-2 border-border-brutal bg-surface-light p-3.5 shadow-brutal-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-blue-light/50 hover:shadow-brutal dark:border-border-brutal-dark dark:bg-surface-dark-muted dark:hover:bg-accent-blue/20"
							>
								<div
									class="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-border-brutal bg-accent-blue text-white shadow-brutal-sm dark:border-border-brutal-dark"
								>
									✉️
								</div>
								<div class="min-w-0">
									<div
										class="font-mono text-[11px] font-bold text-ink-muted uppercase dark:text-ink-dark-muted"
									>
										Email
									</div>
									<div
										class="truncate font-mono text-sm font-bold text-ink group-hover:text-brand-600 dark:text-ink-inverted dark:group-hover:text-brand-400"
									>
										achamadzulfikri20@gmail.com
									</div>
								</div>
							</a>

							<!-- Phone / WhatsApp Pill -->
							<a
								href="https://wa.me/6285233418643"
								target="_blank"
								rel="noopener noreferrer"
								class="group flex items-center gap-4 border-2 border-border-brutal bg-surface-light p-3.5 shadow-brutal-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-pink-light/50 hover:shadow-brutal dark:border-border-brutal-dark dark:bg-surface-dark-muted dark:hover:bg-accent-pink/20"
							>
								<div
									class="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-border-brutal bg-accent-pink text-white shadow-brutal-sm dark:border-border-brutal-dark"
								>
									📞
								</div>
								<div class="min-w-0">
									<div
										class="font-mono text-[11px] font-bold text-ink-muted uppercase dark:text-ink-dark-muted"
									>
										Phone / WhatsApp
									</div>
									<div
										class="truncate font-mono text-sm font-bold text-ink group-hover:text-brand-600 dark:text-ink-inverted dark:group-hover:text-brand-400"
									>
										+6285233418643
									</div>
								</div>
							</a>

							<!-- LinkedIn Pill -->
							<a
								href="https://linkedin.com/in/achmadzulfikri"
								target="_blank"
								rel="noopener noreferrer"
								class="group flex items-center gap-4 border-2 border-border-brutal bg-surface-light p-3.5 shadow-brutal-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-green-light/50 hover:shadow-brutal dark:border-border-brutal-dark dark:bg-surface-dark-muted dark:hover:bg-accent-green/20"
							>
								<div
									class="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-border-brutal bg-accent-green font-mono text-xs font-bold text-white shadow-brutal-sm dark:border-border-brutal-dark"
								>
									in
								</div>
								<div class="min-w-0">
									<div
										class="font-mono text-[11px] font-bold text-ink-muted uppercase dark:text-ink-dark-muted"
									>
										LinkedIn
									</div>
									<div
										class="truncate font-mono text-sm font-bold text-ink group-hover:text-brand-600 dark:text-ink-inverted dark:group-hover:text-brand-400"
									>
										linkedin.com/in/achmadzulfikri
									</div>
								</div>
							</a>
						</div>
					</div>

					<div
						class="mt-8 border-t-2 border-border-brutal/20 pt-4 font-mono text-xs text-ink-muted dark:border-border-brutal-dark/20 dark:text-ink-dark-muted"
					>
						⚡ Respon cepat: biasanya membalas dalam waktu &lt; 24 jam.
					</div>
				</div>

				<!-- Right Column: Interactive Contact Form -->
				<div class="lg:col-span-7">
					<form
						onsubmit={handleContactSubmit}
						class="border-[3px] border-border-brutal bg-surface-light p-6 shadow-brutal md:p-8 dark:border-border-brutal-dark dark:bg-surface-dark-muted dark:shadow-brutal-dark"
					>
						<h4 class="font-sans text-lg font-bold text-ink dark:text-ink-inverted">
							Kirim Pesan Langsung
						</h4>
						<p class="mt-1 text-xs text-ink-muted dark:text-ink-dark-muted">
							Isi formulir di bawah untuk mengirim pesan langsung ke kotak masuk saya.
						</p>

						<div class="mt-6 space-y-5">
							<!-- Name Field -->
							<div>
								<label
									for="contact-name"
									class="block font-mono text-xs font-bold uppercase tracking-wider text-ink dark:text-ink-inverted"
								>
									Nama Lengkap <span class="text-brand-600 dark:text-brand-400">*</span>
								</label>
								<input
									id="contact-name"
									type="text"
									required
									bind:value={contactName}
									placeholder="Nama lengkap Anda"
									class="mt-1.5 w-full border-[3px] border-border-brutal bg-surface-card px-4 py-3 font-mono text-sm text-ink shadow-brutal-sm transition-all focus:shadow-brutal focus:outline-none dark:border-border-brutal-dark dark:bg-surface-dark-card dark:text-ink-inverted dark:shadow-brutal-dark-sm"
								/>
							</div>

							<!-- Email Field -->
							<div>
								<label
									for="contact-email"
									class="block font-mono text-xs font-bold uppercase tracking-wider text-ink dark:text-ink-inverted"
								>
									Alamat Email <span class="text-brand-600 dark:text-brand-400">*</span>
								</label>
								<input
									id="contact-email"
									type="email"
									required
									bind:value={contactEmail}
									placeholder="email.anda@example.com"
									class="mt-1.5 w-full border-[3px] border-border-brutal bg-surface-card px-4 py-3 font-mono text-sm text-ink shadow-brutal-sm transition-all focus:shadow-brutal focus:outline-none dark:border-border-brutal-dark dark:bg-surface-dark-card dark:text-ink-inverted dark:shadow-brutal-dark-sm"
								/>
							</div>

							<!-- Message Field -->
							<div>
								<label
									for="contact-message"
									class="block font-mono text-xs font-bold uppercase tracking-wider text-ink dark:text-ink-inverted"
								>
									Pesan / Detail Proyek <span class="text-brand-600 dark:text-brand-400">*</span>
								</label>
								<textarea
									id="contact-message"
									required
									rows="4"
									bind:value={contactMessage}
									placeholder="Ceritakan tentang proyek, peluang kerja, atau pertanyaan Anda..."
									class="mt-1.5 w-full border-[3px] border-border-brutal bg-surface-card px-4 py-3 font-sans text-sm text-ink shadow-brutal-sm transition-all focus:shadow-brutal focus:outline-none dark:border-border-brutal-dark dark:bg-surface-dark-card dark:text-ink-inverted dark:shadow-brutal-dark-sm"
								></textarea>
							</div>

							<!-- Submit Button -->
							<button
								type="submit"
								class="inline-flex w-full cursor-pointer items-center justify-center gap-2 border-[3px] border-border-brutal bg-brand-500 py-3.5 font-mono text-sm font-bold uppercase tracking-wider text-white shadow-brutal transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-brutal-lg active:translate-x-0.75 active:translate-y-0.75 active:shadow-none dark:border-border-brutal-dark dark:shadow-brutal-dark dark:hover:shadow-brutal-dark-lg"
							>
								<span>Kirim Pesan</span>
								<span>→</span>
							</button>

							{#if formSubmitted}
								<div
									class="border-2 border-border-brutal bg-accent-green-light p-3 font-mono text-xs font-bold text-ink dark:border-border-brutal-dark dark:bg-accent-green/20 dark:text-ink-inverted"
								>
									✓ Aplikasi email Anda telah dibuka. Jika tidak terbuka otomatis, silakan kirim langsung ke achamadzulfikri20@gmail.com.
								</div>
							{/if}
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</div>
