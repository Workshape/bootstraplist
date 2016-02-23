/*
 * Tests exporter
 *
 * Pre process tests for Karma execution
 */

// Load files in /test with filename matching * .test.js
var context = require.context('../test', true, /\.test\.js$/);

context.keys().forEach(context);