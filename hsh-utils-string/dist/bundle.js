'use strict';

const cls = (...classnames) => {
    return classnames.join(" ");
};

function isMatch(str, pattern) {
    return str.match(pattern);
}

exports.cls = cls;
exports.isMatch = isMatch;
