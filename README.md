# Cat Lounge Cafe

Statyczny projekt zaliczeniowy typu one-page przygotowany w Angularze na bazie projektu `Cat-Cafe-main`. Wersja w tym repo została uproszczona do jednej strony i dopasowana do wymagań z pliku PWI 2025/2026:

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
npm.cmd start
```

Aplikacja uruchamia się domyślnie pod `http://localhost:4200/`.

## Struktura folderów

- `src/app/app.ts` zawiera dane sekcji i prostą logikę menu mobilnego.
- `src/app/app.html` buduje całą stronę one-page.
- `src/app/app.scss` odpowiada za layout, komponenty i breakpoints.
- `src/styles.scss` trzyma style globalne, zmienne CSS i fokus dostępności.
- `public/` zawiera lokalne zdjęcia i logo użyte w projekcie.
- `docs/ux-analysis.md` zawiera krótką analizę UX wymaganą do oddania.

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

Te elementy zostały zaprojektowane jako spójny zestaw wizualny, co odpowiada wymaganiom pracy grupowej dotyczącym wspólnych komponentów i tokenów stylu.

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