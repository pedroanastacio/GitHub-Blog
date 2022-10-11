import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { api } from '../lib/axios'

export interface Post {
  number: number
  publishedAt: string
  title: string
  body: string
}

interface PostsState {
  posts: Post[]
  loading: boolean
}

interface PostContextType {
  postsState: PostsState
  fetchPosts: (query?: string) => Promise<void>
}

export const PostsContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PropsWithChildren) {
  const [postsState, setPostsState] = useState<PostsState>({
    posts: [],
    loading: true,
  })

  const fetchPosts = useCallback(async (query = '') => {
    const { data } = await api.get('/search/issues', {
      params: {
        q: `repo:pedroanastacio/GitHub-Blog is:issue ${query}`,
      },
    })

    const postsData = data.items.map((post: any) => {
      return {
        number: post.number,
        publishedAt: post.created_at,
        title: post.title,
        body: post.body,
      }
    })

    setPostsState({
      posts: postsData,
      loading: false,
    })
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ postsState, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
