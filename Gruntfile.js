require('dotenv').config();

const sass = require('sass');

module.exports = grunt => {

  grunt.initConfig({
    src: {
      vendor: [
        'html5-boilerplate/dist/css/normalize.css',
        'html5-boilerplate/dist/js/vendor/modernizr-3.11.2.min.js',
        // 'new-library/dist/**'
      ]
    },

    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dev: {
        src: 'assets/css/main.scss',
        dest: '.tmp/assets/css/main.css'
      },
      dist: {
        src: 'assets/css/main.scss',
        dest: 'dist/assets/css/main.css'
      }
    },

    copy: {
      dev: {
        expand: true,
        cwd: '.',
        src: ['**', '!**/dist/**', '!**/*.handlebars', '!**/node_modules/**', '!**/grunt/**', '!**/partials/**', '!**/Gruntfile.js', '!**/package.json', '!**/package-lock.json', '!**/README.md'],
        dest: '.tmp/'
      },
      dist: {
        expand: true,
        cwd: '.',
        src: ['**', '!**/.tmp/**', '!**/dist/**', '!**/*.handlebars', '!**/node_modules/**', '!**/grunt/**', '!**/partials/**', '!**/Gruntfile.js', '!**/package.json', '!**/package-lock.json', '!**/README.md'],
        dest: 'dist/'
      },
      dev_vendor: {
        expand: true,
        cwd: 'node_modules/',
        src: ['<%= src.vendor %>'],
        dest: '.tmp/assets/vendor/'
      },
      dist_vendor: {
        expand: true,
        cwd: 'node_modules/',
        src: ['<%= src.vendor %>'],
        dest: 'dist/assets/vendor/'
      }
    },

    'compile-handlebars': {
      dev: {
        expand: true,
        cwd: '.',
        src: ['**/*.handlebars', '!partials/**', '!**/node_modules/**'],
        dest: '.tmp/',
        ext: '.html',
        partials: 'partials/**/*.handlebars',
      },
      dist: {
        expand: true,
        cwd: '.',
        src: ['**/*.handlebars', '!partials/**', '!**/node_modules/**'],
        dest: 'dist/',
        ext: '.html',
        partials: 'partials/**/*.handlebars',
      }
    },

    connect: {
      options: {
        base: '.tmp'
      },
      dev: {
        options: {
          livereload: true,
          open: true
        }
      },
      server: {}
    },

    watch: {
      app: {
        options: {
          livereload: true
        },
        files: '**',
        tasks: ['build']
      }
    },

    clean: ['.tmp', 'dist'],

    ftps_deploy: {
      server: {
        options: {
          auth: {
            host: '0.0.0.0',
            port: 3000,
            authKey: 'key1',
            secure: true
          }
        },
        files: [{
          expand: true,
          cwd: 'dist',
          src: '.',
          dest: '/home/user/public_html'
        }]
      }
    },

    'sftp-deploy': {
      server: {
        auth: {
          host: 'server.com',
          port: 22,
          authKey: 'key1'
        },
        src: 'dist',
        dest: '/home/user/public_html',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-ftps-deploy');
  grunt.loadNpmTasks('grunt-sftp-deploy');

  grunt.registerTask('build:dev', 'Build all the files needed for local/dev.', [
    'sass:dev',
    'copy:dev',
    'compile-handlebars:dev',
    'copy:dev_vendor'
  ]);

  grunt.registerTask('build:dist', 'Build all the files needed for production.', [
    'sass:dist',
    'copy:dist',
    'compile-handlebars:dist',
    'copy:dist_vendor'
  ]);

  grunt.registerTask('build', 'Build all the files needed for local/dev and production.', ['build:dev', 'build:dist']);

  grunt.registerTask('dev', 'Development task for building files, launch a server and watch changes.', ['build:dev', 'connect:dev', 'watch']);

  grunt.registerTask('server', 'Run the server.', ['connect:server:keepalive']);

  grunt.registerTask('deploy', 'Deploy built code to the server.', ['build:dist', 'ftps_deploy']);

  grunt.registerTask('default', ['build']);
};
