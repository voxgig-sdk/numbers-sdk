<?php
declare(strict_types=1);

// Numbers SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class NumbersFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new NumbersBaseFeature();
            case "test":
                return new NumbersTestFeature();
            default:
                return new NumbersBaseFeature();
        }
    }
}
