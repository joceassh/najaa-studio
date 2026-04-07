import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import heroBerandaPhoto from './Assets/Beranda/GI MAKSI FARID AZHAR (59) FACHRI.jpg';
import aboutTentangPhoto from './Assets/Tentang Kami/DAY00213.jpg';
import pkgPreweddOutdoor from './Assets/Paket Foto/WJY02821.jpg';
import pkgPreweddIndoor from './Assets/Paket Foto/Najaa Studio - Prewed Ari & Bella (177).jpg';
import pkgPhotoKeluarga from './Assets/Paket Foto/KELUARGA MINI FITRI (12).jpg';
import pkgMaternityPhoto from './Assets/Paket Foto/KELUARGA MINI FITRI (15).jpg';
import pkgGroupPhotoIndoor from './Assets/Paket Foto/Foto GI.png';
import pkgGroupPhotoClass from './Assets/Paket Foto/FOTO GC.png';
import pkgWisudaIndoor from './Assets/Paket Foto/NJA08760.JPG';
import pkgWisudaOutdoor from './Assets/Paket Foto/NJA02966.jpg';
import pkgSelfPhotoUnlimited from './Assets/Paket Foto/SUSILO HIDAYAH (9).jpg';
import pkgSelfPhotoPerson from './Assets/Paket Foto/2025-08-05 16 SELF PHOTO MINI NABILAH 06817.jpg';
import pkgPasPhoto from './Assets/Paket Foto/FOTO PAS.png';
import galeri1 from './Assets/GALERI/GALERI 1.png';
import galeri2 from './Assets/GALERI/GALERI 2.png';
import galeri3 from './Assets/GALERI/GALERI 3.png';
import galeri4 from './Assets/GALERI/GALERI 4.png';
import galeri5 from './Assets/GALERI/GALERI 5.png';
import galeri6 from './Assets/GALERI/GALERI 6.png';
import galeri7 from './Assets/GALERI/GALERI 7.png';
import galeri8 from './Assets/GALERI/GALERI 8.png';
import galeri9 from './Assets/GALERI/GALERI 9.png';
import galeri10 from './Assets/GALERI/GALERI 10.png';
import galeri11 from './Assets/GALERI/GALERI 11.png';
import './App.css';

const NAV_ITEMS = [
  { id: 'beranda', label: 'BERANDA' },
  { id: 'about', label: 'TENTANG KAMI' },
  { id: 'galeri', label: 'GALERI' },
  { id: 'ulasan', label: 'ULASAN' },
  { id: 'kontak', label: 'KONTAK' },
];

function App() {
  return <HomePage />;
}

