let base64 = require('base-64');

export function decode(input) {
    return base64.decode(input);
}