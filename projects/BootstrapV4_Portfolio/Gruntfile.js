module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };
  
  var mq4HoverShim = require('mq4-hover-shim');
  var autoprefixer = require('autoprefixer')([
    "Chrome >= 45",
    "Firefox ESR",
    "Edge >= 12",
    "Explorer >= 10",
    "iOS >= 9",
    "Safari >= 9",
    "Android >= 4.4",
    "Opera >= 30"
  ]);

  // Project configuration.
  grunt.initConfig({
      sass: {
      options: {
        includePaths: ['node_modules/bootstrap/scss'],
        precision: 6,
        sourceComments: false,
        sourceMap: true,
        outputStyle: 'expanded'
      },
      dist: {
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },
    postcss: {
      core: {
        options: {
          map: true,
          processors: [
            mq4HoverShim.postprocessorFor({ hoverSelectorPrefix: '.bs-true-hover ' }),
            autoprefixer
          ]
        },
        src: 'css/*.css'
      }
    },
    watch: {
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['compile-sass'],
        options: {
         livereload: true 
        }
      },
      html: {
        files: '*.html',
        options: {
         livereload: true 
        }
      }          
    },
    connect: {
    server: {
      options: {
        port: 8080,
        livereload: true
      }
    }
    }
  });
  
  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {});
  require('time-grunt')(grunt);
      
  grunt.registerTask('compile-sass', ['sass', 'postcss']);
  // Default task.
  grunt.registerTask('default', ['sass', 'postcss', 'connect', 'watch']);

};
