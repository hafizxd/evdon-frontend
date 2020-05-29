module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/scss/_variables.scss";
                    @import "@/scss/_mixins.scss";
                    @import "@/scss/_placeholders.scss";
                `
            }
        }
    },
    transpileDependencies: [
        /\bvue-awesome\b/
    ]
}