export interface TeamMate {
  id: number;
  name: string;
  role: string;
  photo: string;
}

export const team: TeamMate[] = [
  {
    id: 1,
    name: 'Илья Смирнов',
    role: 'Генеральный директор',
    photo: '../assets/fase.webp'
  },
  {
    id: 2,
    name: 'Мария Иванова',
    role: 'Главный инженер',
    photo: '../assets/fase.webp'
  },
  {
    id: 3,
    name: 'Павел Козлов',
    role: 'Прораб',
    photo: '../assets/'
  },
  {
    id: 4,
    name: 'Павел Козлов',
    role: 'Прораб',
    photo: '../assets/fase.webp'
  },
  {
    id: 5,
    name: 'Павел Козлов',
    role: 'Прораб',
    photo: '../assets/fase.webp'
  }
];
