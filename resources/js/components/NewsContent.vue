<template>
        <div class="card">
            <img class="card-img-top" :src="news.picture_url" alt="article img">

            <div class="card-body">
                <h1>{{ news.title }}</h1>
                <p>
                    {{ news.created_date }}
                </p>
                <div class="lead" v-html="news.description_html">
                </div>
                <div v-html="news.content_html">
                </div>
            </div>
        </div>
</template>
<script>
import mixins from "../routes/getterMixins";

export default {
    mixins: [mixins],

    computed: {
        news() {
            return this.$store.getters["newscontent/contentByUrl"](this.$route.path);
        },
    },

}
</script>
