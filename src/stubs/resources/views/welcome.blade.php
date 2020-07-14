<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Default</title>
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
        <div id="app"></div>
        <script src="/js/app.js"></script>
    </body>
</html>