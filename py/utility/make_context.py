# Numbers SDK utility: make_context

from core.context import NumbersContext


def make_context_util(ctxmap, basectx):
    return NumbersContext(ctxmap, basectx)
