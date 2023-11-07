export const selectAdverts = state => state.adverts.items;

export const selectError = state => state.adverts.error;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectDisplayedAdverts = state => {
  const allAdverts = state.catalog.items;
return allAdverts;
};