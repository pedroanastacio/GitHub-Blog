import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const PostsCount = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 4.5rem;

  h3 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const Posts = styled.ul`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;

  list-style-type: none;

  @media only screen and (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const PostCard = styled.li`
  height: 16.25rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-label']};
  }
`

export const PostCardHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  h2 {
    flex: 3;

    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    flex: 1;

    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    text-align: right;
  }
`

export const PostCardContent = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const NoPosts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  margin-top: 3rem;

  svg {
    color: ${(props) => props.theme['base-label']};
    font-size: 1.5rem;
  }

  span {
    text-align: center;
    font-size: 1.1rem;
    color: ${(props) => props.theme['base-label']};
  }
`
