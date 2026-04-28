# Kocia Kawiarnia

Statyczny projekt zaliczeniowy typu one-page przygotowany w Angularze:

- semantyczna struktura HTML5
- nawigacja one-page z kotwicami
- pełna responsywność dla mobile, tablet i desktop
- sekcja w układzie 3 kolumn
- mobilne menu typu hamburger
- użycie CSS variables, Grid i Flex
- poprawne atrybuty `alt`, widoczne focus states i przygotowanie pod WCAG AA
- struktura gotowa do późniejszego podpięcia backendu lub API

## Uruchomienie

```bash
npm.cmd install
ng.cmd serve
```

Aplikacja uruchamia się domyślnie pod `http://localhost:4200/`.

## Struktura folderów

- `src/app/app.ts` zawiera dane sekcji i prostą logikę menu mobilnego.
- `src/app/app.html` buduje całą stronę one-page.
- `src/app/app.scss` odpowiada za layout, komponenty i breakpoints.
- `src/styles.scss` trzyma style globalne, zmienne CSS i fokus dostępności.
- `public/` zawiera lokalne zdjęcia i logo użyte w projekcie.
- `docs/ux-analysis.md` zawiera krótką analizę UX.

## Podział plików

- HTML: semantyczne sekcje `header`, `nav`, `main`, `section`, `footer` zapisane w `app.html`.
- CSS/SCSS: podział na styl globalny i styl komponentu głównego.
- TS: dane kart, linków i obsługa hamburgera w komponencie root.

## Reużywalne elementy

- `button`
- `info-card`
- `menu-card`
- `cat-card`
- `event-card`
- wspólne klasy `shell`, `section-heading`, `section-copy`

Te elementy zostały zaprojektowane jako spójny zestaw wizualny.

## Integracja z backendem

Projekt jest statyczny, ale przygotowany do dalszego rozwoju:

- formularz kontaktowy można podpiąć do REST API lub Angular `HttpClient`
- karty menu i kotów można zasilać z bazy danych lub CMS
- sekcję wydarzeń można rozszerzyć o harmonogram i panel administracyjny

## Dokumentacja jakości

- zastosowano zmienne CSS do kolorów, promieni i cieni
- układ oparto o CSS Grid i Flexbox
- obrazy poza hero korzystają z `loading="lazy"`
- nawigacja i przyciski mają wyraźne stany fokus
- treść i struktura są przygotowane pod dobre wyniki Lighthouse w kategoriach Accessibility, Best Practices i SEO

## Projekt w Figmie

https://www.figma.com/design/wkqu1tWT4xMqlm31hl50Ea/Kocia-Kawiarnia--Mrau-Cafe-?node-id=0-1&t=DHl2msTsFf7EXNTV-1

## Google Lighthouse
<img width="650" height="672" alt="image" src="https://github.com/user-attachments/assets/7bf86995-d3a0-416c-808f-62a8589e9c8c" />

## WAVE Evaluation Tool

<img width="406" height="579" alt="image" src="https://github.com/user-attachments/assets/c3a68cb7-e6b6-4954-9b42-88e92d6c471b" />

## Autorzy

Kinga Łopata, Piotr Kula, Amelia Kucharz
