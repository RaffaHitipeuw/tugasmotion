import { ArrowRight, MessageSquare } from 'lucide-react';
import heroImg from '@/assets/hero-img.png';
import { handleSmoothScroll } from '@/utils/functions';
import ContentContainer from '@/components/ContentContainer';
import Reveal from '@/components/Reveal';

const stats = [
  { value: '150+', label: 'Proyek Selesai' },
  { value: '99.8%', label: 'Kepuasan Klien' },
  { value: '50+', label: 'Mitra Aktif' },
  { value: '24/7', label: 'Dukungan' },
];

function HeroSection() {
  return (
    <header id='beranda' className='py-12 md:py-20 overflow-hidden'>
      <ContentContainer isRelative={false} className='flex flex-col gap-12'>
        <div className='flex flex-col lg:flex-row items-center gap-10'>

          {/* Kolom Kiri: Teks & Tombol */}
          <div className='w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left'>
            <Reveal delay={0}>
              <span className='w-fit mx-auto lg:mx-0 px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-main'>
                Digital Solution Partner
              </span>
            </Reveal>

            <Reveal delay={90} as='h1' className='text-3xl md:text-5xl font-bold text-[#112352] leading-tight'>
              Explore IT, <span className='text-main'>Inspire You</span>
            </Reveal>

            <Reveal delay={180} as='p' className='text-slate-600 text-base max-w-lg mx-auto lg:mx-0'>
              Sandbox membantu instansi pemerintah dan swasta dalam mengembangkan produk teknologi informasi dan transformasi digital.
            </Reveal>

            <Reveal delay={270} className='flex items-center justify-center lg:justify-start gap-3 pt-2'>
              <button
                onClick={(e) => handleSmoothScroll(e, '/#layanan')}
                className='press-scale flex items-center gap-2 px-6 py-2.5 rounded-full bg-main hover:bg-[#dc7300] text-white text-sm font-semibold transition-colors duration-300 ease-out cursor-pointer'>
                <span>Lihat Layanan</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={(e) => handleSmoothScroll(e, '/#kontak')}
                className='press-scale flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:border-slate-400 transition-colors duration-300 ease-out cursor-pointer'>
                <MessageSquare size={16} />
                <span>Kontak</span>
              </button>
            </Reveal>
          </div>

          {/* Kolom Kanan: Gambar Hero */}
          <Reveal
            delay={140}
            variant='fade'
            className='w-full lg:w-1/2 flex justify-center'>
            <img
              src={heroImg}
              alt='Hero'
              className='max-w-[420px] w-full h-auto object-contain'
            />
          </Reveal>

        </div>

        {/* Stats Strip */}
        <Reveal
          delay={320}
          className='grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-xl text-center border border-slate-100'>
          {stats.map((item) => (
            <div key={item.label} className='p-2'>
              <h3 className='text-2xl font-bold text-main'>{item.value}</h3>
              <p className='text-xs text-slate-500 mt-1'>{item.label}</p>
            </div>
          ))}
        </Reveal>
      </ContentContainer>
    </header>
  );
}

export default HeroSection;
