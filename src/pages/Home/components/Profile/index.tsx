import { useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { api } from '../../../../lib/axios'

import {
  Avatar,
  ProfileContainer,
  ProfileData,
  ProfileHeader,
  ProfileInfo,
} from './styles'

interface ProfileType {
  avatar_url: string
  name: string
  user_url: string
  bio: string
  username: string
  company: string
  followers: number
}

interface ProfileState {
  data: ProfileType
  loading: boolean
}

export function Profile() {
  const [profileState, setProfileState] = useState<ProfileState>({
    data: {} as ProfileType,
    loading: true,
  })

  const profile = profileState.data

  const hasOnlyOneFollower = profile.followers === 1

  const fetchProfile = useCallback(async () => {
    const { data } = await api.get('/users/pedroanastacio')

    setProfileState({
      data: {
        avatar_url: data.avatar_url,
        name: data.name,
        user_url: data.html_url,
        bio: data.bio,
        username: data.login,
        company: data.company ?? 'Rocketseat',
        followers: data.followers,
      },
      loading: false,
    })
  }, [])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  if (profileState.loading) {
    return <Skeleton height={168} />
  }

  return (
    <ProfileContainer>
      <Avatar src={profile.avatar_url} alt="" />

      <ProfileData>
        <ProfileHeader>
          <h1>{profile.name}</h1>

          <a href={profile.user_url} target="_blank" rel="noreferrer">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileHeader>

        <p>{profile.bio}</p>

        <ProfileInfo>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {profile.username}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {profile.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {profile.followers} {hasOnlyOneFollower ? 'seguidor' : 'seguidores'}
          </span>
        </ProfileInfo>
      </ProfileData>
    </ProfileContainer>
  )
}
