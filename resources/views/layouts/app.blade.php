<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @yield("data_for_vue")
</head>
<body>
    <div id="app">

    <nav-bar appname="{{ config('app.name', 'Laravel') }}"
        register-url="{{ route('register') }}"
    ></nav-bar>

    <main class="py-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-sm-12">
                    <transition name="slide-fade" mode="in-out">
                        <router-view></router-view>
                    </transition>
                    <div id="not-vue">
                        @yield('content')
                    </div>

                </div>
            </div>
        </div>
    </main>
</div>
</body>
</html>
