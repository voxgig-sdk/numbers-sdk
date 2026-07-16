<?php
declare(strict_types=1);

// Numbers SDK base feature

class NumbersBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(NumbersContext $ctx, array $options): void {}
    public function PostConstruct(NumbersContext $ctx): void {}
    public function PostConstructEntity(NumbersContext $ctx): void {}
    public function SetData(NumbersContext $ctx): void {}
    public function GetData(NumbersContext $ctx): void {}
    public function GetMatch(NumbersContext $ctx): void {}
    public function SetMatch(NumbersContext $ctx): void {}
    public function PrePoint(NumbersContext $ctx): void {}
    public function PreSpec(NumbersContext $ctx): void {}
    public function PreRequest(NumbersContext $ctx): void {}
    public function PreResponse(NumbersContext $ctx): void {}
    public function PreResult(NumbersContext $ctx): void {}
    public function PreDone(NumbersContext $ctx): void {}
    public function PreUnexpected(NumbersContext $ctx): void {}
}
