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