import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const PostSkeletonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const PostSkeletonContent = styled.main`
  padding: 2.5rem 2rem;
`

export const PostSkeletonParagraph = styled(Skeleton)`
  margin-bottom: 0.5rem;
  height: 1.5rem;
`

export const PostSkeletonCodeBlock = styled(Skeleton)`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`
