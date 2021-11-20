import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [],
        isPostLoading: false,
        selectedSort: '',
        searchQuery: '',
        pageNumber: 1,
        limit: 10,
        totalPage: 0,
        sortOption: [
            {value: 'title', name: 'By title'},
            {value: 'body', name: 'By description'}
        ]
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => {
                return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
            })
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post =>
                post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setPost(state, post) {
            state.post = post
        },
        setLoading(state, bool) {
            state.isPostsLoading = bool
        },
        setPage(state, page) {
            state.page = page
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },

    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                commit('setLoading', true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
               commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
               commit('setPosts', response.data)

            } catch (e) {
                alert('error')
            } finally {
                commit('setLoading', false)
            }
        },
        async fetchPost({ commit}) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
            commit('setPost', response.data)
            } catch (e) {
                alert('error')
            }
        }
    },
    namespaced: true
}