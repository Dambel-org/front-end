export interface IGym {
  name: string;
  description: string;
  address: string;
  city: {
    id: number;
    name: string;
  };
  gym_owner: {
    id: number;
    user: {
      id: number;
      first_name: string;
      last_name: string;
    };
  };
}