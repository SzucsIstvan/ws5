<template>

    <div v-if="!loading">
        <h2>News</h2>
        <div class="card">
            <div class="card-header">
                <ul class="nav nav-pills card-header-pills justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" :class="(view === 'line')?'active':''" @click.prevent="line" href="#">
                            <i class="mdi md-24">view_headline</i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="(view === 'brick')?'active':''" @click.prevent="brick" href="#">
                            <i class="mdi md-24">view_module</i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="(view === 'magazine')?'active':''" @click.prevent="magazine" href="#">
                            <i class="mdi md-24">view_quilt</i>
                        </a>
                    </li>

                </ul>
            </div>
            <transition name="slide-fade" mode="in-out">
                <news-item-line :news="news" v-if="view === 'line'"></news-item-line>
                <news-item-brick :news="news" v-if="view === 'brick'"></news-item-brick>
                <news-item-magazine :news="news" v-if="view === 'magazine'"></news-item-magazine>
            </transition>
        </div>
    </div>

</template>
<script>

import NewsItemLine from "./newstypes/NewsItemLine";
import NewsItemBrick from "./newstypes/NewsItemBrick";
import NewsItemMagazine from "./newstypes/NewsItemMagazine";
import mixins from "../routes/getterMixins";

import { mapGetters, mapMutations } from "vuex";

export default {
    mixins: [mixins],
    data() {
        return {
            // news: [],
            loading: false,
            url: ""
        }
    },
    components: {
        NewsItemLine,
        NewsItemBrick,
        NewsItemMagazine
    },
    methods: {
        ...mapMutations({
            line: "viewType/setLine",
            brick: "viewType/setBrick",
            magazine: "viewType/setMagazine"
        })

    },

    computed: {
        news() {
            return this.$store.getters["news/contentByUrl"](this.$route.path);
        },
        ...mapGetters({
            view: "viewType/getType",
        }),
    },

}
</script>
