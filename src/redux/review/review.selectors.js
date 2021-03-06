import { createSelector } from 'reselect';

const selectReview = state => state.review;

export const selectReviews = createSelector([selectReview], review =>
  review.reviews ? review.reviews : []
);

export const selectIsReviewsFetching = createSelector(
  [selectReview],
  review => review.isFetching
);

export const selectIsReviewsLoaded = createSelector(
  [selectReview],
  review => !!review.reviews
);
