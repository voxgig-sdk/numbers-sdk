<?php
declare(strict_types=1);

// Numbers SDK utility: result_body

class NumbersResultBody
{
    public static function call(NumbersContext $ctx): ?NumbersResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
