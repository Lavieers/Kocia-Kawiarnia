type MenuTab = 'fixed' | 'seasonal';
type FixedCategory = 'coffee' | 'tea' | 'food' | 'cold';

const body = document.body;
const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const primaryNav = document.getElementById('primary-navigation');
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.primary-nav a'));

const tabButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-menu-tab]'));
const categoryButtons = Array.from(
  document.querySelectorAll<HTMLButtonElement>('[data-menu-category]'),
);
const menuCategories = document.querySelector<HTMLElement>('.menu-categories');
const hintFixed = document.querySelector<HTMLElement>('[data-tab-hint="fixed"]');
const hintSeasonal = document.querySelector<HTMLElement>('[data-tab-hint="seasonal"]');
const panels = Array.from(document.querySelectorAll<HTMLElement>('[data-panel]'));
const yearTarget = document.querySelector<HTMLElement>('[data-current-year]');

const setMenuOpen = (open: boolean) => {
  body.classList.toggle('menu-open', open);
  primaryNav?.classList.toggle('primary-nav--open', open);
  menuToggle?.setAttribute('aria-expanded', String(open));
};

const showPanel = (panelName: string) => {
  for (const panel of panels) {
    panel.hidden = panel.dataset['panel'] !== panelName;
  }
};

const setActiveTab = (tab: MenuTab, category: FixedCategory) => {
  for (const button of tabButtons) {
    const isActive = button.dataset['menuTab'] === tab;
    button.classList.toggle('menu-switch__button--active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  }

  const fixedMode = tab === 'fixed';
  menuCategories?.toggleAttribute('hidden', !fixedMode);
  hintFixed?.toggleAttribute('hidden', !fixedMode);
  hintSeasonal?.toggleAttribute('hidden', fixedMode);

  if (fixedMode) {
    for (const button of categoryButtons) {
      const isActive = button.dataset['menuCategory'] === category;
      button.classList.toggle('menu-categories__button--active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    }

    showPanel(`fixed-${category}`);
    return;
  }

  for (const button of categoryButtons) {
    button.classList.remove('menu-categories__button--active');
    button.setAttribute('aria-pressed', 'false');
  }

  showPanel('seasonal');
};

menuToggle?.addEventListener('click', () => {
  const willOpen = !primaryNav?.classList.contains('primary-nav--open');
  setMenuOpen(Boolean(willOpen));
});

for (const link of navLinks) {
  link.addEventListener('click', () => setMenuOpen(false));
}

for (const button of tabButtons) {
  button.addEventListener('click', () => {
    const tab = button.dataset['menuTab'] as MenuTab;
    setActiveTab(tab, 'coffee');
  });
}

for (const button of categoryButtons) {
  button.addEventListener('click', () => {
    const category = button.dataset['menuCategory'] as FixedCategory;
    setActiveTab('fixed', category);
  });
}

window.addEventListener(
  'resize',
  () => {
    if (window.innerWidth > 960) {
      setMenuOpen(false);
    }
  },
  { passive: true },
);

yearTarget?.replaceChildren(String(new Date().getFullYear()));
setMenuOpen(false);
setActiveTab('fixed', 'coffee');
