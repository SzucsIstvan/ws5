<template>
    <div class="card-body">
        <div class="card my-1" v-for="value in news">
            <div class="card-body">
                <router-link :to="value.uri">{{ value.title }}</router-link>
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
