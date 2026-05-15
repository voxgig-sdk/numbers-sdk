<?php
declare(strict_types=1);

// Numbers SDK utility: result_headers

class NumbersResultHeaders
{
    public static function call(NumbersContext $ctx): ?NumbersResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
