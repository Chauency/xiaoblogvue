'use strict'
// Template version: 1.2.7
// see http://vuejs-templates.github.io/webpack for documentation.

//const path = require('path')

module.exports = {
    devServer: {
        proxy: {

            '/': {
                ws: true,
                target: 'http://localhost:8082/',
                changeOrigin: true
            }
        },
        open: true,
        host: 'localhost',
        port: 8083,
        https: false

    }
}
