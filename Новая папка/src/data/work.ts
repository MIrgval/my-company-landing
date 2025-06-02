export interface WorkCard {
  id: number;
  title: string;
  description: string;
  img: string;
}

export const works: WorkCard[] = [
  {
    id: 1,
    title: 'ЖК «Северный Парк»',
    description: 'Монолитные работы 25 000 м²',
    img: '/assets/p1.jpg'
  },
  {
    id: 2,
    title: 'Деловой центр',
    description: 'Фасадные решения «под ключ»',
    img: '/assets/work2.jpg'
  },
  {
    id: 3,
    title: 'Коттеджный посёлок',
    description: 'Инженерные сети и благоустройство',
    img: '/assets/work3.jpg'
  }
  // …добавляйте по надобности
];
