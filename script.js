const translations = {
  en: {
    heading: 'Sign Bridge: Assistive solution for deaf users',
    subheading: 'Sign Bridge helps deaf-mute people communicate without interpreter, using glove and camera AI modes with Arduino and Raspberry Pi.',
    btn1: 'About',
    btn2: 'Members section',
    btn3: 'Get Started',
    aboutTitle: 'About us',
    aboutText: 'GooD team has built Sign Bridge as a low-cost, accessible sign interpretation system for hearing-impaired users.',
    missionTitle: 'Mission',
    missionDesc: 'Create low-cost, infinitely adaptable assistive tech that makes everyday communication accessible.',
    visionTitle: 'Vision',
    visionDesc: 'Become a first-choice platform for gesture-to-speech conversion with IoT glove and AI camera.',
    feature1: '• AI gesture recognition (MediaPipe) with 95% accuracy.',
    feature2: '• Arduino flex-sensor glove, real-time feedback, and Bluetooth connection.',
    feature3: '• Raspberry Pi camera mode for no-glove usage leveraging neural inference.',
    feature4: '• 3-mode output: speech, text, mobile remote control.',
    videoDemoText: 'Realtime gesture recognition demo with visualization.',
    gestureDemoTitle: 'Gesture Detection Demo',
    howItWorksTitle: 'How it works',
    step1Title: 'Wear the Glove',
    step1Desc: 'Put on the Arduino-powered flex-sensor glove for gesture detection.',
    step2Title: 'Make Gestures',
    step2Desc: 'Perform sign language gestures, captured by sensors and AI.',
    step3Title: 'Get Output',
    step3Desc: 'Receive speech, text, or control signals instantly.',
    teamTitle: 'Team members',
    role1: 'Software Engineer',
    role2: 'Designer',
    role3: 'Web Developer',
    role4: 'Content Creator',
    role5: 'Hardware Engineer',
    mentorsTitle: 'Our Mentor',
    mentorRole: 'Mentor',
    role6: 'Mentor',
    techStackTitle: 'Technology Stack',
    hwTitle: 'Hardware',
    softwareTitle: 'Software',
    frontendTitle: 'Frontend',
    sponsorsTitle: 'Our Partners & Sponsors',
    sponsorsDesc: 'We are grateful for the support of our partners. Interested in joining us?',
    sponsorText: 'You could be here',
    contactCta: '📧 Contact us for partnership opportunities',
    emailLabel: 'Email:',
    phoneLabel: 'WhatsApp:',
    roadmapTitle: 'Roadmap',
    phase0Title: 'Phase 0: Research and Planning',
    phase0Desc: 'Studied sign language communication barriers affecting 70 million deaf people worldwide and surveyed the deaf community in Kazakhstan. Selected the hardware: Arduino Mega, flex sensors, and Raspberry Pi. Designed the system as a smart glove combined with an AI camera.',
    phase1Title: 'Phase 1: Prototype Development',
    phase1Desc: 'Built a glove with 5 flex sensors and used Arduino Mega to read the sensor data. Trained a database of 20 gestures in Russian and English, then added voice output.',
    phase2Title: 'Phase 2: AI Camera Integration',
    phase2Desc: 'Deployed Raspberry Pi 5 with a camera and integrated MediaPipe to track 63 hand landmarks, enabling gesture recognition without the glove. Both modes now work together.',
    phase3Title: 'Phase 3: Testing and Calibration',
    phase3Desc: 'Test the system with real users, increase accuracy to 95% or higher, calibrate sensors for different hand sizes, add an OLED display, and optimize system speed.',
    phase4Title: 'Phase 4: Feature Expansion',
    phase4Desc: 'Add phrase recognition and improve the algorithm so it adapts to the user. Also reduce latency and add quick access to frequently used gestures.',
    prototypeTitle: 'Prototype Glove + Demo',
    prototypeGloveTitle: 'Prototype Glove',
    prototypeText: 'Hardware prototype with embedded flex sensors and Arduino data acquisition.',
    videoDemoText: 'Realtime gesture recognition demo with visualization.'
  },
  ru: {
    heading: 'Sign Bridge: помощь глухонемым',
    subheading: 'Sign Bridge помогает глухонемым людям общаться без переводчика, используя режимы искусственного интеллекта в перчатках и камере с помощью Arduino и Raspberry Pi.',
    btn1: 'О нас',
    btn2: 'Команда',
    btn3: 'Начать',
    aboutTitle: 'О нас',
    aboutText: 'Команда GooD создала Sign Bridge как доступную систему интерпретации жестов.',
    missionTitle: 'Миссия',
    missionDesc: 'Разрабатывать доступные технологии, упрощающие коммуникацию для людей с нарушением слуха.',
    visionTitle: 'Видение',
    visionDesc: 'Стать первой платформой для преобразования жестов в речь с помощью IoT и ИИ.',
    feature1: '• Распознавание жестов (MediaPipe) с точностью 95%.',
    feature2: '• Перчатка Arduino с flex-сенсорами, обратной связью и Bluetooth.',
    feature3: '• Режим камеры Raspberry Pi без перчатки на основе нейросети.',
    feature4: '• 3 режима вывода: голос, текст, удаленное управление с телефона.',
    videoDemoText: 'Демонстрация распознавания жестов в реальном времени с визуализацией.',
    gestureDemoTitle: 'Демонстрация распознавания жестов',
    howItWorksTitle: 'Как это работает',
    step1Title: 'Наденьте перчатку',
    step1Desc: 'Наденьте перчатку с датчиками Arduino для обнаружения жестов.',
    step2Title: 'Делайте жесты',
    step2Desc: 'Выполняйте жесты языка жестов, захватываемые сенсорами и ИИ.',
    step3Title: 'Получите вывод',
    step3Desc: 'Получите речь, текст или сигналы управления мгновенно.',
    teamTitle: 'Участники команды',
    role1: 'Инженер программного обеспечения',
    role2: 'Дизайнер',
    role3: 'Веб-разработчик',
    role4: 'Создатель контента',
    role5: 'Инженер аппаратного обеспечения',
    mentorsTitle: 'Наш ментор',
    mentorRole: 'Ментор',
    role6: 'Ментор',
    techStackTitle: 'Технологический стек',
    hwTitle: 'Аппаратура',
    softwareTitle: 'Программное обеспечение',
    frontendTitle: 'Фронтенд',
    sponsorsTitle: 'Наши партнёры и спонсоры',
    sponsorsDesc: 'Мы благодарны поддержке наших партнеров. Заинтересованы присоединиться?',
    sponsorText: 'Вы могли бы быть здесь',
    contactCta: '📧 Свяжитесь с нами для сотрудничества',
    emailLabel: 'Электронная почта:',
    phoneLabel: 'WhatsApp:',
    roadmapTitle: 'Дорожная карта',
    phase0Title: 'Фаза 0: Исследование и планирование',
    phase0Desc: 'Изучили барьеры общения жестового языка для 70 миллионов глухих людей по всему миру и провели опрос среди сообщества глухих в Казахстане. Выбрали оборудование: Arduino Mega, flex-сенсоры и Raspberry Pi. Спроектировали систему: умная перчатка и AI-камера.',
    phase1Title: 'Фаза 1: Разработка прототипа',
    phase1Desc: 'Мы создали перчатку с 5 flex-сенсорами. Для считывания данных сенсоров использовали Arduino Mega. Мы обучили базу из 20 жестов (русский и английский). Также добавили голосовой вывод.',
    phase2Title: 'Фаза 2: Интеграция AI-камеры',
    phase2Desc: 'Мы использовали Raspberry Pi 5 с камерой. Интегрировали MediaPipe для отслеживания 63 точек руки. Это позволило распознавать жесты без перчатки. Оба режима работают вместе.',
    phase3Title: 'Фаза 3: Тестирование и калибровка',
    phase3Desc: 'Задача — протестировать систему с реальными пользователями. Необходимо повысить точность до 95% и выше, откалибровать сенсоры под разные размеры рук, добавить OLED-дисплей и оптимизировать скорость работы системы.',
    phase4Title: 'Фаза 4: Расширение функциональности',
    phase4Desc: 'Задача — добавить распознавание фраз и улучшить алгоритм для адаптации под пользователя. Также необходимо снизить задержку системы и добавить быстрый доступ к часто используемым жестам.',
    prototypeTitle: 'Прототипная перчатка + демо',
    prototypeGloveTitle: 'Прототипная перчатка',
    prototypeText: 'Аппаратный прототип с встроенными flex-сенсорами и сбором данных через Arduino.',
    videoDemoText: 'Демонстрация распознавания жестов в реальном времени с визуализацией.'
  },
  tr: {
    heading: 'Sign Bridge: işitme kaybı çözümü',
    subheading: 'Sign Bridge, Arduino ve Raspberry Pi ile eldiven ve kamera yapay zeka modlarını kullanarak işitme engelli kişilerin tercüman olmadan iletişim kurmasına yardımcı oluyor.',
    btn1: 'Hakkımızda',
    btn2: 'Üyeler',
    btn3: 'Başla',
    aboutTitle: 'Hakkımızda',
    aboutText: 'GooD takımının Sign Bridge projesi işitme engelliler için tasarlandı.',
    missionTitle: 'Misyon',
    missionDesc: 'Herkes için iletişimi kolaylaştıran uygun fiyatlı, ölçeklenebilir yardımcı teknoloji geliştirmek.',
    visionTitle: 'Vizyon',
    visionDesc: 'Nesnelerin interneti eldiveni ve AI kamera ile jestten konuşmaya birinci tercih platform olmak.',
    feature1: '• %95 doğruluk oranıyla jest tanıma (MediaPipe).',
    feature2: '• Arduino flex sensör eldiven, gerçek zamanlı geri bildirim, Bluetooth.',
    feature3: '• Eldivensiz kullanım için Raspberry Pi kamera modu, sinir ağı çıkarımı.',
    feature4: '• 3 çıktı modu: konuşma, metin, mobil uzaktan kontrol.',
    videoDemoText: 'Görselleştirme ile gerçek zamanlı jest tanıma demosu.',
    gestureDemoTitle: 'Jest Algılama Demosu',
    howItWorksTitle: 'Nasıl çalışıyor',
    step1Title: 'Eldiveni giy',
    step1Desc: 'Jest algılama için Arduino destekli flex sensörlü eldiveni giy.',
    step2Title: 'Jest yap',
    step2Desc: 'İşaret dili jestlerini sensörler ve AI tarafından yakala.',
    step3Title: 'Çıktıyı al',
    step3Desc: 'Konuşma, metin veya kontrol sinyallerini anında al.',
    teamTitle: 'Takım üyeleri',
    role1: 'Yazılım Mühendisi',
    role2: 'Tasarımcı',
    role3: 'Web Geliştirici',
    role4: 'İçerik Oluşturucu',
    role5: 'Donanım Mühendisi',
    mentorsTitle: 'Mentorümüz',
    mentorRole: 'Mentor',
    role6: 'Mentor',
    techStackTitle: 'Teknoloji Yığını',
    hwTitle: 'Donanım',
    softwareTitle: 'Yazılım',
    frontendTitle: 'Ön Yüz',
    sponsorsTitle: 'Ortaklarımız ve Sponsorlar',
    sponsorsDesc: 'Ortaklarımızın desteğine teşekkür ederiz. Bize katılmak ilgilendiniz mi?',
    sponsorText: 'Siz burada olabilirdiniz',
    contactCta: '📧 Ortaklık fırsatları için bize ulaşın',
    emailLabel: 'E-posta:',
    phoneLabel: 'WhatsApp:',
    roadmapTitle: 'Yol Haritası',
    phase0Title: 'Aşama 0: Araştırma ve Planlama',
    phase0Desc: 'Dünya genelinde 70 milyon sağır insanın işaret dili iletişimindeki engellerini araştırdık. Kazakistan’daki sağır topluluğuyla anket yaptık. Donanım olarak Arduino Mega, flex sensörleri ve Raspberry Pi’yi seçtik. Sistemi akıllı eldiven ve AI kameranın birleşimi olarak tasarladık.',
    phase1Title: 'Aşama 1: Prototip Geliştirme',
    phase1Desc: '5 adet flex sensörlü bir eldiven geliştirdik ve sensör verilerini okumak için Arduino Mega’yı kullandık. Rusça ve İngilizce 20 jestten oluşan bir veri tabanı eğittik ve sesli çıktı ekledik.',
    phase2Title: 'Aşama 2: AI Kamera Entegrasyonu',
    phase2Desc: 'Raspberry Pi 5 ve kamera kullanıldı. MediaPipe ile 63 el noktası takip sistemi entegre edildi, böylece eldivensiz jest tanıma mümkün oldu. Her iki mod birlikte çalışıyor.',
    phase3Title: 'Aşama 3: Test ve Kalibrasyon',
    phase3Desc: 'Amaç sistemi gerçek kullanıcılarla test etmek. Doğruluğu %95 veya daha fazla seviyeye çıkarmak, sensörleri farklı el boyutlarına göre kalibre etmek, OLED ekran eklemek ve sistem hızını optimize etmek gereklidir.',
    phase4Title: 'Aşama 4: Özelliklerin Genişletilmesi',
    phase4Desc: 'Amaç cümle tanıma özelliği eklemek ve algoritmayı kullanıcıya uyum sağlayacak şekilde geliştirmek. Ayrıca gecikmeyi azaltmak ve sık kullanılan jestlere hızlı erişim eklemek gereklidir.',
    prototypeTitle: 'Prototip Eldiven + Demo',
    prototypeGloveTitle: 'Prototip Eldiven',
    prototypeText: 'Gömülü flex sensörleri ve Arduino veri toplama ile donanım prototipi.',
    videoDemoText: 'Görselleştirme ile gerçek zamanlı jest tanıma demosu.'
  }
};

function setLanguage(lang, translatable) {
  const map = translations[lang] || translations.en;
  translatable.forEach(el => {
    const key = el.getAttribute('data-lang');
    if (map[key]) {
      el.textContent = map[key];
    }
  });
}

function initPage() {
  const langSelect = document.getElementById('language');
  const translatable = document.querySelectorAll('[data-lang]');

  if (!langSelect || !translatable.length) {
    return;
  }

  langSelect.addEventListener('change', e => setLanguage(e.target.value, translatable));
  setLanguage('en', translatable);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section-block').forEach(section => {
    observer.observe(section);
  });
}

document.addEventListener('DOMContentLoaded', initPage);
