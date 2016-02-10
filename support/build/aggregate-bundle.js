import aggregateBuild from './aggregate-build';

aggregateBuild({
    es6: true,
    outpath:'build/build-modules-es6',
    outfile: 'build/async.js',
    format: 'umd',
    lodashRename: true
});