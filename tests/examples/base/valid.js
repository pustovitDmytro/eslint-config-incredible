const data = {};

data.assets = data.assets.map(
    asset => asset.glob
        ? { ...asset, rootDir: data.rootDir }
        : asset
);

export default data;