/** Data paket; indeks di-loop dengan modulo → infinite tanpa ujung — urut mulai harga terendah */
const PACKAGE_ITEMS = [
  {
    id: 'pas-photo',
    title: 'PAS PHOTO',
    priceLine: 'Mulai dari',
    priceStrong: '20K',
    image: pkgPasPhoto,
    imageAlt: 'Pas foto — studio',
    features: ['Paket Mini', 'Paket Medi', 'Paket Maksi', 'Paket Plus', 'Paket Ultra'],
  },
  {
    id: 'self-photo-unlimited',
    title: 'SELF PHOTO Unlimited',
    titleClassName: 'package-slide-name--one-line',
    priceLine: 'Mulai dari',
    priceStrong: '30K',
    image: pkgSelfPhotoUnlimited,
    imageAlt: 'Self photo unlimited — sesi studio',
    features: ['Paket Promo', 'Potrait', 'Landscape'],
  },
  {
    id: 'self-photo-person',
    title: 'SELF PHOTO PERSON',
    titleClassName: 'package-slide-name--one-line',
    priceLine: 'Mulai dari',
    priceStrong: '30K',
    image: pkgSelfPhotoPerson,
    imageAlt: 'Self photo person — sesi studio',
    features: ['Paket Bronze', 'Paket Silver', 'Paket Gold'],
  },
  {
    id: 'prewedd-outdoor',
    title: 'PREWEDD OUTDOOR',
    priceLine: 'Mulai dari',
    priceStrong: '200K',
    image: pkgPreweddOutdoor,
    imageAlt: 'Prewedding outdoor — pasangan di taman',
    features: ['Paket Mini', 'Paket Medi', 'Paket Maksi', 'Paket Plus', 'Paket Ultra'],
  },
  {
    id: 'prewedd-indoor',
    title: 'PREWEDD INDOOR',
    priceLine: 'Mulai dari',
    priceStrong: '200K',
    image: pkgPreweddIndoor,
    imageAlt: 'Prewedding indoor — pasangan di studio',
    features: ['Paket Standart', 'Paket Premium'],
  },
  {
    id: 'photo-keluarga',
    title: 'PHOTO KELUARGA',
    priceLine: 'Mulai dari',
    priceStrong: '200K',
    image: pkgPhotoKeluarga,
    imageAlt: 'Foto keluarga — studio',
    features: ['Paket Mini', 'Paket Medi', 'Paket Maksi', 'Paket Plus', 'Paket Ultra'],
  },
  {
    id: 'maternity-photo',
    title: 'MATERNITY PHOTO',
    priceLine: 'Mulai dari',
    priceStrong: '200K',
    image: pkgMaternityPhoto,
    imageAlt: 'Maternity photo — studio',
    features: ['Paket Mini', 'Paket Medi', 'Paket Maksi', 'Paket Plus', 'Paket Ultra'],
    imageClassName: 'package-slide-img--maternity-belly',
  },
  {
    id: 'wisuda-indoor',
    title: 'WISUDA INDOOR',
    titleClassName: 'package-slide-name--one-line',
    priceLine: 'Mulai dari',
    priceStrong: '200K',
    image: pkgWisudaIndoor,
    imageAlt: 'Wisuda indoor — sesi studio',
    features: ['Paket Mini', 'Paket Medi', 'Paket Maksi', 'Paket Combo', 'Paket Plus', 'Paket Ultra'],
  },
  {
    id: 'wisuda-outdoor',
    title: 'WISUDA OUTDOOR',
    titleClassName: 'package-slide-name--one-line',
    priceLine: 'Mulai dari',
    priceStrong: '200K',
    image: pkgWisudaOutdoor,
    imageAlt: 'Wisuda outdoor — lokasi luar ruangan',
    features: ['Paket Mini', 'Paket Medi', 'Paket Maksi'],
  },
  {
    id: 'group-photo-indoor',
    title: 'GROUP PHOTO INDOOR',
    titleClassName: 'package-slide-name--one-line',
    priceLine: 'Mulai dari',
    priceStrong: '200K',
    image: pkgGroupPhotoIndoor,
    imageAlt: 'Group photo indoor — sesi studio',
    features: ['Paket Bestie', 'Paket Mini', 'Paket Medi', 'Paket Maksi', 'Paket Combo'],
  },
  {
    id: 'group-photo-class',
    title: 'GROUP PHOTO CLASS',
    titleClassName: 'package-slide-name--one-line',
    priceLine: 'Mulai dari',
    priceStrong: '350K',
    image: pkgGroupPhotoClass,
    imageAlt: 'Group photo class — sesi studio',
    features: ['Paket Bronze', 'Paket Silver', 'Paket Gold'],
  },
];

const PACKAGE_SLIDE_COUNT = PACKAGE_ITEMS.length;
/** Slot tetap: tengah (0) = paket aktif; kiri/kanan hanya ganti isi, tanpa geser track */
const PACKAGE_SLOT_OFFSETS = [-2, -1, 0, 1, 2];

/** Jumlah titik pagination ulasan (bukan per kartu) */
const REVIEW_DOT_COUNT = 5;

