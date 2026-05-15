<?php
declare(strict_types=1);

// Numbers SDK utility: prepare_body

class NumbersPrepareBody
{
    public static function call(NumbersContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
