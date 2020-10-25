<template>
    <div>
        <div class="container mx-auto text">
            <div class="text-4xl">Posts</div>
            <div v-if="$apollo.queries.topic.loading">Loading...</div>
            <div v-else>
                <PostList v-for="post in topic.posts" :key="post.id" :post="post" class="mb-8"></PostList>
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
            topic: {
                query: gql`query($slug: String!) {
                    topic(slug: $slug) {
                        id
                        name
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
                    }
                }`,
                variables() {
                    return {
                        slug: this.$route.params.slug
                    }
                }
            }
        }
    }
</script>
