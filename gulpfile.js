const {series, parallel, src, dest} = require('gulp');
const del = require('delete');


function clean(cb) {
    del(['build'], cb);
}

function build(cb) {
    cb();
}

function buildHtml(cb) {
    return src('source/*.hmtl')
        .pipe(dest('build'));
}

exports.clean = clean;
exports.default = series(clean, build);