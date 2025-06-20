const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

function publicPath() {
    if (process.env.NODE_ENV === 'production') {
        return './'; // 生产环境相对路径
    } else {
        return '/'; // 开发环境绝对路径
    }
}

module.exports = {
    publicPath: publicPath(),

    // 新增：确保 transpileDependencies 是数组
    transpileDependencies: [],

    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },

    lintOnSave: false,

    devServer: {
        host: "0.0.0.0",
        port: 8082,
        hot: true,
        https: false,
        proxy: {
            '/springboot1816sl21': {
                target: 'http://localhost:8080/springboot1816sl21/',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/springboot1816sl21': '' // 移除前缀，例如 /springboot1816sl21/api -> /api
                }
            }
        }
    },

    chainWebpack(config) {
        // 处理 SVG 图标
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()

        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}
