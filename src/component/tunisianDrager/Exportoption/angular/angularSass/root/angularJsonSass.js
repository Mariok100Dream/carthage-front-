export const angularJsonSass = `
{
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "newProjectRoot": "projects",
    "projects": {
      "owl-carousel-angular-setting-sass": {
        "projectType": "application",
        "schematics": {
          "@schematics/angular:component": {
            "style": "sass"
          }
        },
        "root": "",
        "sourceRoot": "src",
        "prefix": "app",
        "architect": {
          "build": {
            "builder": "@angular-devkit/build-angular:browser",
            "options": {
              "outputPath": "dist/owl-carousel-angular-setting-sass",
              "index": "src/index.html",
              "main": "src/main.ts",
              "polyfills": [
                "zone.js"
              ],
              "tsConfig": "tsconfig.app.json",
              "inlineStyleLanguage": "sass",
              "assets": [
                "src/favicon.ico",
                "src/assets"
              ],
              "styles": [
                $imports_liberys
                "src/styles.sass"
              ],
              "scripts": []
            },
            "configurations": {
              "production": {
                "budgets": [
                  {
                    "type": "initial",
                    "maximumWarning": "500kb",
                    "maximumError": "1mb"
                  },
                  {
                    "type": "anyComponentStyle",
                    "maximumWarning": "2kb",
                    "maximumError": "4kb"
                  }
                ],
                "outputHashing": "all"
              },
              "development": {
                "buildOptimizer": false,
                "optimization": false,
                "vendorChunk": true,
                "extractLicenses": false,
                "sourceMap": true,
                "namedChunks": true
              }
            },
            "defaultConfiguration": "production"
          },
          "serve": {
            "builder": "@angular-devkit/build-angular:dev-server",
            "configurations": {
              "production": {
                "browserTarget": "owl-carousel-angular-setting-sass:build:production"
              },
              "development": {
                "browserTarget": "owl-carousel-angular-setting-sass:build:development"
              }
            },
            "defaultConfiguration": "development"
          },
          "extract-i18n": {
            "builder": "@angular-devkit/build-angular:extract-i18n",
            "options": {
              "browserTarget": "owl-carousel-angular-setting-sass:build"
            }
          },
          "test": {
            "builder": "@angular-devkit/build-angular:karma",
            "options": {
              "polyfills": [
                "zone.js",
                "zone.js/testing"
              ],
              "tsConfig": "tsconfig.spec.json",
              "inlineStyleLanguage": "sass",
              "assets": [
                "src/favicon.ico",
                "src/assets"
              ],
              "styles": [
                "src/styles.sass"
              ],
              "scripts": []
            }
          }
        }
      }
    }
  }
  
`