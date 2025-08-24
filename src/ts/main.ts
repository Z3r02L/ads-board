import { createAdCard } from './components/AdCard';
import { items } from './data/ad-card';

const container = document.querySelector('.catalog__grid'); // например, твоя сетка

// Используем items, например, для генерации карточек
items.forEach(item => {
  container?.appendChild(createAdCard(item));
});
