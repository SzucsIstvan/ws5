7<template>
    <div class="container" >
        <div class="row justify-content-center" v-if="!isLoggedIn">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>

                    <div class="card-body">
                        <form method="POST" @submit.prevent="post">
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input id="email"
                                    type="email"
                                    v-model="email"
                                    class="form-control"
                                    :class="$store.state.login.errors ? 'is-invalid' : ''"
                                    name="email" value="" required autofocus />
                                    <span v-if="$store.state.login.errors" class="invalid-feedback" role="alert">
                                        <strong>{{ $store.state.login.errors.email }}</strong>
                                    </span>
                                </div>



                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input id="password"
                                    type="password"
                                    class="form-control"
                                    v-model="password"
                                    name="password" required />
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input"
                                        type="checkbox"
                                        name="remember"
                                        id="remember" />

                                        <label class="form-check-label" for="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    props: ["loginUrl"],

    computed: {
        ...mapGetters({
            isLoggedIn: "login/isLoggedIn",
        }),
        email: {
            ...mapGetters({get: "login/email"}),
            ...mapMutations({set: "login/email"})
        },
        password: {
            ...mapGetters({get: "login/password"}),
            ...mapMutations({set: "login/password"})
        }
    },
    methods: {
        ...mapActions({
            post: "login/postLogin",
        })
    },
    mounted () {
        // console.log("Login mounted", this.$route, this.loginUrl)
    },
    beforeDestroy() {
        this.$store.dispatch("login/reset");
    }
}
</script>
