import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {
  HomeSkeletonContainer,
  PostsSkeleton,
  SearchBarSkeleton,
} from './styles'

export function HomeSkeleton() {
  return (
    <HomeSkeletonContainer>
      <Skeleton height={168} />

      <SearchBarSkeleton height={50} />

      <PostsSkeleton>
        {[...Array(4)].map((_, index: number) => (
          <Skeleton key={index} height={260} />
        ))}
      </PostsSkeleton>
    </HomeSkeletonContainer>
  )
}