const REVIEW_ITEMS = [
  {
    id: 1,
    stars: 5,
    text: 'Bagus banget, tempatnya juga strategis dekat dengan kampus UM, UB, UIN, dan harganyapun terbilang cukup memadai bagi para mahasiswa, cocok banget untuk foto organisasi, rekomended banget sii',
    name: 'Abdullah Muhammad Yusuf',
    avatar: 'https://placehold.co/56x56/4a5f7a/d8e4f5/png?text=A',
  },
  {
    id: 2,
    stars: 5,
    text: 'Pelayanannya ramah, fotografernya sabar dan profesional. Hasilnya sangat memuaskan, foto wisuda kami jadi kenangan yang indah. Pasti bakal balik lagi buat sesi berikutnya!',
    name: 'Siti Rahma Aulia',
    avatar: 'https://placehold.co/56x56/4a5f7a/d8e4f5/png?text=S',
  },
  {
    id: 3,
    stars: 5,
    text: 'Studio yang nyaman, konsep fotonya keren-keren. Saya foto prewedding di sini dan hasilnya melebihi ekspektasi. Sangat direkomendasikan untuk pasangan yang ingin kenangan indah!',
    name: 'Dimas Firmansyah',
    avatar: 'https://placehold.co/56x56/4a5f7a/d8e4f5/png?text=D',
  },
  {
    id: 4,
    stars: 5,
    text: 'Kualitas foto bagus banget, pencahayaannya oke, dan hasilnya natural. Tim Naja Studio sangat membantu dari awal sampai akhir. Worth it banget sama harganya!',
    name: 'Nur Hidayah',
    avatar: 'https://placehold.co/56x56/4a5f7a/d8e4f5/png?text=N',
  },
  {
    id: 5,
    stars: 5,
    text: 'Foto organisasi kami jadi luar biasa! Tempatnya luas, bisa muat banyak orang, dan hasilnya rapi. Harga terjangkau, pelayanan cepat. Dua jempol buat Naja Studio!',
    name: 'Rizky Pratama',
    avatar: 'https://placehold.co/56x56/4a5f7a/d8e4f5/png?text=R',
  },
  {
    id: 6,
    stars: 5,
    text: 'Saya foto wisuda sendirian dan timnya bisa buat saya santai di depan kamera. Hasilnya natural dan estetik banget. Studio bersih, parkir mudah, dan harga ramah di kantong.',
    name: 'Fathimah Azzahra',
    avatar: 'https://placehold.co/56x56/4a5f7a/d8e4f5/png?text=F',
  },
  {
    id: 7,
    stars: 5,
    text: 'Naja Studio jadi pilihan terbaik buat kami. Konsepnya bisa custom sesuai keinginan, fotografernya tanggap dan hasil editnya cepat. Pokoknya puas banget sama pelayanannya!',
    name: 'Bagas Wijaya',
    avatar: 'https://placehold.co/56x56/4a5f7a/d8e4f5/png?text=B',
  },
  {
    id: 8,
    stars: 5,
    text: 'Awalnya ragu, tapi setelah lihat hasil fotonya langsung jatuh cinta. Editannya bersih, tidak berlebihan, dan warnanya enak di mata. Sangat recommended untuk semua kebutuhan foto!',
    name: 'Dina Melania',
    avatar: 'https://placehold.co/56x56/4a5f7a/d8e4f5/png?text=D',
  },
];

function galleryPlaceholderSrc(id, variant) {
  const sizes = { portrait: '480x640', landscape: '960x540', narrow: '360x480' };
  const size = sizes[variant] || sizes.portrait;
  return `https://placehold.co/${size}/d1ccc3/4a5568/png?text=Galeri+${id}`;
}

/**
 * Titik sampel di area logo (bawah nav fixed): navy #102C57 di bg terang, putih di bg gelap.
 * Memakai elementsFromPoint + posisi dalam section untuk hero gradient & paket split.
 */
