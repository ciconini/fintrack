export function getTypeIcon(item: string): string {
  let icon = '';
  switch (item) {
    case 'MARKET':
      icon = 'fa-solid fa-cart-shopping';
      break;
    case 'DOGS':
      icon = 'fa-solid fa-paw';
      break;
    case 'SHOPPING':
      icon = 'fa-solid fa-bag-shopping';
      break;
    case 'RESTAURANT':
      icon = 'fa-solid fa-utensils';
      break;
    case 'HEALTH':
      icon = 'fa-solid fa-kit-medical';
      break;
    case 'TRANSPORT':
      icon = 'fa-solid fa-train-subway';
      break;
    default:
      icon = 'fa-solid fa-receipt';
      break;
  }
  return icon;
}