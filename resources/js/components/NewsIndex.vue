<template>
    <div>
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
            <news-item-line :news="news" v-if="view === 'line'"></news-item-line>
            <news-item-brick :news="news" v-if="view === 'brick'"></news-item-brick>
            <news-item-magazine :news="news" v-if="view === 'magazine'"></news-item-magazine>
        </div>
    </div>
</template>
<script>

import NewsItemLine from "./newstypes/NewsItemLine";
import NewsItemBrick from "./newstypes/NewsItemBrick";
import NewsItemMagazine from "./newstypes/NewsItemMagazine";

import { mapGetters } from "vuex";

export default {

    data() {
        return {
            news: [],
            // view: this.$store.getters.getType,
        }
    },
    components: {
        NewsItemLine,
        NewsItemBrick,
        NewsItemMagazine
    },
    methods: {
        line() {
            // this.view = "line";
            this.$store.dispatch("viewType/changeView", "line");
        },
        brick() {
            // this.view = "brick";
            this.$store.dispatch("viewType/changeView", "brick");
        },
        magazine() {
            // this.view = "magazine";
            this.$store.dispatch("viewType/changeView", "magazine");
        }
    },
    computed: {
        ...mapGetters({view: "viewType/getType"}),
    },
    mounted() {
        axios.get("/news").then((response) => {

            this.news = response.data;
        });
    },
}
</script>
