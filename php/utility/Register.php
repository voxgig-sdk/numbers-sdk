<?php
declare(strict_types=1);

// Numbers SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

NumbersUtility::setRegistrar(function (NumbersUtility $u): void {
    $u->clean = [NumbersClean::class, 'call'];
    $u->done = [NumbersDone::class, 'call'];
    $u->make_error = [NumbersMakeError::class, 'call'];
    $u->feature_add = [NumbersFeatureAdd::class, 'call'];
    $u->feature_hook = [NumbersFeatureHook::class, 'call'];
    $u->feature_init = [NumbersFeatureInit::class, 'call'];
    $u->fetcher = [NumbersFetcher::class, 'call'];
    $u->make_fetch_def = [NumbersMakeFetchDef::class, 'call'];
    $u->make_context = [NumbersMakeContext::class, 'call'];
    $u->make_options = [NumbersMakeOptions::class, 'call'];
    $u->make_request = [NumbersMakeRequest::class, 'call'];
    $u->make_response = [NumbersMakeResponse::class, 'call'];
    $u->make_result = [NumbersMakeResult::class, 'call'];
    $u->make_point = [NumbersMakePoint::class, 'call'];
    $u->make_spec = [NumbersMakeSpec::class, 'call'];
    $u->make_url = [NumbersMakeUrl::class, 'call'];
    $u->param = [NumbersParam::class, 'call'];
    $u->prepare_auth = [NumbersPrepareAuth::class, 'call'];
    $u->prepare_body = [NumbersPrepareBody::class, 'call'];
    $u->prepare_headers = [NumbersPrepareHeaders::class, 'call'];
    $u->prepare_method = [NumbersPrepareMethod::class, 'call'];
    $u->prepare_params = [NumbersPrepareParams::class, 'call'];
    $u->prepare_path = [NumbersPreparePath::class, 'call'];
    $u->prepare_query = [NumbersPrepareQuery::class, 'call'];
    $u->result_basic = [NumbersResultBasic::class, 'call'];
    $u->result_body = [NumbersResultBody::class, 'call'];
    $u->result_headers = [NumbersResultHeaders::class, 'call'];
    $u->transform_request = [NumbersTransformRequest::class, 'call'];
    $u->transform_response = [NumbersTransformResponse::class, 'call'];
});
