import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ContentContainer from '@/components/ContentContainer';
import Reveal from '@/components/Reveal';

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesan berhasil dikirim!');
  };

  return (
    <section
      id='kontak'
      className='py-16 bg-white'>
      <ContentContainer isRelative={false}>
        {/* Header */}
        <div className='text-center max-w-xl mx-auto mb-10'>
          <Reveal variant='fade'>
            <span className='text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-main'>
              Kontak
            </span>
          </Reveal>
          <Reveal delay={80} as='h2' className='text-2xl md:text-3xl font-bold text-[#112352] mt-2'>
            Hubungi Kami
          </Reveal>
          <Reveal delay={140} as='p' className='text-slate-600 text-sm mt-2'>
            Diskusikan kebutuhan proyek Anda bersama tim engineer Sandbox.
          </Reveal>
        </div>

        {/* 2 Kolom Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {/* Info Kontak */}
          <Reveal delay={0} className='bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between'>
            <div>
              <h3 className='text-lg font-bold text-[#112352] mb-4'>
                Informasi Kontak
              </h3>

              <div className='space-y-4 text-sm text-slate-600'>
                <div className='flex items-start gap-3'>
                  <MapPin
                    size={18}
                    className='text-main shrink-0 mt-0.5'
                  />
                  <span>TB Simatupang No. 45, Cilandak, Jakarta Selatan</span>
                </div>

                <div className='flex items-center gap-3'>
                  <Mail
                    size={18}
                    className='text-main shrink-0'
                  />
                  <span>halo@sandbox.id</span>
                </div>

                <div className='flex items-center gap-3'>
                  <Phone
                    size={18}
                    className='text-main shrink-0'
                  />
                  <span>+62 812-8899-7700</span>
                </div>
              </div>
            </div>

            <div className='mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500'>
              Senin - Jumat : 08.30 - 17.30 WIB
            </div>
          </Reveal>

          {/* Form Sederhana */}
          <Reveal delay={110}>
            <form
              onSubmit={handleSubmit}
              className='bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4'>
              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1'>
                  Nama Lengkap
                </label>
                <input
                  type='text'
                  required
                  placeholder='Nama Anda'
                  className='w-full px-3 py-2 bg-white rounded-lg border border-slate-200 text-sm outline-none transition-[border-color,box-shadow] duration-300 ease-out focus:border-main focus:ring-2 focus:ring-main/15'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1'>
                  Email
                </label>
                <input
                  type='email'
                  required
                  placeholder='email@domain.com'
                  className='w-full px-3 py-2 bg-white rounded-lg border border-slate-200 text-sm outline-none transition-[border-color,box-shadow] duration-300 ease-out focus:border-main focus:ring-2 focus:ring-main/15'
                />
              </div>

              <div>
                <label className='block text-xs font-semibold text-slate-700 mb-1'>
                  Pesan
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder='Tuliskan pesan Anda...'
                  className='w-full px-3 py-2 bg-white rounded-lg border border-slate-200 text-sm outline-none resize-none transition-[border-color,box-shadow] duration-300 ease-out focus:border-main focus:ring-2 focus:ring-main/15'
                />
              </div>

              <button
                type='submit'
                className='press-scale w-full py-2.5 px-4 rounded-lg bg-main hover:bg-[#dc7300] text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300 ease-out'>
                <span>Kirim Pesan</span>
                <Send size={14} />
              </button>
            </form>
          </Reveal>
        </div>
      </ContentContainer>
    </section>
  );
}

export default ContactSection;
