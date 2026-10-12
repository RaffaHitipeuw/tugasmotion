import { Globe, Smartphone, Cloud, Layers, Cpu, ShieldCheck } from 'lucide-react';
import ContentContainer from '@/components/ContentContainer';
import Reveal from '@/components/Reveal';

const services = [
  {
    id: 'web-dev',
    title: 'Web & Enterprise Portal',
    desc: 'Pengembangan portal interaktif, dashboard analitik, dan sistem backend terintegrasi.',
    icon: Globe,
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    desc: 'Aplikasi mobile iOS & Android dengan UI/UX mulus dan integrasi cloud real-time.',
    icon: Smartphone,
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    desc: 'Modernisasi infrastruktur cloud, pipeline CI/CD otomatis, dan arsitektur microservices.',
    icon: Cloud,
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    desc: 'Desain produk berpusat pada pengguna, prototype interaktif, dan scalable design system.',
    icon: Layers,
  },
  {
    id: 'ai-automation',
    title: 'AI & Data Intelligence',
    desc: 'Integrasi automasi cerdas, machine learning, dan chatbot untuk efisiensi bisnis.',
    icon: Cpu,
  },
  {
    id: 'security-audit',
    title: 'Cyber Security & Audit',
    desc: 'Penetration testing, audit keamanan aplikasi, dan implementasi enkripsi standar industri.',
    icon: ShieldCheck,
  },
];

function ServicesSection() {
  return (
    <section id='layanan' className='py-16 bg-slate-50'>
      <ContentContainer isRelative={false}>

        {/* Header Section */}
        <div className='text-center max-w-xl mx-auto mb-10'>
          <Reveal variant='fade'>
            <span className='text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-main'>
              Layanan
            </span>
          </Reveal>
          <Reveal delay={80} as='h2' className='text-2xl md:text-3xl font-bold text-[#112352] mt-2'>
            Solusi Rekayasa Digital
          </Reveal>
          <Reveal delay={140} as='p' className='text-slate-600 text-sm mt-2'>
            Layanan teknologi untuk skalabilitas dan keandalan sistem Anda.
          </Reveal>
        </div>

        {/* Grid Layanan */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.id}
                delay={(index % 3) * 90}
                className='apple-card bg-white p-6 rounded-xl border border-slate-200'>
                <div className='w-10 h-10 rounded-lg bg-orange-50 text-main flex items-center justify-center mb-4'>
                  <Icon size={20} />
                </div>
                <h3 className='text-base font-bold text-[#112352] mb-1.5'>
                  {item.title}
                </h3>
                <p className='text-slate-600 text-xs sm:text-sm leading-relaxed'>
                  {item.desc}
                </p>
              </Reveal>
            );
          })}
        </div>

      </ContentContainer>
    </section>
  );
}

export default ServicesSection;
