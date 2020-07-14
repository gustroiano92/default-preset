<?php

namespace Gustroiano92\DefaultPreset;

use Laravel\Ui\UiCommand;
use Illuminate\Support\ServiceProvider;

class DefaultPresetServiceProvider extends ServiceProvider
{
    public function boot()
    {
        UiCommand::macro('default', function ($command) {
            DefaultPreset::install();

            $command->info('Default scaffolding installed successfully.');

            $command->comment('Please run "npm install && npm run dev" to compile your fresh scaffolding.');
        });
    }
}
