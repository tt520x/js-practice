//module.exports = function () {
export default function () {
    return {
        files: [
            'basic/src/**/*.js', // adjust if required
            'package.json',
        ],

        tests: [
            'basic/test/**/*.test.js' // adjust if required
        ],

        env: {
            type: 'node'
        }
    };
};