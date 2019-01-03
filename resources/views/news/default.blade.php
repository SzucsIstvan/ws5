@extends('layouts.app')

@section('data_for_vue')
    @if ($data)
        <script>
        try {
            window.__data = {!! $data !!};

        } catch (e) {
            console.error("error", "Json parse error on base data", e)
        }
        </script>
    @endif
@endsection
