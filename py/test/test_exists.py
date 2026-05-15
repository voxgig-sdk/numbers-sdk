# ProjectName SDK exists test

import pytest
from numbers_sdk import NumbersSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = NumbersSDK.test(None, None)
        assert testsdk is not None
