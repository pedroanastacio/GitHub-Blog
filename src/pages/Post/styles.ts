import styled from 'styled-components'

export const PostContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const PostHeader = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.75rem;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;
    cursor: pointer;

    svg {
      width: 0.75rem;
      height: 0.75rem;
    }

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const PostTitle = styled.h1`
  margin-top: 1.25rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-title']};
`

export const PostInfo = styled.footer`
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 0.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    color: ${(props) => props.theme['base-span']};

    svg {
      color: ${(props) => props.theme['base-label']};
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`
