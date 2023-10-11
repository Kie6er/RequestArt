const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV || 'development';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const devMode = mode === 'development';
const PATHS = {
	src: path.join(__dirname, './src'),
	dist: path.join(__dirname, './dist'),
	assets: 'assets/',
}

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
	mode,
	target,
	devtool,
	externals: {
		paths: PATHS
	},
	devServer: {
		port: 3000,
		open: true,
		hot: true,
	},
	entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'assets/js/index.js')],
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: 'assets/js/[name].[contenthash].js',
		assetModuleFilename: 'assets/[name][ext]'
	},
	plugins: [
		// Раскоментировать если есть статичные файлы
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{ from: `${PATHS.src}/assets/static`, to: `${PATHS.assets}static` },
		// 	],
		// }),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/style.[contenthash].css',
		})
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					"css-loader",
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')],
							}
						}
					},
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.(woff2?|ttf|otf|svg|eot)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name][ext]'
				}
			},
			{
				test: /\.(jpe?g|png|webp|gif|svg)$/i,
				type: 'asset/resource',
				use: [
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.90],
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75
							}
						}
					}
				],
				generator: {
					filename: 'assets/images/[hash][ext]'
				}
			},
			{
				test: /\.(jpe?g|png|webp|gif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/icons/[hash][ext]'
				}
			},
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', {
								targets: "defaults",
								useBuiltIns: "entry",
								"corejs": 3
							}]
						]
					}
				}
			}
		]
	}
}