# Typed models for the Numbers SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class GetNumberFact(TypedDict, total=False):
    found: bool
    id: str
    number: float
    text: str
    type: str


class GetNumberFactLoadMatchRequired(TypedDict):
    number: str
    type: str


class GetNumberFactLoadMatch(GetNumberFactLoadMatchRequired, total=False):
    fragment: bool
    json: bool
    notfound: str


class GetNumberTrivia(TypedDict, total=False):
    found: bool
    id: str
    number: float
    text: str
    type: str


class GetNumberTriviaLoadMatchRequired(TypedDict):
    id: str


class GetNumberTriviaLoadMatch(GetNumberTriviaLoadMatchRequired, total=False):
    fragment: bool
    json: bool
    notfound: str


class Random(TypedDict, total=False):
    found: bool
    id: str
    number: float
    text: str
    type: str


class RandomLoadMatchRequired(TypedDict):
    id: str


class RandomLoadMatch(RandomLoadMatchRequired, total=False):
    fragment: bool
    json: bool
    max: int
    min: int
