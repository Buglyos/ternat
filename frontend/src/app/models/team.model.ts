export interface Member {
  id: number;
  fullName: string;
  position: string;
  teamId: number;
}

export interface Team {
  id: number;
  name: string;
  city: string;
  league: string;
  members: Member[];
}
