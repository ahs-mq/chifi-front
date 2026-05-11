import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './index.css';
import headphones from './assets/headphones.webp';
import cable from './assets/cable.webp';
import dac from './assets/dac.webp';

function App() {
  const { t, i18n } = useTranslation();
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const currentLang = i18n.language || 'en';
    document.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.lang = currentLang;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Basic validation logic
    const isEmail = contact.includes('@');
    const isPhone = /^\d+$/.test(contact.replace(/\s/g, '').replace('+', ''));

    if (!isEmail && !isPhone) {
      setStatus('error'); // Not a valid email or phone
      return;
    }

    setStatus('loading');
    try {
      await axios.post('https://your-api.railway.app/api/leads', {
        contact: contact,
        type: isEmail ? 'email' : 'whatsapp'
      });
      setStatus('success');
      setContact('');
    } catch (err) {
      setStatus(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-blue-500">
      {/* Header */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-8 md:px-12 z-50 bg-linear-to-b from-zinc-950 to-transparent">
        <div className="text-2xl font-bold tracking-tighter flex items-center" dir="ltr">
          <span className="bg-white text-black px-2 me-2 rounded">S</span>ADA
        </div>
        <button
          onClick={toggleLanguage}
          className="border border-zinc-800 px-5 py-2 rounded-full text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all"
        >
          {i18n.language === 'ar' ? 'ENGLISH' : 'عربي'}
        </button>
      </header>

      {/* Hero Section */}
      <main className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8">
          {t('hero_title')}
        </h1>
        <p className="text-zinc-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed">
          {t('hero_subtitle')}
        </p>

        {/* Lead Gen Form */}
        <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto mb-24">
          <input
            type="text"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder={t('email_placeholder')}
            className="grow bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-2xl focus:outline-none focus:border-blue-500 transition"
          />
          <button
            disabled={status === 'loading'}
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition disabled:opacity-50 whitespace-nowrap"
          >
            {status === 'loading' ? '...' : t('cta_button')}
          </button>
          {status === 'success' && <p className="text-green-500 text-sm mt-2 absolute transform translate-y-16">{t('success_msg')}</p>}
        </form>

        {/* The Trio Showcase */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { id: 'iem', img: headphones },
            { id: 'cable', img: cable },
            { id: 'dac', img: dac }
          ].map((item) => (
            <div key={item.id} className="group bg-zinc-900/50 border border-zinc-900 rounded-3xl overflow-hidden hover:border-zinc-700 transition-all">
              <div className="h-64 overflow-hidden bg-zinc-900">
                <img
                  src={item.img}
                  alt={item.id}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-8 text-start">
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{t(`${item.id}_title`)}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{t(`${item.id}_desc`)}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Trust Bar Section */}
        <section className="flex flex-wrap justify-center gap-8 md:gap-16 border-y border-zinc-900 py-10 opacity-60">
          <div className="flex items-center gap-3">
            <span className="text-xl">🚚</span>
            <span className="text-xs font-bold tracking-widest uppercase">{t('trust_fast_delivery')}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">🔄</span>
            <span className="text-xs font-bold tracking-widest uppercase">{t('trust_returns')}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">🛡️</span>
            <span className="text-xs font-bold tracking-widest uppercase">{t('trust_auth')}</span>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-600 text-xs">
        <p>{t('footer_tag')}</p>
        <p className="mt-2 opacity-50">© 2026 SADA Audio</p>
      </footer>
    </div>
  );
}

export default App;