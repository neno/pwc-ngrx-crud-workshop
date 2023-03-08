export interface IEvent {
  id: string;
  date: Date;
  beginsAt: string;
  title: string;
  description: string;
  location: string;
  movies: number[];
  guests: string[];
}
