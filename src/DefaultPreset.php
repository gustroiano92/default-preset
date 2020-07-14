<?php

namespace Gustroiano92\DefaultPreset;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Container\Container;
use Illuminate\Filesystem\Filesystem;
use Laravel\Ui\Presets\Preset;
use Symfony\Component\Finder\SplFileInfo;

class DefaultPreset extends Preset
{
    public static function install()
    {
        static::updatePackages();
        static::updateStyles();
        static::updateBootstrapping();
        static::updateWelcomePage();
        static::removeNodeModules();
    }

    protected static function updatePackageArray(array $packages)
    {
        return array_merge([
            'vue' => '^2.6.11',
            'vue-template-compiler' => '^2.6.11',
            'laravel-mix' => '^5.0.1',
            'vuetify' => '^2.3.4',
            'vuex' => '^3.5.1',
            'vue-router' => '^3.3.4',
            'vee-validate' => '^3.3.7',
            '@mdi/font' => '^5.3.45',
            'axios' => '^0.19',
            'browser-sync' => '^2.26.7',
            'browser-sync-webpack-plugin' => '^2.0.1',
            'cross-env' => '^7.0.2',
            'lodash' => '^4.17.19',
            'resolve-url-loader' => '^2.3.1',
            'sass' => '^1.20.1',
            'sass-loader' => '^8.0.0',
        ], Arr::except($packages, [
            'bootstrap',
            'bootstrap-sass',
            'popper.js',
            'laravel-mix',
            'jquery',
        ]));
    }

    protected static function updateStyles()
    {
        tap(new Filesystem, function ($filesystem) {
            $filesystem->cleanDirectory(resource_path('js'));
            $filesystem->deleteDirectory(resource_path('sass'));
            $filesystem->delete(public_path('js/app.js'));
            $filesystem->delete(public_path('css/app.css'));

            if (! $filesystem->isDirectory($directory = resource_path('css'))) {
                $filesystem->makeDirectory($directory, 0755, true);
            }
        });

    }

    protected static function updateBootstrapping()
    {
        copy(__DIR__.'/stubs/webpack.mix.js', base_path('webpack.mix.js'));

        copy(__DIR__.'/stubs/resources/js/app.js', resource_path('js/app.js'));

        copy(__DIR__.'/stubs/resources/js/router.js', resource_path('js/router.js'));

        (new Filesystem)->copyDirectory(__DIR__.'/stubs/resources/js/components', resource_path('js/components'));
        (new Filesystem)->copyDirectory(__DIR__.'/stubs/resources/js/plugins', resource_path('js/plugins'));
        (new Filesystem)->copyDirectory(__DIR__.'/stubs/resources/js/store', resource_path('js/store'));
    }


    protected static function updateWelcomePage()
    {
        (new Filesystem)->delete(resource_path('views/welcome.blade.php'));

        copy(__DIR__.'/stubs/resources/views/welcome.blade.php', resource_path('views/welcome.blade.php'));
    }



}