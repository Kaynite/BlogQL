<template>
    <div>
        <router-link :to="{name:'post', params: {id: post.id} }">
            <h4 class="text-2xl mb-3">{{ post.title }}</h4>
        </router-link>
        <p class="mb-3">{{ post.lead }}</p>
        <div class="text-gray-600 text-sm text-gre">
            By: {{ post.author.name }} - 3 Hours ago
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>

<style>

</style>