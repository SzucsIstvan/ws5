<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <router-link class="navbar-brand" to="/">
                {{ appname }}
            </router-link>
            <button class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Left Side Of Navbar -->
            <ul class="navbar-nav mr-auto">

            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
                <!-- Authentication Links -->

                <li class="nav-item" v-if="!$store.state.login.loggedIn">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>

                <li class="nav-item" v-if="!$store.state.login.loggedIn">
                    <a class="nav-link" href="/register">Register</a>
                </li>


                <li class="nav-item dropdown" v-if="$store.state.login.loggedIn">
                    <a id="navbarDropdown"
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                        {{ $store.state.login.email }} <span class="caret"></span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/logout"
                        @click.prevent="submit">Logout</a>
                    </div>
                    <!-- <form id="logout-form" action="/logout" method="POST" style="display: none;">

                    </form> -->
                </li>

            </ul>

    </div>
</div>
</nav>
</template>
<script>
export default {
    props: ["appname", "registerUrl", "logoutUrl"],
    methods: {
        submit() {
            // document.getElementById('logout-form').submit();
            axios.post("/logout").then(response => {
                console.log("logout", response);
            }).catch(err => {
                console.log("logout err", err);
            });
        }
    }
}
</script>
