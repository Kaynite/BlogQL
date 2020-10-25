/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import comp from './components/Home';
import post from './components/Post'
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

window.Vue = Vue;
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: comp
    },
    {
        path: '/post/:id', // Required Parameter
        name: 'post',
        component: post
    }
];

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql'
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    apolloProvider,
    router,
});
