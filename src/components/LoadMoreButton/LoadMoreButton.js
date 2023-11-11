import { LoadMoreButtonStyle } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ nextPage }) => {
  return (
    <LoadMoreButtonStyle onClick={nextPage}>Load more</LoadMoreButtonStyle>
  );
};
