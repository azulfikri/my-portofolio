import type { Project } from '../types';

export const projects: Project[] = [
	{
		slug: 'deteksi-kematangan-cabai',
		title: 'Deteksi Kematangan Cabai',
		summary:
			'Sistem deteksi tingkat kematangan cabai rawit menggunakan YOLOv8, FastAPI, dan antarmuka Vue.js untuk membantu penyortiran hasil panen secara otomatis.',
		year: 2026,
		role: 'Peneliti & developer utama (proyek skripsi individu)',
		tags: ['ai', 'computer-vision', 'web'],
		stack: ['YOLOv8', 'FastAPI', 'Vue.js', 'Tailwind CSS', 'Roboflow'],
		problem:
			'Petani cabai menyortir kematangan secara manual dengan mata telanjang, prosesnya lambat, tidak konsisten, dan rentan kesalahan terutama saat volume panen besar.',
		solution:
			'Membangun model deteksi objek YOLOv8 yang dilatih dengan dataset citra cabai rawit berlabel dari Roboflow, diintegrasikan dengan backend REST API berkecepatan tinggi menggunakan FastAPI, serta antarmuka web modern berbasis Vue.js dan Tailwind CSS agar pengguna dapat mengunggah citra dan langsung mendapatkan hasil deteksi kematangan secara instan.',
		results:
			'Model mencapai mAP50 di atas 90% pada data uji; waktu inferensi real-time rata-rata di bawah 200ms per gambar.',
		links: {
			repo: 'https://github.com/azulfikri/smart-chili-harvest'
		},
		images: [{ src: '/images/deteksi-cabe.jpeg', alt: 'Antarmuka web deteksi kematangan cabai YOLOv8' }],
		featured: true
	},
	{
		slug: 'warehouse-management',
		title: 'Warehouse Management System',
		summary:
			'Aplikasi Material Supply Warehouse Management System untuk pencatatan stok dan alur logistik barang secara real-time, dikembangkan selama program MSIB.',
		year: 2024,
		role: 'Fullstack developer dalam tim (program MSIB Batch 7)',
		tags: ['web', 'fullstack'],
		stack: ['Vue.js', 'Express.js', 'Prisma', 'Bootstrap', 'PostgreSQL'],
		problem:
			'Pencatatan dan pengelolaan material supply gudang masih menggunakan sistem konvensional yang sering menimbulkan selisih data stok dan memperlambat proses audit.',
		solution:
			'Mengembangkan antarmuka Material Supply menggunakan Vue.js dan Bootstrap, didukung backend REST API menggunakan Express.js, Prisma ORM, serta basis data PostgreSQL untuk pencatatan transaksi masuk-keluar barang secara real-time.',
		results:
			'Meningkatkan akurasi pencatatan stok gudang dan mempermudah sinkronisasi data material antar divisi.',
		links: {
			repoFrontend: 'https://github.com/azulfikri/inventory-management-frontend-axicode',
			repoBackend: 'https://github.com/azulfikri/inventory-management-backend-axicode'
		},
		images: [
			{
				src: '/images/material-supply.jpeg',
				alt: 'Dashboard Material Supply Warehouse Management System'
			}
		],
		featured: true
	},
	{
		slug: 'monitoring-kandang-ayam',
		title: 'Monitoring Kandang Ayam Petelur',
		summary:
			'Aplikasi mobile berbasis Flutter dan Supabase untuk memantau kondisi lingkungan kandang ayam petelur secara real-time terintegrasi IoT.',
		year: 2026,
		role: 'Mobile developer & IoT developer',
		tags: ['mobile', 'iot'],
		stack: ['Flutter', 'Supabase', 'ESP32', 'IoT'],
		problem:
			'Peternak ayam petelur kesulitan memantau kondisi mikroklimat kandang secara presisi dari jarak jauh, padahal fluktuasi suhu dan tingginya kadar gas amonia berisiko mengganggu kesehatan ayam dan menurunkan produksi telur.',
		solution:
			'Membangun aplikasi mobile menggunakan Flutter dengan backend cloud Supabase untuk sinkronisasi data real-time dari mikrokontroler sensor IoT (ESP32) di kandang ayam petelur, dilengkapi visualisasi grafik dan notifikasi peringatan dini.',
		results:
			'Memudahkan peternak memantau parameter suhu, kelembapan, dan amonia kapan saja langsung dari smartphone secara efisien.',
		links: {
			repo: 'https://github.com/azulfikri/kandang-monitoring-app'
		},
		images: [
			{
				src: '/images/monitoring-kandang-ayam.jpeg',
				alt: 'Aplikasi mobile monitoring kondisi kandang ayam petelur'
			}
		],
		featured: true
	},
	{
		slug: 'booking-lapangan',
		title: 'Booking Lapangan Olahraga',
		summary:
			'Aplikasi web pemesanan lapangan olahraga dengan sistem slot waktu, integrasi validasi pembayaran, dan konfirmasi reservasi.',
		year: 2025,
		role: 'Fullstack web developer (Bootcamp Laravel)',
		tags: ['web', 'fullstack'],
		stack: ['Laravel', 'Tailwind CSS', 'MySQL'],
		problem:
			'Pemesanan lapangan olahraga yang masih dilakukan lewat telepon atau chat manual sering memicu jadwal bentrok ganda, bukti bayar terselip, dan rekap pemasukan yang tidak terdata.',
		solution:
			'Membangun aplikasi web dengan Laravel dan antarmuka modern Tailwind CSS serta basis data MySQL untuk visualisasi slot jadwal lapangan secara real-time, pengunggahan bukti pembayaran, dan konfirmasi pemesanan otomatis.',
		results:
			'Menghilangkan potensi konflik jadwal dan memudahkan manajemen reservasi lapangan oleh pihak pengelola.',
		links: {
			repo: 'https://github.com/azulfikri/sistem-booking-lapangan'
		},
		images: [
			{
				src: '/images/booking-lapangan.png',
				alt: 'Halaman pemesanan slot lapangan olahraga'
			}
		],
		featured: true
	}
];

/** Helper: get featured projects */
export function getFeaturedProjects(): Project[] {
	return projects.filter((p) => p.featured);
}

/** Helper: get other (non-featured) projects */
export function getOtherProjects(): Project[] {
	return projects.filter((p) => !p.featured);
}

/** Helper: get all unique tags */
export function getAllTags(): string[] {
	const tagSet = new Set<string>();
	for (const p of projects) {
		for (const t of p.tags) {
			tagSet.add(t);
		}
	}
	return [...tagSet].sort();
}

/** Helper: find project by slug */
export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

/** Helper: get adjacent projects for prev/next navigation */
export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
	const index = projects.findIndex((p) => p.slug === slug);
	if (index === -1) return { prev: null, next: null };
	return {
		prev: index > 0 ? projects[index - 1] : null,
		next: index < projects.length - 1 ? projects[index + 1] : null
	};
}
