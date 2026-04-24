import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import heroBerandaPhoto from './Assets/Beranda/GI MAKSI FARID AZHAR (59) FACHRI.jpg';
import aboutTentangPhoto from './Assets/Tentang Kami/DAY00213.jpg';
import pkgPreweddOutdoor from './Assets/Paket Foto/WJY02821.jpg';
import pkgPreweddIndoor from './Assets/Paket Foto/Najaa Studio - Prewed Ari & Bella (177).jpg';
import pkgPhotoKeluarga from './Assets/Paket Foto/WJY06385.jpeg';
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './components/ui/carousel';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
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
    titleClassName: 'package-slide-name--one-line package-slide-name--long',
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

const BOOKING_PACKAGE_OPTIONS = [
  'Paket Wisuda Mini',
  'Paket Wisuda Medi',
  'Paket Wisuda Maksi',
  'Paket Wisuda Plus',
  'Paket Wisuda Outdoor',
  'Paket Couple',
  'Paket Prewed Indoor Basic',
  'Paket Prewed Indoor Complete',
  'Paket Prewed Outdoor Basic',
  'Paket Prewed Outdoor Complete',
  'Paket Prewedd Outdoor Plus',
  'Pas Foto Basic (Setengah Badan)',
  'Pas Foto Complete (Setengah Badan)',
  'Full Body Basic',
  'Full Body Complete',
  'Pas Foto + Full Body Basic',
  'Pas Foto + Full Body Complete',
  'Foto Profil',
  'Paket Keluarga Mini',
  'Paket Keluarga Medi',
  'Paket Keluarga Maksi',
  'Paket GI Bestie',
  'Paket GI Mini',
  'Paket GI Medi',
  'Paket GI Maksi',
  'Paket GI Class',
  'Paket GI Concept',
  'Paket GO Mini',
  'Paket GO Maksi',
  'Paket GO Jumbo',
  'Paket Self Photo Mini',
  'Paket Self Photo Medi',
  'Paket Self Photo Maksi',
  'Paket Wedding Akad',
  'Paket Wedding Bronze',
  'Paket Wedding Silver',
  'Paket Wedding Gold',
  'Paket Wedding Platinum',
];
const BOOKING_HOUR_OPTIONS = Array.from({ length: 24 }, (_, idx) => String(idx).padStart(2, '0'));
const BOOKING_MINUTE_OPTIONS = Array.from({ length: 60 }, (_, idx) =>
  String(idx).padStart(2, '0')
);
const TIME_WHEEL_ITEM_HEIGHT = 36;

function formatBookingDateLabel(isoDate) {
  if (!isoDate) return 'Pilih tanggal';
  const [year, month, day] = isoDate.split('-').map(Number);
  if (!year || !month || !day) return isoDate;
  const date = new Date(year, month - 1, day);
  return format(date, 'dd/MM/yyyy');
}

function parseBookingIsoDate(isoDate) {
  if (!isoDate) return undefined;
  const [year, month, day] = isoDate.split('-').map(Number);
  if (!year || !month || !day) return undefined;
  return new Date(year, month - 1, day);
}

function toBookingIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

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
  const [packageDragging, setPackageDragging] = useState(false);
  const [packageScrolling, setPackageScrolling] = useState(false);
  const [packageEmblaApi, setPackageEmblaApi] = useState(null);
  const [reviewDotPage, setReviewDotPage] = useState(0);
  const [dateComboboxOpen, setDateComboboxOpen] = useState(false);
  const [timeComboboxOpen, setTimeComboboxOpen] = useState(false);
  const [timeDraftHour, setTimeDraftHour] = useState('00');
  const [timeDraftMinute, setTimeDraftMinute] = useState('00');
  const [packageComboboxOpen, setPackageComboboxOpen] = useState(false);
  const [packageComboboxQuery, setPackageComboboxQuery] = useState('');
  const reviewTrackRef = useRef(null);
  const dateComboboxRef = useRef(null);
  const timeComboboxRef = useRef(null);
  const timeHourWheelRef = useRef(null);
  const timeMinuteWheelRef = useRef(null);
  const timeDraftHourRef = useRef('00');
  const timeDraftMinuteRef = useRef('00');
  const timeHourScrollRafRef = useRef(0);
  const timeMinuteScrollRafRef = useRef(0);
  const packageComboboxRef = useRef(null);
  const isPasPhotoActive = PACKAGE_ITEMS[packageSlide]?.id === 'pas-photo';
  const isGroupPhotoClassActive = PACKAGE_ITEMS[packageSlide]?.id === 'group-photo-class';
  const filteredPackageOptions = BOOKING_PACKAGE_OPTIONS.filter((item) =>
    item.toLowerCase().includes(packageComboboxQuery.toLowerCase().trim())
  );

  useEffect(() => {
    PACKAGE_ITEMS.forEach((item) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = item.image;
    });
    // Jangan kosongkan img.src di cleanup: di React Strict Mode (dev) effect mount → unmount → mount
    // membatalkan request/decode untuk URL yang sama dengan <img src> di carousel → slot foto biru kosong.
  }, []);

  /* ── Form booking ── */
  const WA_NUMBER = '6285171610354';

  const [bookingForm, setBookingForm] = useState({
    nama: '',
    tanggal: '',
    jam: '',
    paket: '',
    jumlah: '',
  });
  const selectedBookingDate = parseBookingIsoDate(bookingForm.tanggal);
  const applyBookingTime = (nextHour, nextMinute) => {
    if (nextHour && nextMinute) {
      setBookingForm((prev) => ({ ...prev, jam: `${nextHour}:${nextMinute}` }));
      return;
    }
    setBookingForm((prev) => ({ ...prev, jam: '' }));
  };
  const saveBookingTime = () => {
    applyBookingTime(timeDraftHour, timeDraftMinute);
    setTimeComboboxOpen(false);
  };
  const handleTimeWheelScroll = (event, options, currentValue, setter, rafRef) => {
    const scrollTop = event.currentTarget.scrollTop;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const index = Math.round(scrollTop / TIME_WHEEL_ITEM_HEIGHT);
      const next = options[Math.max(0, Math.min(options.length - 1, index))];
      if (next && next !== currentValue) setter(next);
      rafRef.current = 0;
    });
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const { nama, tanggal, jam, paket, jumlah } = bookingForm;
    if (!nama.trim() || !tanggal || !jam || !paket.trim()) {
      window.alert('Lengkapi nama, tanggal, jam, dan paket terlebih dahulu.');
      return;
    }

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
    if (!dateComboboxOpen && !timeComboboxOpen && !packageComboboxOpen) return undefined;

    const handleClickOutside = (event) => {
      if (!dateComboboxRef.current?.contains(event.target)) {
        setDateComboboxOpen(false);
      }
      if (!timeComboboxRef.current?.contains(event.target)) {
        setTimeComboboxOpen(false);
      }
      if (!packageComboboxRef.current?.contains(event.target)) {
        setPackageComboboxOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dateComboboxOpen, timeComboboxOpen, packageComboboxOpen]);

  useEffect(() => {
    timeDraftHourRef.current = timeDraftHour;
  }, [timeDraftHour]);

  useEffect(() => {
    timeDraftMinuteRef.current = timeDraftMinute;
  }, [timeDraftMinute]);

  useEffect(() => {
    if (!timeComboboxOpen) return;
    const hourIndex = Math.max(0, BOOKING_HOUR_OPTIONS.indexOf(timeDraftHourRef.current));
    const minuteIndex = Math.max(0, BOOKING_MINUTE_OPTIONS.indexOf(timeDraftMinuteRef.current));
    requestAnimationFrame(() => {
      if (timeHourWheelRef.current) {
        timeHourWheelRef.current.scrollTop = hourIndex * TIME_WHEEL_ITEM_HEIGHT;
      }
      if (timeMinuteWheelRef.current) {
        timeMinuteWheelRef.current.scrollTop = minuteIndex * TIME_WHEEL_ITEM_HEIGHT;
      }
    });
  }, [timeComboboxOpen]);

  useEffect(
    () => () => {
      if (timeHourScrollRafRef.current) cancelAnimationFrame(timeHourScrollRafRef.current);
      if (timeMinuteScrollRafRef.current) cancelAnimationFrame(timeMinuteScrollRafRef.current);
    },
    []
  );

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

  const syncPackageSlide = useCallback(() => {
    if (!packageEmblaApi) return;
    setPackageSlide(packageEmblaApi.selectedScrollSnap());
  }, [packageEmblaApi]);

  useEffect(() => {
    if (!packageEmblaApi) return;
    syncPackageSlide();
    const onPointerDown = () => setPackageDragging(true);
    const onScroll = () => setPackageScrolling(true);
    const onSettle = () => {
      setPackageDragging(false);
      setPackageScrolling(false);
    };
    packageEmblaApi.on('select', syncPackageSlide);
    packageEmblaApi.on('reInit', syncPackageSlide);
    packageEmblaApi.on('pointerDown', onPointerDown);
    packageEmblaApi.on('scroll', onScroll);
    packageEmblaApi.on('settle', onSettle);
    return () => {
      packageEmblaApi.off('select', syncPackageSlide);
      packageEmblaApi.off('reInit', syncPackageSlide);
      packageEmblaApi.off('pointerDown', onPointerDown);
      packageEmblaApi.off('scroll', onScroll);
      packageEmblaApi.off('settle', onSettle);
    };
  }, [packageEmblaApi, syncPackageSlide]);

  const activeIndex = NAV_ITEMS.findIndex((item) => item.id === activeSection);

  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    const headerOffset = 84;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  const logoSrc = `${process.env.PUBLIC_URL}/najaa-studio-logo.png`;

  return (
    <main className="landing-page">
      <nav
        className="top-nav"
        aria-label="Navigasi utama"
        data-logo-on-light={logoOnLightBg ? 'true' : 'false'}
      >
        <div className="nav-glass" style={{ '--active-index': activeIndex < 0 ? 0 : activeIndex }}>
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
          <div className="nav-items">
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
            <Carousel
              className="packages-carousel"
              opts={{ align: 'center', loop: true, duration: 34 }}
              setApi={setPackageEmblaApi}
              aria-label="Paket foto"
            >
              <CarouselContent
                className={`packages-track ${packageDragging ? 'is-dragging' : ''} ${packageScrolling ? 'is-scrolling' : ''} ${isPasPhotoActive ? 'is-pas-photo-active' : ''} ${isGroupPhotoClassActive ? 'is-group-photo-class-active' : ''}`}
              >
                {PACKAGE_ITEMS.map((pkg, idx) => {
                  const isCenter = idx === packageSlide;
                  const isPrev =
                    idx === ((packageSlide - 1 + PACKAGE_SLIDE_COUNT) % PACKAGE_SLIDE_COUNT);
                  const isNext = idx === ((packageSlide + 1) % PACKAGE_SLIDE_COUNT);
                  const imgSrc =
                    pkg.image ??
                    `https://placehold.co/720x960/4a5f7a/d8e4f5/png?text=Paket+${idx + 1}`;
                  return (
                    <CarouselItem
                      key={pkg.id}
                      className={`package-slide ${isCenter ? 'is-active' : ''} ${isPrev ? 'is-prev' : ''} ${isNext ? 'is-next' : ''}`}
                    >
                      <div className="package-slide-frame">
                        <img
                          src={imgSrc}
                          alt={isCenter ? (pkg.imageAlt || '') : ''}
                          className={pkg.imageClassName ? `package-slide-img ${pkg.imageClassName}` : 'package-slide-img'}
                          loading="eager"
                          decoding="sync"
                          fetchPriority="high"
                        />
                        <div className={`package-slide-overlay ${isCenter ? 'is-active' : ''}`} aria-hidden={!isCenter}>
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
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="packages-controls">
                <div className="packages-arrows">
                  <CarouselPrevious className="package-arrow" aria-label="Paket sebelumnya">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M15 18l-6-6 6-6"
                        stroke="currentColor"
                        strokeWidth="2.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </CarouselPrevious>
                  <CarouselNext className="package-arrow" aria-label="Paket berikutnya">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M9 18l6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </CarouselNext>
                </div>
                <a
                  href="https://wa.me/c/6285171610354"
                  className="packages-see-more"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lihat selengkapnya
                </a>
              </div>
            </Carousel>
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
                  <div ref={dateComboboxRef} style={{ position: 'relative' }}>
                    <button
                      id="book-tanggal"
                      type="button"
                      className="contact-input contact-date-trigger contact-date-trigger--outline"
                      data-empty={!bookingForm.tanggal}
                      aria-haspopup="listbox"
                      aria-expanded={dateComboboxOpen}
                      onClick={() => {
                        setDateComboboxOpen((prev) => !prev);
                        setTimeComboboxOpen(false);
                        setPackageComboboxOpen(false);
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span className="contact-date-trigger-label">
                        {bookingForm.tanggal ? formatBookingDateLabel(bookingForm.tanggal) : 'Pilih tanggal'}
                      </span>
                      <span aria-hidden="true">▾</span>
                    </button>
                    {dateComboboxOpen && (
                      <div className="booking-date-popover booking-date-popover--start">
                        <DayPicker
                          mode="single"
                          selected={selectedBookingDate}
                          onSelect={(date) => {
                            if (!date) return;
                            setBookingForm((prev) => ({ ...prev, tanggal: toBookingIsoDate(date) }));
                            setDateComboboxOpen(false);
                          }}
                          disabled={{ before: new Date() }}
                          defaultMonth={selectedBookingDate}
                          className="booking-calendar"
                        />
                      </div>
                    )}
                    <input type="hidden" name="tanggal" value={bookingForm.tanggal} />
                  </div>
                </div>
                <div className="contact-field">
                  <label className="contact-label" htmlFor="book-jam">Jam</label>
                  <div ref={timeComboboxRef} style={{ position: 'relative' }}>
                    <button
                      id="book-jam"
                      type="button"
                      className="contact-input"
                      data-empty={!bookingForm.jam}
                      aria-haspopup="listbox"
                      aria-expanded={timeComboboxOpen}
                      onClick={() => {
                        setTimeComboboxOpen((prev) => !prev);
                        const [existingHour = '', existingMinute = ''] = bookingForm.jam.split(':');
                        setTimeDraftHour(existingHour || '00');
                        setTimeDraftMinute(existingMinute || '00');
                        setDateComboboxOpen(false);
                        setPackageComboboxOpen(false);
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span className="contact-combobox-label">{bookingForm.jam || 'Pilih jam'}</span>
                      <span aria-hidden="true">▾</span>
                    </button>
                    {timeComboboxOpen && (
                      <div
                        className="booking-time-popover"
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 8px)',
                          left: 0,
                          right: 0,
                          background: '#fff',
                          border: '1px solid #d8d8d8',
                          borderRadius: 12,
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
                          zIndex: 12000,
                          overflow: 'hidden',
                        }}
                      >
                        <p className="booking-time-title">Pilih jam</p>
                        <div className="booking-time-wheel">
                          <div className="booking-time-wheel-col" role="listbox" aria-label="Pilih jam">
                            <div
                              ref={timeHourWheelRef}
                              className="booking-time-wheel-scroll"
                              onScroll={(event) =>
                                handleTimeWheelScroll(
                                  event,
                                  BOOKING_HOUR_OPTIONS,
                                  timeDraftHour,
                                  setTimeDraftHour,
                                  timeHourScrollRafRef
                                )
                              }
                            >
                              <div className="booking-time-wheel-spacer" aria-hidden="true" />
                              {BOOKING_HOUR_OPTIONS.map((hour) => (
                                <button
                                  key={`hour-${hour}`}
                                  type="button"
                                  className={`booking-time-wheel-item ${timeDraftHour === hour ? 'is-active' : ''}`}
                                  onClick={() => setTimeDraftHour(hour)}
                                >
                                  {hour}
                                </button>
                              ))}
                              <div className="booking-time-wheel-spacer" aria-hidden="true" />
                            </div>
                          </div>
                          <span className="booking-time-separator">:</span>
                          <div className="booking-time-wheel-col" role="listbox" aria-label="Pilih menit">
                            <div
                              ref={timeMinuteWheelRef}
                              className="booking-time-wheel-scroll"
                              onScroll={(event) =>
                                handleTimeWheelScroll(
                                  event,
                                  BOOKING_MINUTE_OPTIONS,
                                  timeDraftMinute,
                                  setTimeDraftMinute,
                                  timeMinuteScrollRafRef
                                )
                              }
                            >
                              <div className="booking-time-wheel-spacer" aria-hidden="true" />
                              {BOOKING_MINUTE_OPTIONS.map((minute) => (
                                <button
                                  key={`minute-${minute}`}
                                  type="button"
                                  className={`booking-time-wheel-item ${timeDraftMinute === minute ? 'is-active' : ''}`}
                                  onClick={() => setTimeDraftMinute(minute)}
                                >
                                  {minute}
                                </button>
                              ))}
                              <div className="booking-time-wheel-spacer" aria-hidden="true" />
                            </div>
                          </div>
                        </div>
                        <div className="booking-time-actions">
                          <button
                            type="button"
                            className="booking-time-action"
                            onClick={() => setTimeComboboxOpen(false)}
                          >
                            Batal
                          </button>
                          <button
                            type="button"
                            className="booking-time-action is-primary"
                            onClick={saveBookingTime}
                          >
                            Simpan
                          </button>
                        </div>
                      </div>
                    )}
                    <input type="hidden" name="jam" value={bookingForm.jam} />
                  </div>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-field">
                  <label className="contact-label" htmlFor="book-paket">Paket</label>
                  <div
                    ref={packageComboboxRef}
                    style={{ position: 'relative' }}
                  >
                    <button
                      id="book-paket"
                      type="button"
                      className="contact-input"
                      data-empty={!bookingForm.paket}
                      aria-haspopup="listbox"
                      aria-expanded={packageComboboxOpen}
                      onClick={() => {
                        setPackageComboboxOpen((prev) => !prev);
                        setDateComboboxOpen(false);
                        setTimeComboboxOpen(false);
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <span className="contact-combobox-label">{bookingForm.paket || 'Pilih paket foto'}</span>
                      <span aria-hidden="true">▾</span>
                    </button>

                    {packageComboboxOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 8px)',
                          left: 0,
                          right: 0,
                          background: '#fff',
                          border: '1px solid #d8d8d8',
                          borderRadius: 12,
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
                          zIndex: 12000,
                          overflow: 'hidden',
                        }}
                      >
                        <input
                          type="text"
                          className="contact-input"
                          placeholder="Cari paket..."
                          value={packageComboboxQuery}
                          onChange={(e) => setPackageComboboxQuery(e.target.value)}
                          style={{
                            borderRadius: 0,
                            border: 0,
                            borderBottom: '1px solid #ececec',
                          }}
                        />
                        <ul
                          role="listbox"
                          aria-label="Daftar paket foto"
                          style={{
                            listStyle: 'none',
                            margin: 0,
                            padding: 6,
                            maxHeight: 220,
                            overflowY: 'auto',
                          }}
                        >
                          {filteredPackageOptions.length ? (
                            filteredPackageOptions.map((item) => (
                              <li key={item}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setBookingForm((prev) => ({ ...prev, paket: item }));
                                    setPackageComboboxOpen(false);
                                    setPackageComboboxQuery('');
                                  }}
                                  style={{
                                    width: '100%',
                                    border: 0,
                                    background: 'transparent',
                                    textAlign: 'left',
                                    borderRadius: 8,
                                    padding: '10px 12px',
                                    fontSize: 14,
                                    cursor: 'pointer',
                                  }}
                                >
                                  {item}
                                </button>
                              </li>
                            ))
                          ) : (
                            <li style={{ padding: '10px 12px', color: '#777' }}>
                              Paket tidak ditemukan.
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                    <input type="hidden" name="paket" value={bookingForm.paket} />
                  </div>
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
              <p className="contact-link-value">najaa-studio.vercel.app</p>
              <a href="https://najaa-studio.vercel.app/" className="contact-link-action" target="_blank" rel="noreferrer">Visit Now</a>
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
                href="https://najaa-studio.vercel.app/"
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
