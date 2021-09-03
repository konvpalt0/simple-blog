import React from 'react'
import PostsModule from '../components/PostsList/PostsModule'
import { getPosts } from '../lib/redux/reducers/posts-reducer/posts-reducer'
import { initializeStore } from '../lib/redux/store'

const Index: React.FC = () => <PostsModule />

export default Index

export const getServerSideProps = async () => {
	const reduxStore = initializeStore()
	const { dispatch } = reduxStore
	await getPosts()(dispatch, reduxStore.getState, null)
	return { props: { initialReduxState: reduxStore.getState() } }
}
