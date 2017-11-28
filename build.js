var path = require("path")

var buildModule = require("build-modules")

var buildDirectory = path.join(__dirname,'dist')
var generatedTestDirectory = path.join(__dirname,'test/generated')

var copywrite = '/* Copyright (c) 2013 Billy Tetrud - Free to use for any purpose: MIT License*/'

console.log('building and minifying...')
var name = 'rpepBson'
build('rpep-bson', false, {output: {path:buildDirectory}, header: copywrite, name:name, minify:true})
build('rpep-bson', false, {output: {path:buildDirectory, name:name+'-dev.umd.js'}, header: copywrite, name:name, minify:false})


function build(relativeModulePath, watch, options) {
    var emitter = buildModule(path.join(__dirname, '.', relativeModulePath), {
        watch: watch/*, header: copyright*/, name: options.name, minify: options.minify,
        output: options.output
    })
    emitter.on('done', function() {
       console.log((new Date())+" - Done building "+relativeModulePath+"!")
    })
    emitter.on('error', function(e) {
       console.log(e)
    })
    emitter.on('warning', function(w) {
       console.log(w)
    })

    return emitter
}
