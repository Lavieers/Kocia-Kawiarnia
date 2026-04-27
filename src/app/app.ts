import { Component } from '@angular/core';

type NavItem = {
  label: string;
  href: string;
};

type VisitCard = {
  title: string;
  description: string;
};

type MenuTab = 'fixed' | 'seasonal';
type FixedMenuCategory = 'coffee' | 'tea' | 'food' | 'cold';

type MenuItem = {
  name: string;
  price: string;
  details?: string;
};

type MenuGalleryImage = {
  src: string;
  alt: string;
};

type MenuSection = {
  title: string;
  subtitle: string;
  gallery: MenuGalleryImage[];
  items: MenuItem[];
};

type CatCard = {
  name: string;
  trait: string;
  description: string;
  image: string;
  alt: string;
};

type MomentCard = {
  title: string;
  description: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isMenuOpen = false;
  selectedMenuTab: MenuTab = 'fixed';
  selectedFixedCategory: FixedMenuCategory = 'coffee';
  readonly currentYear = new Date().getFullYear();

  readonly navigation: NavItem[] = [
    { label: 'Start', href: '#start' },
    { label: 'O kawiarni', href: '#o-nas' },
    { label: 'Wizyta', href: '#wizyta' },
    { label: 'Menu', href: '#menu' },
    { label: 'Koty', href: '#koty' },
    { label: 'Chwile u nas', href: '#wydarzenia' },
    { label: 'Kontakt', href: '#kontakt' }
  ];

  readonly visitCards: VisitCard[] = [
    {
      title: 'Spokojna strefa spotkań',
      description:
        'Wnętrze zostało zaplanowane tak, by łatwo znaleźć miejsce na rozmowę, randkę albo spokojną godzinę z książką.'
    },
    {
      title: 'Koty na pierwszym planie',
      description:
        'Każdy rezydent ma własne tempo. Goście poznają koty naturalnie, bez pośpiechu i bez naruszania ich komfortu.'
    },
    {
      title: 'Małe przyjemności',
      description:
        'Aromatyczna kawa, lekkie przekąski i miękkie światło budują atmosferę, do której chce się wracać.'
    }
  ];
  
  readonly fixedMenuSections: Record<FixedMenuCategory, MenuSection> = {
    coffee: {
      title: 'Kawy i dodatki',
      subtitle: 'Stałe klasyki',
      gallery: [
        { src: '/cats/cynamon.jpg', alt: 'Rudy kot cynamon stojący na blacie w kawiarni' },
        { src: '/cats/helena.jpg', alt: 'Kotka Helena patrząca prosto w obiektyw' },
        { src: '/cats/zmorek.jpg', alt: 'Kot zmorek wyglądający z kartonu' }
      ],
      items: [
        { name: 'Espresso / doppio', price: '9 / 12 zł', details: '30 / 60 ml' },
        { name: 'Flat white', price: '14 zł', details: '200 ml' },
        { name: 'Americano małe / duże', price: '9 / 12 zł', details: '200 / 300 ml' },
        { name: 'Cappuccino małe / duże', price: '13 / 15 zł', details: '200 / 300 ml' },
        { name: 'Caffe latte', price: '16 zł', details: '450 ml' },
        { name: 'Mokka', price: '18 zł', details: '450 ml' },
        { name: 'Frappe', price: '18 zł', details: '450 ml' },
        { name: 'Kawa zielona', price: '12 zł', details: 'solo, z wanilią, cynamonem lub kokosem' },
        {
          name: 'Syropy do kawy',
          price: '3 zł',
          details: 'karmel, słony karmel, wanilia, kokos, banan, amaretto, tiramisu'
        },
        { name: 'Mleko bez laktozy / owsiane', price: '3 zł' }
      ]
    },
    tea: {
      title: 'Herbaty',
      subtitle: 'Rozgrzewające i klasyczne',
      gallery: [
        { src: '/cats/diuna.jpg', alt: 'Kotka diuna odpoczywająca przy oknie' },
        { src: '/cats/alex-ada.jpg', alt: 'Alex i Ada wtuleni obok siebie' },
        { src: '/cats/helena.jpg', alt: 'Kotka Helena w spokojnym portrecie' }
      ],
      items: [
        {
          name: 'Dilmah',
          price: '9 zł',
          details: 'ceylon, earl grey, english breakfast, zielona, porzeczkowa, malinowa i inne'
        },
        { name: 'Herbata z mlekiem', price: '10 zł' },
        { name: 'Matcha latte', price: '20 zł' },
        { name: 'Ceylon / biała / zielona / blue earl grey', price: '13 zł' },
        { name: 'Wulkan energii', price: '15 zł' },
        { name: 'Dotyk anioła', price: '15 zł' },
        { name: 'Relax', price: '15 zł' },
        { name: 'Leśny sen', price: '15 zł' }
      ]
    },
    food: {
      title: 'Coś na większy głód',
      subtitle: 'Wytrawne menu',
      gallery: [
        { src: '/cats/fafel-felka.jpg', alt: 'Fafel i felka odpoczywający razem' },
        { src: '/cats/cynamon.jpg', alt: 'Cynamon z bliska na tle kawiarni' },
        { src: '/cats/diuna.jpg', alt: 'Diuna w bocznym profilu przy oknie' }
      ],
      items: [
        { name: 'Tosty klasyczne', price: '18 zł', details: 'ser, szynka, papryka, ketchup' },
        {
          name: 'Tosty meksykańskie',
          price: '19,5 zł',
          details: 'kurczak, kukurydza, fasola, sos sriracha mayo'
        },
        {
          name: 'Tosty wegańskie',
          price: '19,5 zł',
          details: 'pasztet warzywny, pomidorki koktajlowe, sos barbecue'
        },
        {
          name: 'Wrap z kurczakiem',
          price: '29,5 zł',
          details: 'kurczak, awokado, papryka, mix sałat, sos musztardowo-miodowy'
        },
        {
          name: 'Wrap z wieprzowiną',
          price: '29,5 zł',
          details: 'wieprzowina, kukurydza, fasola, mix sałat, sos barbecue'
        },
        {
          name: 'Wrap wegański',
          price: '29,5 zł',
          details: 'warzywa do wyboru, mix sałat, sos sriracha lub barbecue'
        }
      ]
    },
    cold: {
      title: 'Shakes, smoothie i inne napoje',
      subtitle: 'Na zimno',
      gallery: [
        { src: '/cats/zmorek.jpg', alt: 'Kot zmorek wychylający się z pudełka' },
        { src: '/cats/alex-ada.jpg', alt: 'Alex i Ada na wspólnym zdjęciu' },
        { src: '/cats/cynamon.jpg', alt: 'Cynamon patrzący prosto w obiektyw' }
      ],
      items: [
        {
          name: 'Shakes',
          price: '16 zł',
          details: 'waniliowy, czekoladowy, truskawkowy, jabłko i banan, gruszka i melon, oreo'
        },
        { name: 'Smoothie owocowe', price: '18 zł', details: 'mango lassi, mangomania, mango truskawka' },
        {
          name: 'Smoothie klasyczne',
          price: '18 zł',
          details: 'zdrowy szpinak, energiczny szpinak, czuję miętę, niezły ananas'
        },
        {
          name: 'Smoothie deserowe',
          price: '18 zł',
          details: 'nie fit, zmysłowe chilli, truskawka i banan, truskawka i kiwi, truskawka i mięta'
        },
        { name: 'Woda / Coca-Cola / Sprite / Fanta / Nestea / soki Tymbark', price: '8 zł' },
        { name: 'Świeżo wyciskany sok z pomarańczy', price: '18 zł' }
      ]
    }
  };

  readonly seasonalMenuSections: MenuSection[] = [
    {
      title: 'Aktualne menu sezonowe',
      subtitle: '4 wiosenne propozycje',
      gallery: [
        { src: '/cats/helena.jpg', alt: 'Kotka Helena patrząca spokojnie w obiektyw' },
        { src: '/cats/diuna.jpg', alt: 'Kotka diuna wypoczywająca przy oknie' },
        { src: '/cats/fafel-felka.jpg', alt: 'Fafel i felka odpoczywający obok siebie' }
      ],
      items: [
        {
          name: 'Lemoniada fiołkowa',
          price: '18 zł',
          details: '450 ml • świeżo wyciskany sok z cytryny, owoce i syrop fiołkowy'
        },
        {
          name: 'Sakura rooibos',
          price: '18 zł',
          details: '450 ml • herbata rooibos z syropem z kwiatu wiśni, także w wersji na zimno'
        },
        {
          name: 'Różane frappe',
          price: '24 zł',
          details: '450 ml • mrożona kawa z mlekiem, lodami, syropem różanym i bitą śmietaną'
        },
        {
          name: 'Tosty „Jajeczne”',
          price: '24 zł',
          details:
            'chrupiący chlebek z pastą a’la jajeczną na bazie tofu, ze szczypiorkiem i sałatką z warzyw z sosem balsamicznym • vegan'
        }
      ]
    }
  ];