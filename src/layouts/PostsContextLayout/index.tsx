import { Outlet } from 'react-router-dom'

import { PostsProvider } from '../../contexts/PostsContext'

export function PostsContextLayout() {
  return (
    <PostsProvider>
      <Outlet />
    </PostsProvider>
  )
}
