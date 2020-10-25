<template>
    <div class="container mx-auto text">
        <div class="card">
            <div class="text-4xl">All Posts</div>
            <div v-if="$apollo.queries.posts.loading">Loading...</div>
            <div class="card-body" v-else>
                <PostList v-for="post in posts" :key="post.id" :post="post" class="mb-8"></PostList>
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
            posts: gql`{
                posts {
                    id
                    title
                    lead
                    created_at
                    author {
                        id
                        name
                    }
                }
            }`
        }
    }
</script>
