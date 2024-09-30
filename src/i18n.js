import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)   // Inicializa i18n con React
  .init({
    resources: {
      es: {
        translation: {
          
          hero_title: "Administra tus finanzas con total seguridad",
          hero_description: "Nuestra plataforma te brinda el control total sobre tu dinero, con la confianza y privacidad que mereces. Simplifica tus transacciones diarias y lleva un registro de tus finanzas en un solo lugar.",
          get_started: "Comenzar",
          learn_more: "Aprender más",

          wallet_heading1: "Tu dinero, bajo control total.",
          wallet_heading2: "Empodera tus finanzas",
          wallet_description: "Nuestra billetera digital innovadora está diseñada para brindarte un control total sobre tus finanzas personales. Ya sea para gestionar tus gastos diarios o planificar el futuro, te ofrecemos una plataforma segura, adaptada a tus necesidades y objetivos financieros.",
          wallet_feature1_title: "Transparencia y simplicidad",
          wallet_feature1_description: "Una experiencia intuitiva que facilita la gestión de tu dinero, sin complicaciones innecesarias.",
          wallet_feature2_title: "Crecimiento flexible",
          wallet_feature2_description: "Nuestra plataforma se adapta a tu evolución financiera, ofreciéndote lo que necesitas para seguir avanzando.",
          wallet_feature3_title: "Seguridad y confianza",
          wallet_feature3_description: "Con la mejor tecnología de encriptación, tus transacciones están protegidas para garantizar tu tranquilidad.",
          
          about_us_title: "Sobre Nosotros",
          about_us_content: "En Transact nos especializamos en crear soluciones financieras innovadoras que agilizan las transacciones digitales. Nos centramos en ofrecer herramientas fáciles de usar y eficientes que mejoren su experiencia financiera.",
          our_team_title: "Nuestro Equipo",
          our_team_content: "Nuestro equipo está formado por profesionales cualificados a los que les apasiona integrar la tecnología con las finanzas. Gracias a nuestra amplia experiencia y conocimientos, trabajamos juntos para desarrollar soluciones que respondan eficazmente a sus necesidades financieras.",
          our_products_title: "Nuestros Productos",
          our_products_content: "Explore nuestro conjunto de productos financieros de vanguardia diseñados para simplificar las transacciones y mejorar su experiencia digital. Desde carteras intuitivas hasta potentes herramientas de transacción, nuestras ofertas están diseñadas para satisfacer las demandas de la gestión financiera moderna.",
          contact_us_title: "Contáctanos",
          contact_us_content: "Estamos aquí para ayudarle con cualquier pregunta o apoyo que pueda necesitar. Póngase en contacto con nosotros para obtener más información sobre cómo nuestras soluciones pueden beneficiarle y para explorar cómo podemos ayudarle a gestionar sus finanzas de manera más eficiente."
        }
      },
      en: {
        translation: {

          hero_title: "Manage your finances with total security",
          hero_description: "Our platform gives you total control over your money, with the trust and privacy you deserve. Simplify your daily transactions and keep track of your finances in one place.",
          get_started: "Get started",
          learn_more: "Learn more",

          wallet_heading1: "Your money, under total control.",
          wallet_heading2: "Empowering your finances",
          wallet_description: "Our innovative digital wallet is designed to give you complete control over your personal finances. Whether managing your day-to-day expenses or planning for the future, we offer a secure, flexible, and easy-to-use platform tailored to your financial needs and goals.",
          wallet_feature1_title: "Transparency and simplicity",
          wallet_feature1_description: "An intuitive experience that makes it easy to manage your money, without unnecessary complications.",
          wallet_feature2_title: "Flexible growth",
          wallet_feature2_description: "Our platform adapts to your financial evolution, offering you what you need to keep moving forward.",
          wallet_feature3_title: "Security and trust",
          wallet_feature3_description: "With the best encryption technology, your transactions are protected to guarantee your peace of mind.",

          about_us_title: "About Us",
          about_us_content: "At Transact, we specialize in creating innovative financial solutions that streamline digital transactions. Our focus is on delivering user-friendly and efficient tools that enhance your financial experience.",
          our_team_title: "Our Team",
          our_team_content: "Our team comprises skilled professionals passionate about integrating technology with finance. With a diverse background and expertise, we work together to develop solutions that cater to your financial needs effectively.",
          our_products_title: "Our Products",
          our_products_content: "Explore our suite of cutting-edge financial products designed to simplify transactions and enhance your digital experience. From intuitive wallets to powerful transaction tools, our offerings are crafted to meet the demands of modern financial management.",
          contact_us_title: "Contact Us",
          contact_us_content: "We are here to assist you with any questions or support you may need. Reach out to us to learn more about how our solutions can benefit you and to explore how we can help you manage your finances more efficiently."
        }
      },
      
    },
    fallbackLng: "en",  // Idioma por defecto
    interpolation: {
      escapeValue: false  // React ya maneja la protección contra inyecciones de código
    }
  });

export default i18n;
