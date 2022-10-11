import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {
  PostSkeletonCodeBlock,
  PostSkeletonContainer,
  PostSkeletonContent,
  PostSkeletonParagraph,
} from './styles'

export function PostSkeleton() {
  return (
    <PostSkeletonContainer>
      <Skeleton height={168} />

      <PostSkeletonContent>
        <PostSkeletonParagraph count={3.5} />

        <PostSkeletonCodeBlock height={120} />

        <PostSkeletonParagraph count={1.5} />
      </PostSkeletonContent>
    </PostSkeletonContainer>
  )
}
