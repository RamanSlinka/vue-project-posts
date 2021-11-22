module.exports = {
    publicPath: '/vue-project-posts/',
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/assets/styles.scss";'
            }
        }
    }
};