function resolveLogoOnLightBg() {
  const sampleX = Math.min(96, Math.max(24, window.innerWidth * 0.07));
  const sampleY = 36;
  let nodes;
  try {
    nodes = document.elementsFromPoint(sampleX, sampleY);
  } catch {
    return true;
  }
  if (!nodes?.length) return true;

  for (const node of nodes) {
    if (node.nodeType !== Node.ELEMENT_NODE) continue;
    if (node.closest?.('.top-nav')) continue;

    if (node.closest?.('.site-footer')) return false;
    if (node.closest?.('.footer-prelude')) return true;

    const s = node.closest?.('section[id]');
    if (!s?.id) continue;

    const r = s.getBoundingClientRect();
    const h = Math.max(r.height, 1);
    const t = (sampleY - r.top) / h;

    if (s.id === 'beranda') return t < 0.36;
    if (s.id === 'about') return false;
    if (s.id === 'galeri') return t >= 0.5;
    if (s.id === 'galeri-grid') return true;
    if (s.id === 'ulasan') return true;
    if (s.id === 'kontak') return true;
  }

  return true;
}

function HomePage() {
  const galleryGridItems = [
    { id: 1, variant: 'portrait', src: galeri1 },
    { id: 2, variant: 'landscape', src: galeri2 },
    { id: 3, variant: 'portrait', src: galeri3 },
    { id: 4, variant: 'portrait', src: galeri4 },
    { id: 5, variant: 'portrait', src: galeri5 },
    { id: 6, variant: 'landscape', src: galeri6 },
    { id: 7, variant: 'landscape', src: galeri7 },
    { id: 8, variant: 'landscape', src: galeri8 },
    { id: 9, variant: 'landscape', src: galeri9 },
    { id: 10, variant: 'portrait', src: galeri10 },
    { id: 11, variant: 'portrait', src: galeri11 },
  ];
  const [activeSection, setActiveSection] = useState('beranda');
  const [logoOnLightBg, setLogoOnLightBg] = useState(true);
  const [packageSlide, setPackageSlide] = useState(0);
  const [reviewDotPage, setReviewDotPage] = useState(0);
  const reviewTrackRef = useRef(null);
  const packageCarouselCenterFrameRef = useRef(null);
  const [packageEnterDir, setPackageEnterDir] = useState(null);

  /* ── Form booking ── */
  const WA_NUMBER = '6285171610354';

  const [bookingForm, setBookingForm] = useState({
    nama: '',
    tanggal: '',
    jam: '',
    paket: '',
    jumlah: '',
  });

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const { nama, tanggal, jam, paket, jumlah } = bookingForm;

    // Format tanggal agar lebih mudah dibaca (YYYY-MM-DD → DD/MM/YYYY)
    const tglFormatted = tanggal
      ? tanggal.split('-').reverse().join('/')
      : '-';

    const pesan =
      `Halo Najaa Studio, saya ingin booking untuk foto, berikut kelengkapannya.\n\n` +
      `Nama: ${nama || '-'}\n` +
      `Tanggal: ${tglFormatted}\n` +
      `Jam: ${jam || '-'}\n` +
      `Paket foto: ${paket || '-'}\n` +
      `Jumlah orang: ${jumlah || '-'}\n\n` +
      `Mohon konfirmasi selanjutnya ya, kak! Terima kasih 🙏`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        threshold: [0.15, 0.35, 0.55],
        rootMargin: '-22% 0px -38% 0px',
      }
    );

    NAV_ITEMS.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      const next = resolveLogoOnLightBg();
      setLogoOnLightBg((prev) => (prev !== next ? next : prev));
    };
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(raf);
    };
  }, [activeSection]);

  const syncReviewDotFromTrack = () => {
    const el = reviewTrackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) {
      setReviewDotPage(0);
      return;
    }
    const ratio = el.scrollLeft / max;
    const p = Math.round(ratio * (REVIEW_DOT_COUNT - 1));
    setReviewDotPage(Math.min(REVIEW_DOT_COUNT - 1, Math.max(0, p)));
  };

  const scrollReviewToDotPage = (pageIndex) => {
    const el = reviewTrackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) {
      setReviewDotPage(0);
      return;
    }
    const t = Math.min(REVIEW_DOT_COUNT - 1, Math.max(0, pageIndex));
    el.scrollTo({ left: (t / (REVIEW_DOT_COUNT - 1)) * max, behavior: 'smooth' });
    setReviewDotPage(t);
  };

  useLayoutEffect(() => {
    syncReviewDotFromTrack();
    window.addEventListener('resize', syncReviewDotFromTrack);
    return () => window.removeEventListener('resize', syncReviewDotFromTrack);
  }, []);

  /* Putar ulang animasi kartu aktif tanpa me-remount frame (menghindari “spawn” kasar) */
  useLayoutEffect(() => {
    const el = packageCarouselCenterFrameRef.current;
    if (!el) return;
    if (!packageEnterDir) {
      el.classList.remove('package-slide-frame--enter-next', 'package-slide-frame--enter-prev');
      return;
    }
    el.classList.remove('package-slide-frame--enter-next', 'package-slide-frame--enter-prev');
    void el.offsetWidth;
    el.classList.add(`package-slide-frame--enter-${packageEnterDir}`);
  }, [packageSlide, packageEnterDir]);

  const activeIndex = NAV_ITEMS.findIndex((item) => item.id === activeSection);

  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    const headerOffset = 84;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  const packagePrev = () => {
    setPackageEnterDir('prev');
    setPackageSlide((i) => (i - 1 + PACKAGE_SLIDE_COUNT) % PACKAGE_SLIDE_COUNT);
  };

  const packageNext = () => {
    setPackageEnterDir('next');
    setPackageSlide((i) => (i + 1) % PACKAGE_SLIDE_COUNT);
  };

  const logoSrc = `${process.env.PUBLIC_URL}/najaa-studio-logo.png`;

  return (
    <main className="landing-page">
      <nav
        className="top-nav"
        aria-label="Navigasi utama"
        data-logo-on-light={logoOnLightBg ? 'true' : 'false'}
      >
        <a
          href="#beranda"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo('beranda');
          }}
          aria-label="Najaa Studio — Beranda"
        >
          <span
            className="brand-logo-mask"
            style={{
              WebkitMaskImage: `url(${JSON.stringify(logoSrc)})`,
              maskImage: `url(${JSON.stringify(logoSrc)})`,
            }}
            aria-hidden="true"
          />
        </a>
        <div className="nav-glass" style={{ '--active-index': activeIndex < 0 ? 0 : activeIndex }}>
          <span className="nav-indicator" />
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-btn ${activeSection === item.id ? 'is-active' : ''}`}
              onClick={() => handleScrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <section id="beranda" className="hero page-section">
        <div className="hero-overlay" />
        <img
          className="hero-bg"
          src={heroBerandaPhoto}
          alt="Tim Najaa Studio — foto grup di studio"
        />

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="visually-hidden">Abadikan setiap momen dengan sempurna</span>
            <span className="hero-title-display" aria-hidden="true">
              <span className="hero-title-drop">A</span>
              <span className="hero-title-text">badikan Setiap Momen dengan Sempurna</span>
            </span>
          </h1>
          <p className="hero-lead">
            <span className="hero-lead-line">
              Mengabadikan setiap momen berharga dengan sentuhan profesional agar
            </span>
            <span className="hero-lead-line">
              setiap cerita, ekspresi, dan kenangan tersimpan dengan indah dan penuh makna.
            </span>
          </p>
        </div>
      </section>

      <section id="about" className="about-section page-section">
        <div className="about-inner">
          <div className="about-photo-wrap">
            <img
              src={aboutTentangPhoto}
              alt="Graduation outdoor — layanan fotografi Najaa Studio"
              decoding="async"
            />
          </div>
          <div className="about-text-stack">
            <h2 className="hero-title about-external-heading">
              <span className="hero-title-display">
                <span className="hero-title-drop">K</span>
                <span className="hero-title-text">AMI MENCIPTAKAN</span>
              </span>
              <span className="hero-title-text about-heading-line2">KENANGAN DI SETIAP POTRET</span>
            </h2>
            <div className="about-card">
              <h3 className="about-studio-name">Najaa Studio</h3>
              <p className="about-card-lead">
                Studio fotografi profesional yang berkomitmen
                <br />
                mengabadikan setiap momen dengan kualitas
                <br />
                terbaik dan konsep yang matang.
              </p>
              <p className="about-card-body">
                Layanan yang disediakan lengkap mulai dari self photo, graduation indoor/
                <br />
                outdoor, prewedding hingga wedding, untuk menangkap momen di setiap
                <br />
                cerita, kebahagiaan, dan kehangatan dalam bingkai yang abadi.
              </p>
              <p className="about-card-foot">
                Berlokasi di Jl. Bend. Sampean Baru No.B6, Karangbesuki, Kota Malang
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="galeri" className="packages-section page-section" aria-labelledby="packages-heading">
        <div className="packages-section-inner">
          <header className="packages-header">
            <p className="packages-eyebrow">
              <span className="packages-eyebrow-line" aria-hidden="true" />
              <span className="packages-eyebrow-text">Galeri</span>
              <span className="packages-eyebrow-line" aria-hidden="true" />
            </p>
            <h2 id="packages-heading" className="packages-title">
              PAKET FOTO
            </h2>
          </header>

          <div className="packages-carousel-wrap">
            <div className="packages-carousel" role="region" aria-roledescription="carousel" aria-label="Paket foto">
              <div className="packages-track">
                {PACKAGE_SLOT_OFFSETS.map((offset) => {
                  const idx =
                    ((packageSlide + offset) % PACKAGE_SLIDE_COUNT + PACKAGE_SLIDE_COUNT) %
                    PACKAGE_SLIDE_COUNT;
                  const isCenter = offset === 0;
                  const pkg = PACKAGE_ITEMS[idx];
                  const imgSrc =
                    pkg.image ??
                    `https://placehold.co/720x960/4a5f7a/d8e4f5/png?text=Paket+${idx + 1}`;
                  return (
                    <article
                      key={`slot-${offset}`}
                      className={`package-slide ${isCenter ? 'is-active' : ''}`}
                      aria-hidden={!isCenter}
                    >
                      <div
                        ref={isCenter ? packageCarouselCenterFrameRef : null}
                        className="package-slide-frame"
                      >
                        <img
                          key={`${offset}-${pkg.id}`}
                          src={imgSrc}
                          alt={pkg.imageAlt || ''}
                          className={pkg.imageClassName ? `package-slide-img ${pkg.imageClassName}` : 'package-slide-img'}
                        />
                        {isCenter && (
                          <div className="package-slide-overlay">
                            <div className="package-slide-gradient" aria-hidden="true" />
                            <div className="package-slide-body">
                              <h3
                                className={
                                  pkg.titleClassName
                                    ? `package-slide-name ${pkg.titleClassName}`
                                    : 'package-slide-name'
                                }
                              >
                                {pkg.title}
                              </h3>
                              <p className="package-slide-price">
                                {pkg.priceLine} <strong>{pkg.priceStrong}</strong>
                              </p>
                              <div className="package-slide-lists">
                                <ul className="package-slide-list">
                                  {pkg.features.slice(0, 3).map((line) => (
                                    <li key={line}>{line}</li>
                                  ))}
                                </ul>
                                <ul className="package-slide-list">
                                  {pkg.features.slice(3).map((line) => (
                                    <li key={line}>{line}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="packages-controls">
            <div className="packages-arrows">
              <button type="button" className="package-arrow" aria-label="Paket sebelumnya" onClick={packagePrev}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button type="button" className="package-arrow" aria-label="Paket berikutnya" onClick={packageNext}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button type="button" className="packages-see-more">
              Lihat selengkapnya
            </button>
          </div>
        </div>
      </section>

      <section id="galeri-grid" className="gallery-section page-section" aria-label="Galeri foto">
        <div className="gallery-section-inner">
          <div className="gallery-panel">
            <div className="gallery-mosaic" aria-label="Kumpulan foto galeri">
              {galleryGridItems.map((item) => (
                <figure
                  key={item.id}
                  className={`gallery-cell gallery-cell--${item.variant} gallery-cell--pos-${item.id}`}
                >
                  <img
                    src={item.src || galleryPlaceholderSrc(item.id, item.variant)}
                    alt={item.src ? `Galeri ${item.id}` : `Placeholder galeri ${item.id} — isi item.src untuk foto`}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
          </div>
          <p className="gallery-tagline">
            Jelajahi koleksi momen yang telah kami abadikan, di mana setiap foto menceritakan kisah
            dan menyimpan kenangan dengan indah.
          </p>
        </div>
      </section>

      <section id="ulasan" className="review-section page-section">
        <h2 className="review-title">ULASAN PELANGGAN</h2>

        <div className="review-body">
          {/* Kolom kiri dekoratif */}
          <div className="review-left" aria-hidden="true">
            <div className="review-quote-mark">"</div>
            <p className="review-left-label">
              <span className="review-left-initial">C</span>ERITA DARI<br />
              PELANGGAN<br />
              KAMI
            </p>
          </div>

          {/* Pembungkus clip — menyembunyikan overflow kanan */}
          <div className="review-track-wrap">
            <div
              className="review-track"
              ref={reviewTrackRef}
              onScroll={() => syncReviewDotFromTrack()}
            >
              {REVIEW_ITEMS.map((item) => (
                <article key={item.id} className="review-card">
                  <div className="review-card-stars" aria-label={`${item.stars} bintang`}>
                    {'★'.repeat(item.stars)}
                  </div>
                  <p className="review-card-text">{item.text}</p>
                  <div className="review-card-author">
                    <img
                      className="review-card-avatar"
                      src={item.avatar}
                      alt={item.name}
                      width="48"
                      height="48"
                    />
                    <span className="review-card-name">{item.name}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="review-dots" role="tablist" aria-label="Halaman ulasan">
          {Array.from({ length: REVIEW_DOT_COUNT }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === reviewDotPage}
              className={`review-dot ${i === reviewDotPage ? 'is-active' : ''}`}
              onClick={() => scrollReviewToDotPage(i)}
              aria-label={`Halaman ulasan ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <section id="kontak" className="contact-section page-section">

        {/* Header terpusat */}
        <div className="contact-header">
          <h2 className="contact-title">KONTAK KAMI</h2>
          <p className="contact-brand-name">NAJAA.STUDIO</p>
          <p className="contact-subtitle">
            Siap mengabadikan momen spesial Anda?<br />
            Hubungi Najaa Studio dan wujudkan kenangan indah bersama.
          </p>
        </div>

        {/* Konten utama: info kiri + form kanan */}
        <div className="contact-main">
          <div className="contact-info">
            <h3 className="contact-cta">MULAI SESI<br />FOTO ANDA</h3>
            <div className="contact-hours">
              <p className="contact-hours-label">Jam Operasional</p>
              <div className="contact-hours-item">
                <span>Senin – Kamis</span>
                <span>08.30 – 20.00</span>
              </div>
              <div className="contact-hours-item">
                <span>Sabtu &amp; Minggu</span>
                <span>08.30 – 20.00</span>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <form className="contact-form" onSubmit={handleBookingSubmit}>
              <div className="contact-field">
                <label className="contact-label" htmlFor="book-nama">Nama</label>
                <input
                  id="book-nama"
                  className="contact-input"
                  type="text"
                  name="nama"
                  value={bookingForm.nama}
                  onChange={handleBookingChange}
                  placeholder="Nama lengkap"
                  required
                />
              </div>
              <div className="contact-row">
                <div className="contact-field">
                  <label className="contact-label" htmlFor="book-tanggal">Tanggal</label>
                  <input
                    id="book-tanggal"
                    className="contact-input"
                    type="date"
                    name="tanggal"
                    value={bookingForm.tanggal}
                    onChange={handleBookingChange}
                    required
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-label" htmlFor="book-jam">Jam</label>
                  <input
                    id="book-jam"
                    className="contact-input"
                    type="time"
                    name="jam"
                    value={bookingForm.jam}
                    onChange={handleBookingChange}
                    required
                  />
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-field">
                  <label className="contact-label" htmlFor="book-paket">Paket</label>
                  <input
                    id="book-paket"
                    className="contact-input"
                    type="text"
                    name="paket"
                    value={bookingForm.paket}
                    onChange={handleBookingChange}
                    placeholder="mis. Prewedding Indoor"
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-label" htmlFor="book-jumlah">Jumlah Orang</label>
                  <input
                    id="book-jumlah"
                    className="contact-input"
                    type="number"
                    name="jumlah"
                    value={bookingForm.jumlah}
                    onChange={handleBookingChange}
                    min="1"
                    placeholder="1"
                  />
                </div>
              </div>
              <button type="submit" className="contact-submit">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        {/* Link kontak bawah */}
        <div className="contact-links">
          <div className="contact-link-item">
            <div className="contact-link-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="contact-link-body">
              <p className="contact-link-label">Website</p>
              <p className="contact-link-value">www.loremipsum.id</p>
              <a href="https://loremipsum.id" className="contact-link-action" target="_blank" rel="noreferrer">Visit Now</a>
            </div>
          </div>

          <div className="contact-link-item">
            <div className="contact-link-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div className="contact-link-body">
              <p className="contact-link-label">Booking</p>
              <p className="contact-link-value">+62 8517 1610 354</p>
              <a href="https://wa.me/6285171610354" className="contact-link-action" target="_blank" rel="noreferrer">Chat On WhatsApp</a>
            </div>
          </div>

          <div className="contact-link-item">
            <div className="contact-link-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div className="contact-link-body">
              <p className="contact-link-label">Instagram</p>
              <p className="contact-link-value">@najaa.studio</p>
              <a href="https://instagram.com/najaa.studio" className="contact-link-action" target="_blank" rel="noreferrer">Visit Now</a>
            </div>
          </div>
        </div>

      </section>

      <div className="footer-prelude">
        <p className="footer-tagline">
          <span className="footer-tagline-initial">P</span>ERCAYAKAN MOMEN BERHARGA ANDA KEPADA KAMI
        </p>
      </div>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                className="footer-logo-img"
                src={`${process.env.PUBLIC_URL}/najaa-studio-logo.png`}
                alt="Najaa Studio"
                width={220}
                height={52}
                decoding="async"
              />
            </div>
            <p className="footer-desc">
              Najaa Studio menyediakan layanan fotografi profesional untuk mengabadikan setiap momen berharga
              dengan hasil yang indah dan penuh makna.
            </p>
          </div>

          <nav className="footer-menu" aria-label="Menu footer">
            <h3 className="footer-heading">Menu</h3>
            <div className="footer-menu-grid">
              <div className="footer-menu-col">
                <button type="button" className="footer-link" onClick={() => handleScrollTo('beranda')}>
                  Beranda
                </button>
                <button type="button" className="footer-link" onClick={() => handleScrollTo('about')}>
                  Tentang Kami
                </button>
              </div>
              <div className="footer-menu-col">
                <button type="button" className="footer-link" onClick={() => handleScrollTo('galeri')}>
                  Paket
                </button>
                <button type="button" className="footer-link" onClick={() => handleScrollTo('galeri-grid')}>
                  Galeri
                </button>
              </div>
              <div className="footer-menu-col">
                <button type="button" className="footer-link" onClick={() => handleScrollTo('ulasan')}>
                  Ulasan
                </button>
                <button type="button" className="footer-link" onClick={() => handleScrollTo('kontak')}>
                  Kontak
                </button>
              </div>
            </div>
          </nav>

          <div className="footer-aside">
            <div className="footer-social">
              <a
                href="https://loremipsum.id"
                className="footer-social-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="Website"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/najaa.studio"
                className="footer-social-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/6285171610354"
                className="footer-social-btn"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
              <a
                href="mailto:hello@najaastudio.com"
                className="footer-social-btn"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
            <hr className="footer-divider" />
            <h3 className="footer-heading">Location</h3>
            <p className="footer-address">
              Jl. Bend. Sampean Baru No.B6, Karangbesuki, Kota Malang
            </p>
          </div>
        </div>
        <div className="footer-bottom-rule" aria-hidden="true" />
      </footer>
    </main>
  );
}

export default App;
