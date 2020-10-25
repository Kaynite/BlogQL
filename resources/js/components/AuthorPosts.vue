<template>
    <div>
        <div class="container mx-auto text">
            <div class="text-4xl">Posts</div>
            <div v-if="$apollo.queries.user.loading">Loading...</div>
            <div v-else>
                <PostList v-for="post in user.posts" :key="post.id" :post="post" class="mb-8"></PostList>
            </div>
        </div>
    </div>
</template>

<script>
    import gql from 'graphql-tag';
    import PostList from './PostList';

    export default {
        components: {
            PostList
        },
        apollo: {
            user: {
                query: gql`query($id: ID!) {
                    user(id: $id) {
                        name
                        posts {
                            id
                            title
                            lead
                            created_at
                            author {
                                name
                                id
                            }
                        }
                    }
                }`,
                variables() {
                    return {
                        id: this.$route.params.id
                    }
                }
            }
        }
    }
</script>
