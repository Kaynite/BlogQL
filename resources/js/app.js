/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import TopicPosts from './components/TopicPosts';
import AuthorPosts from './components/AuthorPosts';
import Notfound from './components/Notfound';
import post from './components/Post'
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import moment from 'moment';

window.Vue = Vue;
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/post/:id', // Required Parameter
        name: 'post',
        component: post
    },
    {
        path: '/topic/:slug',
        name: 'topic',
        component: TopicPosts
    },
    {
        path: '/author/:id',
        name: 'author',
        component: AuthorPosts
    },
    {
        path: '*',
        name: '404',
        component: Notfound
    }
];

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    uri: 'http://blogql.test/graphql'
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.filter('timeago', value => moment(value).fromNow());
Vue.filter('date', value => moment(value).format('MMMM D, Y'));

const app = new Vue({
    el: '#app',
    apolloProvider,
    router,
});
