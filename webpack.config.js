const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const isDev = process.env.NODE_ENV === 'development';
const ESLintPlugin = require('eslint-webpack-plugin');


const isProd = !isDev;
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;



module.exports = {

    context: path.resolve(__dirname, 'src'),
    entry: {
        main:  ['@babel/polyfill', './JS/index.js'],
    },
    mode: 'development',
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },


    devServer: {
        port: 4200
    },
    devtool: isDev ? 'source-map' : false,
    plugins: [
         new ESLintPlugin(),
         new HTMLWebpackPlugin({
             template: "./index.html",
             minify: {
                 collapseWhitespace: isProd,
             }
         }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src/img/Group.svg'),
                        to: path.resolve(__dirname, 'dist'),
                    },
                    {
                        from: path.resolve(__dirname, 'src/img/content.jpg'),
                        to: path.resolve(__dirname, 'dist'),
                    },
                    {
                        from: path.resolve(__dirname, 'src/img/acer.svg'),
                        to: path.resolve(__dirname, 'dist'),
                    },
                    {
                        from: path.resolve(__dirname, 'src/img/apple.svg'),
                        to: path.resolve(__dirname, 'dist'),
                    },
                    {
                        from: path.resolve(__dirname, 'src/img/bosch.svg'),
                        to: path.resolve(__dirname, 'dist'),
                    },
                    {
                        from: path.resolve(__dirname, 'src/img/hp.svg'),
                        to: path.resolve(__dirname, 'dist'),
                    },
                    {
                        from: path.resolve(__dirname, 'src/img/lenovo.svg'),
                        to: path.resolve(__dirname, 'dist'),
                    },
                    {
                        from: path.resolve(__dirname, 'src/img/samsung.svg'),
                        to: path.resolve(__dirname, 'dist'),
                    },
                    {
                        from: path.resolve(__dirname, 'src/img/sony.svg'),
                        to: path.resolve(__dirname, 'dist'),
                    },
                    {
                        from: path.resolve(__dirname, 'src/img/viewSonic.svg'),
                        to: path.resolve(__dirname, 'dist'),
                    }
            ]}),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource',
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'less-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader,
                  'css-loader',
                  {
                    loader: 'postcss-loader',
                    options: {
                      postcssOptions: {
                        plugins: [require("postcss-preset-env")],
                      }
                    }
                  },
                  'sass-loader',
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' ,
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            },

        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    }
};
