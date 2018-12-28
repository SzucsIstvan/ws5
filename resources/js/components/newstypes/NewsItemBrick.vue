<template>
    <div class="card-body">
        <div class="card-columns">
            <div class="card" v-for="value in news">
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
    ]
}
</script>
