import { useState } from 'react';
import ContentContainer from '@/components/ContentContainer';
import Reveal from '@/components/Reveal';

const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'workshop', label: 'Workshop' },
  { id: 'rnd', label: 'R&D Sprint' },
  { id: 'launch', label: 'Rilis Produk' },
];

const galleryItems = [
  {
    id: 1,
    category: 'workshop',
    title: 'Cloud Architecture Masterclass',
    location: 'Bandung',
    date: 'Feb 2026',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    category: 'launch',
    title: 'Peluncuran GovSmart Portal',
    location: 'Jakarta',
    date: 'Jan 2026',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    category: 'rnd',
    title: 'AI Engineering Hackathon',
    location: 'Yogyakarta',
    date: 'Des 2025',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    category: 'workshop',
    title: 'Cyber Security Drill',
    location: 'Jakarta',
    date: 'Nov 2025',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    category: 'launch',
    title: 'Go-Live Sandbox ERP v3',
    location: 'Surabaya',
    date: 'Okt 2025',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    category: 'rnd',
    title: 'Healthcare UX Sprint',
    location: 'Bandung',
    date: 'Sep 2025',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
  },
];

function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id='galeri'
      className='py-16 bg-slate-50'>
      <ContentContainer isRelative={false}>
        {/* Header */}
        <div className='text-center max-w-xl mx-auto mb-8'>
          <Reveal variant='fade'>
            <span className='text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-main'>
              Galeri
            </span>
          </Reveal>
          <Reveal delay={80} as='h2' className='text-2xl md:text-3xl font-bold text-[#112352] mt-2'>
            Aktivitas & Dokumentasi
          </Reveal>
          <Reveal delay={140} as='p' className='text-slate-600 text-sm mt-2'>
            Dokumentasi workshop inovasi dan rilis teknologi Sandbox.
          </Reveal>
        </div>

        {/* Filter Buttons */}
        <div className='flex flex-wrap items-center justify-center gap-2 mb-8'>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`press-scale px-4 py-1.5 rounded-full text-xs font-semibold transition-colors duration-300 ease-out cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-main text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          key={activeCategory}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className='apple-card bg-white rounded-xl overflow-hidden border border-slate-200'
              style={{
                animation: `fadeUpIn 0.5s cubic-bezier(0.16,1,0.3,1) both`,
                animationDelay: `${(index % 3) * 70}ms`,
              }}>
              <div className='aspect-video w-full overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]'
                />
              </div>
              <div className='p-4'>
                <div className='flex items-center justify-between text-[11px] text-slate-500 mb-1'>
                  <span>{item.date}</span>
                  <span>{item.location}</span>
                </div>
                <h3 className='font-bold text-sm text-[#112352]'>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </ContentContainer>
    </section>
  );
}

export default GallerySection;
