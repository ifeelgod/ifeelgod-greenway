export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  series: string;
  description: string;
  thumbnail: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Community' | 'Worship' | 'Youth' | 'Outreach';
}

export interface Ministry {
  id: string;
  name: string;
  description: string;
  image: string;
}