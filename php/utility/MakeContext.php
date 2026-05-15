<?php
declare(strict_types=1);

// Numbers SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class NumbersMakeContext
{
    public static function call(array $ctxmap, ?NumbersContext $basectx): NumbersContext
    {
        return new NumbersContext($ctxmap, $basectx);
    }
}
