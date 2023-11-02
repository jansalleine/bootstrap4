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
                    sourceMapContents: true,
                    outputStyle: "compressed"
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

    grunt.registerTask("default", ["sass", "watch", "run:copyvars"]);
};
