module.exports = function(grunt)
{
    const sass  = require("sass");
    require("jit-grunt")(grunt);

    grunt.initConfig(
    {
        sass: {
            development: {
                options: {
                    implementation: sass,
                    sourceMap: true,
                    style: "compressed",
                    api: "modern",
                    silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
                },
                files: {
                    "./build/css/bootstrap4.css":  "bootstrap4.scss"
                }
            }
        },
        watch: {
            styles: {
                files: ["**/**/*.scss"],
                tasks: ["sass"],
                options: {
                    spawn: true
                }
            },
            scripts: {
                files: ["copyvars.js"],
                tasks: ["run:copyvars"],
                options: {
                    spawn: true
                }
            }
        },
        run: {
            options: {

            },
            copyvars: {
                exec: "npm run copyvars"
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass-modern');
    grunt.registerTask("default", ["sass", "run:copyvars", "watch"]);
};
