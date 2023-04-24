import { create } from 'zustand';
import { IBeerEntity, IBeersStore } from './types';
import { apiService } from '@/common/services';
import { IRequestPagination } from '@/common/services/ApiService/types';
import { DEFAULT_PAGINATION } from './constants';

const useBeersStore = create<IBeersStore>((set, get) => ({
  loadingState: 'done',
  beersList: [],
  hasData: true,
  pagination: DEFAULT_PAGINATION,
  fetchBeers: async (): Promise<void> => {
    const { pagination, beersList } = get();
    set({ loadingState: beersList.length ? 'update' : 'pending' });
    try {
      const { data } = await apiService.get<IBeerEntity[]>('beers', {
        page: pagination.page,
        per_page: pagination.perPage,
      });
      set({
        beersList: [...beersList, ...data],
        loadingState: 'done',
        hasData: true,
      });
    } catch (err) {
      set({ loadingState: 'error' });
    }
  },
  setPagination: (pagination: IRequestPagination): void => {
    set({ pagination, hasData: false });
  },
  resetStore: (): void => {
    set({
      loadingState: 'done',
      beersList: [],
      hasData: true,
      pagination: DEFAULT_PAGINATION,
    });
  },
}));

export default useBeersStore;
