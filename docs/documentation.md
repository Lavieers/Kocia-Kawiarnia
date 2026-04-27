# Dokumentacja projektu — Mrau Cafe

## 1. Struktura folderów projektu

```
Kociuba/
├── docs/
│   ├── ux-analysis.md          # analiza UX (punkt 8)
│   └── documentation.md        # dokumentacja projektu (punkt 9)
├── public/
│   ├── cats/                   # zdjęcia kotów rezydentów
│   │   ├── alex-ada.jpg
│   │   ├── cynamon.jpg
│   │   ├── diuna.jpg
│   │   ├── fafel-felka.jpg
│   │   ├── fafel.jpg
│   │   ├── felka.jpg
│   │   ├── helena.jpg
│   │   └── zmorek.jpg
│   ├── adelia.ttf              # czcionka lokalna
│   ├── cat.png
│   ├── cynamon.jpg
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── hero.mp4
│   ├── kawa.jpg
│   ├── koot.png
│   ├── kot.png
│   ├── logo.jpg
│   ├── menu-sezonowe.jpg
│   ├── pirat.jpg
│   ├── separator.svg
│   ├── sezon.jpg
│   ├── sezonmenu.jpg
│   └── test.svg
├── src/
│   ├── app/
│   │   ├── app.html            # szablon głównego komponentu
│   │   ├── app.scss            # style komponentu
│   │   ├── app.spec.ts         # testy jednostkowe
│   │   └── app.ts              # logika komponentu
│   ├── assets/
│   │   └── logo.jpg
│   ├── environments/
│   │   └── environment.ts      # zmienne środowiskowe
│   ├── index.html              # główny plik HTML aplikacji
│   ├── main.ts                 # punkt wejścia Angular
│   └── styles.scss             # style globalne i zmienne CSS
├── .editorconfig
├── .gitignore
├── .prettierrc
├── angular.json                # konfiguracja Angular CLI
├── package.json                # zależności projektu
├── tsconfig.json               # konfiguracja TypeScript
├── tsconfig.app.json
└── README.md
```

---

## 2. Podział plików HTML, CSS i JS/TS

### HTML

| Plik | Rola |
|---|---|
| `src/index.html` | Główny plik HTML aplikacji — punkt montowania Angular (`<app-root>`) |
| `src/app/app.html` | Szablon jedynego komponentu — buduje całą stronę one-page: header, nawigację, wszystkie sekcje i footer |

### CSS / SCSS

| Plik | Rola |
|---|---|
| `src/styles.scss` | Style globalne: reset CSS, zmienne CSS (`--accent-strong`, `--surface-0` itd.), typografia, focus states, skip-link |
| `src/app/app.scss` | Style komponentu: layout sekcji, karty, menu, responsywność (breakpointy 1024px, 960px, 768px, 640px, 480px) |

### TypeScript

| Plik | Rola |
|---|---|
| `src/main.ts` | Punkt wejścia — bootstrapuje aplikację Angular |
| `src/app/app.ts` | Główny komponent `App` — zawiera wszystkie dane (menu, koty, nawigacja) oraz logikę: przełączanie menu mobilnego, zmiana zakładek menu, filtrowanie kategorii |
| `src/app/app.spec.ts` | Testy jednostkowe komponentu |
| `src/environments/environment.ts` | Zmienne środowiskowe (np. URL API w przyszłości) |

---

## 3. Główne komponenty strony

Projekt celowo używa **jednego komponentu Angular** (`AppComponent`) zgodnie z wymaganiami zaliczenia. Wewnątrz komponentu wydzielono logiczne bloki wizualne, zaprojektowane jako reużywalne klasy CSS:

| Klasa CSS | Opis |
|---|---|
| `.info-card` | Karta z tytułem i opisem — używana w sekcji „Jak wygląda wizyta" (3 kolumny) |
| `.menu-card` / `.menu-panel` | Panel menu z galerią zdjęć kotów i listą pozycji z cenami |
| `.cat-card` | Karta kota z zdjęciem, imieniem na naklejce i opisem charakteru |
| `.event-card` | Karta chwili/wydarzenia z tytułem i opisem |
| `.contact-form` | Formularz kontaktowy z polami: imię, e-mail, termin, wiadomość |
| `.button` | Przycisk wielokrotnego użytku w wariantach: `--primary`, `--secondary`, `--full` |
| `.shell` | Kontener szerokości strony (`min(1180px, 100% - 3rem)`) — używany w każdej sekcji |

Dane wszystkich kart (menu, koty, nawigacja, wizyta) są zdefiniowane jako tablice TypeScript w `app.ts` i renderowane przez dyrektywę `@for` w szablonie, co ułatwia przyszłe podpięcie API.

---

## 4. Sposób przygotowania projektu pod przyszłą integrację z backendem

Projekt jest statyczny, ale architektura została celowo przygotowana pod rozbudowę:

### Formularz kontaktowy
Formularz w sekcji `#kontakt` posiada pola `name`, `email`, `date` i `message`. Docelowo można go podpiąć do REST API przez Angular `HttpClient`:

```typescript
// Przykład przyszłej integracji
import { HttpClient } from '@angular/common/http';

this.http.post('/api/reservations', formData).subscribe(response => {
  // obsługa odpowiedzi
});
```

### Dane menu i kart kotów
Dane menu (`fixedMenuSections`, `seasonalMenuSections`) oraz kart kotów (`catCards`) są przechowywane jako tablice obiektów TypeScript z jasno zdefiniowanymi typami (`MenuSection`, `CatCard`). Zastąpienie ich wywołaniem HTTP wymaga tylko zmiany inicjalizacji zmiennych:

```typescript
// Zamiast readonly catCards: CatCard[] = [ ... ]
this.http.get<CatCard[]>('/api/cats').subscribe(cats => {
  this.catCards = cats;
});
```

### Zmienne środowiskowe
Plik `src/environments/environment.ts` jest przygotowany do przechowywania URL-i API, co pozwala na różne konfiguracje dla środowiska deweloperskiego i produkcyjnego.

### Struktura typów
Wszystkie dane opisane są interfejsami TypeScript (`NavItem`, `VisitCard`, `MenuSection`, `CatCard`, `MomentCard`), które można bezpośrednio zmapować na modele backendowe lub odpowiedzi JSON z API.
