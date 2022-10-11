import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { PostsContextLayout } from './layouts/PostsContextLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route element={<PostsContextLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/:number" element={<Post />} />
      </Route>
    </Routes>
  )
}
