# Typed models for the Numbers SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class GetNumberFact:
    found: Optional[bool] = None
    number: Optional[float] = None
    text: Optional[str] = None
    type: Optional[str] = None


@dataclass
class GetNumberFactLoadMatch:
    number: str
    type: str


@dataclass
class GetNumberTrivia:
    found: Optional[bool] = None
    number: Optional[float] = None
    text: Optional[str] = None
    type: Optional[str] = None


@dataclass
class GetNumberTriviaLoadMatch:
    id: str


@dataclass
class Random:
    found: Optional[bool] = None
    number: Optional[float] = None
    text: Optional[str] = None
    type: Optional[str] = None


@dataclass
class RandomLoadMatch:
    id: str

