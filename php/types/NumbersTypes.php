<?php
declare(strict_types=1);

// Typed models for the Numbers SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** GetNumberFact entity data model. */
class GetNumberFact
{
    public ?bool $found = null;
    public ?float $number = null;
    public ?string $text = null;
    public ?string $type = null;
}

/** Request payload for GetNumberFact#load. */
class GetNumberFactLoadMatch
{
    public string $number;
    public string $type;
}

/** GetNumberTrivia entity data model. */
class GetNumberTrivia
{
    public ?bool $found = null;
    public ?float $number = null;
    public ?string $text = null;
    public ?string $type = null;
}

/** Request payload for GetNumberTrivia#load. */
class GetNumberTriviaLoadMatch
{
    public string $id;
}

/** Random entity data model. */
class Random
{
    public ?bool $found = null;
    public ?float $number = null;
    public ?string $text = null;
    public ?string $type = null;
}

/** Request payload for Random#load. */
class RandomLoadMatch
{
    public string $id;
}

