const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    config.module.rules.push({
        test: /\.(re|rei|ml|mli)$/,
        use: [{
            loader: require.resolve('bs-loader')
        }]
    });
    config.resolve.extensions.push('.re', '.ml');

    return config;
};
