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
    photo: '/assets/team1.jpg'
  },
  {
    id: 2,
    name: 'Мария Иванова',
    role: 'Главный инженер',
    photo: '/assets/fase.webp'
  },
  {
    id: 3,
    name: 'Павел Козлов',
    role: 'Прораб',
    photo: '/assets/team3.jpg'
  }
];
