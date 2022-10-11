import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const HomeSkeletonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const SearchBarSkeleton = styled(Skeleton)`
  margin-top: 4.5rem;
`

export const PostsSkeleton = styled.section`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;

  list-style-type: none;

  @media only screen and (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`
