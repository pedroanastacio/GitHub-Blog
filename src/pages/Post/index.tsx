/* eslint-disable camelcase */
import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { api } from '../../lib/axios'
import { dateRelativeToNow } from '../../utils/dateRelativeToNow'

import { PostContent } from './components/PostContent'

import {
  PostContainer,
  PostHeader,
  Navigation,
  PostTitle,
  PostInfo,
} from './styles'
import { PostSkeleton } from './components/PostSkeleton'

interface PostType {
  author: string
  publishedAt: string
  title: string
  body: string
  comments: number
  url: string
}

interface PostState {
  data: PostType
  loading: boolean
}

export function Post() {
  const [postState, setPostState] = useState<PostState>({
    data: {} as PostType,
    loading: true,
  })
  const { number } = useParams()
  const navigate = useNavigate()

  const post = postState.data

  const hasOnlyOneComment = post.comments === 1

  const fetchPost = useCallback(async () => {
    const { data } = await api.get(
      `/repos/pedroanastacio/GitHub-Blog/issues/${number}`,
    )
    const { user, created_at, title, body, comments, html_url } = data

    setPostState({
      data: {
        author: user.login,
        publishedAt: created_at,
        title,
        body,
        comments,
        url: html_url,
      },
      loading: false,
    })
  }, [number])

  function handleBackClick() {
    navigate(-1)
  }

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  if (postState.loading) {
    return <PostSkeleton />
  }

  return (
    <PostContainer>
      <PostHeader>
        <Navigation>
          <a onClick={handleBackClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </a>

          <a href={post.url} target="_blank" rel="noreferrer">
            VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Navigation>

        <PostTitle>{post.title}</PostTitle>

        <PostInfo>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {post.author}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {post.publishedAt && dateRelativeToNow(post.publishedAt)}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} {hasOnlyOneComment ? 'comentário' : 'comentários'}
          </span>
        </PostInfo>
      </PostHeader>

      <PostContent>{post.body}</PostContent>
    </PostContainer>
  )
}
