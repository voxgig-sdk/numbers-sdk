<?php
declare(strict_types=1);

// Numbers SDK utility: feature_add

class NumbersFeatureAdd
{
    public static function call(NumbersContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
