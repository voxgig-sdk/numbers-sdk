# Numbers SDK utility: feature_add
module NumbersUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
