// components/AdCard.ts

import { AdCardData } from '../data/ad-card.ts';

// Рендер одной карточки
export function createAdCard(data: AdCardData): HTMLElement {
  const card = document.createElement('div');
  card.className = 'ad-card';

  card.innerHTML = `
    <img class="ad-card__image" src="${data.imageSrc}" alt="${data.title}" />
    <div class="ad-card__body">
      <a href="${data.url || '#'}" class="ad-card__title">${data.title}</a>
      <div class="ad-card__price">${data.price.toLocaleString()} ₽</div>
      <div class="ad-card__location">${data.address}</div>
      <div class="ad-card__date">${data.dateTime}</div>
    </div>
  `;
  return card;
}
