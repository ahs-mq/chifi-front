import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "hero_title": "High-Fidelity, Reimagined",
                    "hero_subtitle": "Discover the hidden world of High-Fidelity audio. Engineered for purists, priced for everyone. Experience the SADA difference in Muscat.",
                    "email_placeholder": "Email or WhatsApp (e.g. 91234567)",
                    "cta_button": "Notify Me",
                    "success_msg": "You're on the list! We'll reach out soon.",
                    "error_msg": "Something went wrong. Try again.",

                    "showcase_title": "The Perfect Chain",
                    "iem_title": "IEMs",
                    "iem_desc": "Multi-driver precision for every detail.",
                    "cable_title": "Cables and Dongles",
                    "cable_desc": "Interchangeable connections for any device—anytime, anywhere.",
                    "dac_title": "DACs",
                    "dac_desc": "Clean, amplified power at home or on the go.",
                    "trust_fast_delivery": "Fast Local Delivery",
                    "trust_returns": "No-Hassle Returns",
                    "trust_auth": "Authenticity Guaranteed",
                    "footer_tag": "Based in Muscat. Shipping across the Sultanate."
                }
            },
            ar: {
                translation: {
                    "hero_title": "مفهوم جديد للصوت",
                    "hero_subtitle": "اكتشف عالم الصوتيات عالي الدقة الخفي. هندسة مخصصة لعشاق النقاء، وبأسعار تناسب الجميع. اختبر فرق صدى.",
                    "email_placeholder": "البريد الإلكتروني أو الواتساب",
                    "cta_button": "أبلغني عند التوفر",
                    "success_msg": "تمت إضافتك! سنتواصل معك قريباً.",
                    "error_msg": "حدث خطأ ما. حاول مرة أخرى.",

                    "showcase_title": "السلسلة المثالية",
                    "iem_title": "سماعات داخل الأذن (IEMs)",
                    "iem_desc": "دقة عالية في التفاصيل مع مشغلات متعددة.",
                    "cable_title": "كابلات",
                    "cable_desc": "خيارات توصيل مرنة تتناسب مع جميع أجهزتك في كل مكان.",
                    "dac_title": "محولات الصوت (DAC)",
                    "dac_desc": "طاقة نظيفة ومضخمة، للاستخدام المنزلي أو أثناء التنقل.",
                    "trust_fast_delivery": "توصيل محلي سريع",
                    "trust_returns": "إرجاع سهل ومرن",
                    "trust_auth": "منتجات أصلية مضمونة",
                    "footer_tag": "من مسقط. نشحن لجميع أنحاء السلطنة."
                }
            }
        },
        fallbackLng: "en",
        detection: {
            order: ['querystring', 'localStorage', 'navigator'],
            caches: ['localStorage']
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;