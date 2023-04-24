import { useEffect } from "react";
import useBeersStore from "./store";
import { IBeerEntity } from "./store/types";
import { InfoCard } from "@/modules/InfoCard/InfoCard";
import { InfinityList } from "@/components/InfinityList/InfinityList";

export const BeersList = () => {
  const beersList = useBeersStore((store) => store.beersList);
  const beersLoadingState = useBeersStore((store) => store.loadingState);
  const pagination = useBeersStore((store) => store.pagination);
  const hasData = useBeersStore((store) => store.hasData);
  const setPagination = useBeersStore((store) => store.setPagination);
  const fetchBeers = useBeersStore((store) => store.fetchBeers);
  const resetStore = useBeersStore((store) => store.resetStore);

  useEffect(() => {
    fetchBeers(pagination);
  }, [fetchBeers, pagination])

  useEffect(() => {
    return () => {
      resetStore();
    }
  }, [resetStore])

  const handleScrollEnd = () => {
    if (beersLoadingState === 'done' && hasData) {
      setPagination({ ...pagination, page: pagination.page + 1 })
    }
  }

  if (beersLoadingState === 'pending') {
    return <div>Loading ...</div>
  }
  if (beersLoadingState === 'error') {
    return <div>Something wrong</div>
  }

  return (
    <InfinityList<IBeerEntity>
      data={beersList}
      hasData={hasData}
      onScrollEnd={handleScrollEnd}
      renderItem={(beer) => (
        <InfoCard
          key={beer.id}
          title={beer.name}
          chips={beer.food_pairing}
          avatarUrl={beer.image_url}
          description={beer.description}
        />
      )}
    />
  )
}