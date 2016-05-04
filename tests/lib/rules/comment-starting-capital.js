/**
 * @fileoverview Requires a capital letter at the start of a comment.
 * @author Team Yoast &lt;support@yoast.com&gt;
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/comment-starting-capital"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("comment-starting-capital", rule, {

    valid: [
        {
            code: "// Needs an uppercase letter."
        },
        {
            code: "//   "
        },
        {
            code: "/**\n * This is a comment. */"
        },
        {
            code: "/** @package packageName */"
        },

        // Require lowercase letters:
        {
            code: "// needs a lowercase letter.",
            options: ["never"]
        },
        {
            code: "//   ",
            options: ["never"]
        },
        {
            code: "/**\n * this is a comment. */",
            options: ["never"]
        }
    ],

    invalid: [
        {
            code: "// this is a comment.",
            errors: [{
                message: "Expected an uppercase letter at the start of a comment.",
                type: "Line"
            }]
        },
        {
            code: "/**\n * this is a comment. */",
            errors: [{
                message: "Expected an uppercase letter at the start of a comment.",
                type: "Block"
            }]
        },

        // Require lowercase letters:
        {
            code: "// This is a comment.",
            errors: [{
                message: "Expected a lowercase letter at the start of a comment.",
                type: "Line"
            }],
            options: ["never"]
        },
        {
            code: "/**\n * This is a comment. */",
            errors: [{
                message: "Expected a lowercase letter at the start of a comment.",
                type: "Block"
            }],
            options: ["never"]
        }
    ]
});
