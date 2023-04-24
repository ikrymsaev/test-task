import { IRequestPagination } from 'src/App/common/services/ApiService/types';
import { TLoadingState } from 'src/App/common/types';

interface IBeerEntity {
  id: number;
  name: string;
  description: string;
  image_url?: string;
  food_pairing?: string[];
}

interface IBeersStore {
  loadingState: TLoadingState;
  beersList: IBeerEntity[];
  pagination: IRequestPagination;
  hasData: boolean;
  fetchBeers: (pagination?: IRequestPagination) => Promise<void>;
  setPagination: (pagination: IRequestPagination) => void;
  resetStore: () => void;
}

export type { IBeerEntity, IBeersStore };
