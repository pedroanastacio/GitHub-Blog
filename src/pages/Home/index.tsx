import { useNavigate } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentSlash } from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

import { Profile } from './components/Profile'
import { SearchBar } from './components/SearchBar'
import { PostsContext } from '../../contexts/PostsContext'
import { dateRelativeToNow } from '../../utils/dateRelativeToNow'

import {
  HomeContainer,
  NoPosts,
  PostCard,
  PostCardContent,
  PostCardHeader,
  Posts,
  PostsCount,
} from './styles'
import { HomeSkeleton } from './components/HomeSkeleton'

export function Home() {
  const { posts, loading } = useContextSelector(PostsContext, (context) => {
    return context.postsState
  })
  const navigate = useNavigate()

  const totalPosts = posts.length
  const hasOnlyOnePost = totalPosts === 1
  const noPosts = posts.length === 0

  function handleViewPost(number: number) {
    navigate(`/${number}`)
  }

  if (loading) {
    return <HomeSkeleton />
  }

  return (
    <HomeContainer>
      <Profile />

      <PostsCount>
        <h3>Publicações</h3>
        <span>
          {totalPosts} {hasOnlyOnePost ? 'publicação' : 'publicações'}
        </span>
      </PostsCount>

      <SearchBar />

      <section>
        {noPosts ? (
          <NoPosts>
            <FontAwesomeIcon icon={faCommentSlash} />
            <span>Nenhuma publicação encontrada</span>
          </NoPosts>
        ) : (
          <Posts>
            {posts.map((post) => {
              return (
                <PostCard
                  key={post.number}
                  onClick={() => handleViewPost(post.number)}
                >
                  <PostCardHeader>
                    <h2>{post.title}</h2>
                    <span>{dateRelativeToNow(post.publishedAt)}</span>
                  </PostCardHeader>

                  <PostCardContent>
                    <ReactMarkdown
                      rehypePlugins={[rehypeRaw]}
                      remarkPlugins={[remarkGfm, remarkBreaks]}
                    >
                      {post.body}
                    </ReactMarkdown>
                  </PostCardContent>
                </PostCard>
              )
            })}
          </Posts>
        )}
      </section>
    </HomeContainer>
  )
}
