/**
 * @fileoverview Tests for no-div-regex rule.
 * @author Matt DuVall <http://www.mattduvall.com>
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("../../../lib/tests/eslintTester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.addRuleTest("no-div-regex", {
    valid: [
        "var f = function() { return /foo/ig.test('bar'); };",
        "var f = function() { return /\\=foo/; };"
    ],
    invalid: [
        { code: "var f = function() { return /=foo/; };", errors: [{ message: "A regular expression literal can be confused with '/='.", type: "Literal"}] }
    ]
});
