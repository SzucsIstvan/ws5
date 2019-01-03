<template>
    <div class="card-body">
        <router-link class="card bg-dark text-white" :to="mainNews.uri">
          <img class="card-img" :src="mainNews.picture_url" alt="Card image">
          <div class="card-img-overlay">
            <h5 class="card-title">{{ mainNews.title }}</h5>
            <p class="card-text" v-html="mainNews.description"></p>
            <p class="card-text">Last updated {{ mainNews.updated_at }}</p>
          </div>
        </router-link>
        <div class="card-columns">
            <div class="card my-1" v-for="value in otherNews">
                <img :src="value.picture_url" class="card-img-top" width="286" height="180" />
                <div class="card-body">
                    <h5 class="card-title">{{ value.title }}</h5>
                    <p class="card-text">
                        {{ value.description }}
                    </p>
                    <router-link :to="value.uri" class="btn btn-primary">Go</router-link>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {

    props: [
        'news'
    ],

    computed: {
        mainNews() {
            return this.news[0];
        },
        otherNews() {
            return this.news.slice(1);
        }
    }
}
</script>
