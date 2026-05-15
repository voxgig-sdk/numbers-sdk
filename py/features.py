# Numbers SDK feature factory

from feature.base_feature import NumbersBaseFeature
from feature.test_feature import NumbersTestFeature


def _make_feature(name):
    features = {
        "base": lambda: NumbersBaseFeature(),
        "test": lambda: NumbersTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
