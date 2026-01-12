import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          about: {
            title: "About Us",
            bodyText: "Coffee Aria was born from a simple idea: coffee is not just a drink, but an experience. Our goal is to bring quality coffee together with clean design and a warm atmosphere.We value balance in every cup. The aroma of the bean, proper brewing, and simplicity in presentation are inseparable parts of our approach. Every drink and dessert on our menu is selected and prepared with this mindset.At Coffee Aria, there is no rush. This is a place to pause. Whether you are working, thinking, or simply taking a breath, we offer a cup of coffee to accompany your moment.We believe in small details rather than big claims. Clean flavors, clear choices, and a sincere approach. Coffee Aria aims to be a calm and reliable stop for everyone who loves coffee.You are invited to discover us with a cup of coffee."

          }
        }
      },
      tr: {
        translation: {
          about: {
            title: "Hakkımızda",
            bodyText:"Coffee Aria, kahvenin sadece bir içecek değil, bir deneyim olduğuna inanan küçük bir fikirle doğdu. Amacımız; kaliteli kahveyi, sade bir tasarım ve sıcak bir atmosferle buluşturmak.\nHer fincanda dengeyi önemsiyoruz. Çekirdeğin aroması, doğru demleme ve sunumun sadeliği bizim için ayrılmaz bir bütün. Menüde yer alan her içecek ve tatlı, bu anlayışla seçildi ve hazırlandı.\nCoffee Aria’da acele yok. Burası bir mola yeri. Çalışırken, düşünürken ya da sadece nefes almak istediğinizde size eşlik edecek bir fincan kahve sunuyoruz.\nBiz büyük iddialar yerine küçük detaylara inanıyoruz. Temiz tatlar, net seçimler ve samimi bir yaklaşım. Coffee Aria, kahveyi seven herkes için sakin ve güvenilir bir durak olmayı hedefliyor.\nBir fincan kahveyle tanışmaya davetlisiniz"

          }
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
