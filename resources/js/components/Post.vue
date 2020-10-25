<template>
    <div>
        <div v-if="$apollo.queries.post.loading">Loading...</div>
        <div class="container mx-auto px-4 mt-20" v-else>
            <p class="text-lg text-gray-600">
                By: <router-link :to="{name: 'author', params: {id: post.author.id}}" class="underline hover:text-black">{{ post.author.name }}</router-link> - {{ post.created_at | timeago }}
            </p>
            <h1 class="text-5xl font-bold my-10">{{ post.title }}</h1>
            <p class="text-gray-700 pb-3 mb-12 whitespace-pre-line">
                {{ post.content }}
            </p>
            <div class="mb-24 flex">
                <div class="mr-4">
                    <img src="https://placehold.it/100/ccc" alt="Avatar" class="w-16 h-16 rounded-full">
                </div>
                <div class="flex flex-col justify-center">
                    <p class="text-xl text-gray-600">Written By: {{ post.author.name }}</p>
                    <p class="text-gray-600">Published in <router-link :to="{name: 'topic', params: {slug: post.topic.slug}}">{{ post.topic.name }}</router-link> on {{ post.created_at | date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
    apollo: {
        post: {
            query: gql`query ($id: ID!) {
                post(id: $id) {
                    id
                    title
                    content
                    created_at
                    author {
                        id
                        name
                    }
                    topic {
                        name
                        slug
                    }
                }
            }`,
            variables() {
                return {
                    id: this.$route.params.id
                }
            },
            error() {
                this.$router.push({name: '404'});
            }
        }
    }
}
</script>

<style>

</style>