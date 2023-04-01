<?php

namespace App\Console\Commands;

use App\Events\TestingEvent;
use Illuminate\Console\Command;

class TestingPar extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'testing:event';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        TestingEvent::dispatch();
        return info('hello world');
    }
}
