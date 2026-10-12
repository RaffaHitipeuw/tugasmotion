import { Star, Quote, Building } from 'lucide-react';
import ContentContainer from '@/components/ContentContainer';
import Reveal from '@/components/Reveal';

const partners = [
  { name: 'Kementerian Kominfo', category: 'Pemerintah' },
  { name: 'Pemprov Jabar', category: 'Pemda' },
  { name: 'Bank Mandiri', category: 'Finansial' },
  { name: 'Telco Global', category: 'Telekomunikasi' },
  { name: 'Biofarma', category: 'Healthcare' },
  { name: 'Nusantara Logistics', category: 'Supply Chain' },
];

const testimonials = [
  {
    id: 1,
    name: 'Bambang Sudibyo, M.T.',
    role: 'Kabid TIK & SPBE, Dinas Kominfo',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content:
      'Sistem perizinan terpadu Sandbox memangkas birokrasi dari 5 hari kerja menjadi kurang dari 4 jam. Sangat stabil dan andal.',
  },
  {
    id: 2,
    name: 'Amanda Wijaya',
    role: 'CTO, Nusantara Fintek',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    content:
      'Arsitektur microservices yang dibangun mampu menangani lonjakan 10.000 transaksi per menit tanpa lag saat event besar.',
  },
  {
    id: 3,
    name: 'Dr. Hendra Gunawan',
    role: 'Direktur IT, Mitra Husada Group',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    content:
      'Implementasi Rekam Medis terintegrasi SATUSEHAT berjalan lancar di 4 rumah sakit kami. Sangat intuitif bagi tenaga medis.',
  },
];

function ClientsSection() {
  return (
    <section
      id='klien-kami'
      className='py-16 bg-white'>
      <ContentContainer isRelative={false}>
        {/* Header */}
        <div className='text-center max-w-xl mx-auto mb-10'>
          <Reveal variant='fade'>
            <span className='text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-main'>
              Klien & Mitra
            </span>
          </Reveal>
          <Reveal delay={80} as='h2' className='text-2xl md:text-3xl font-bold text-[#112352] mt-2'>
            Dipercaya Pemimpin Industri
          </Reveal>
          <Reveal delay={140} as='p' className='text-slate-600 text-sm mt-2'>
            Kolaborasi teknologi bersama instansi pemerintah dan industri.
          </Reveal>
        </div>

        {/* Partner Badges */}
        <div className='flex flex-wrap items-center justify-center gap-3 mb-12'>
          {partners.map((p, index) => (
            <Reveal
              key={p.name}
              delay={(index % 6) * 60}
              variant='fade'
              className='flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 transition-colors duration-300 ease-out hover:border-main/40 hover:bg-orange-50/40'>
              <Building
                size={16}
                className='text-main'
              />
              <div>
                <p className='text-xs font-bold text-slate-800'>{p.name}</p>
                <p className='text-[10px] text-slate-500'>{p.category}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {testimonials.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 110}
              className='apple-card bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between relative'>
              <Quote
                size={28}
                className='text-orange-200 absolute top-4 right-4'
              />

              <div>
                <div className='flex items-center gap-1 mb-3'>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className='fill-amber-400 text-amber-400'
                    />
                  ))}
                </div>

                <p className='text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic'>
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className='flex items-center gap-3 pt-3 border-t border-slate-200'>
                <img
                  src={item.avatar}
                  alt={item.name}
                  className='w-9 h-9 rounded-full object-cover'
                />
                <div>
                  <h4 className='text-xs font-bold text-[#112352]'>
                    {item.name}
                  </h4>
                  <p className='text-[11px] text-slate-500'>{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}

export default ClientsSection;
