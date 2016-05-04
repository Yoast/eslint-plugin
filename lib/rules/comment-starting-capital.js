/**
 * @fileoverview Requires a capital letter at the start of a comment.
 * @author Team Yoast &lt;support@yoast.com&gt;
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var requireCapitalLetter = context.options[0] !== "never";
    var firstLetterRegex = /(@?)(\w)/;
    // variables should be defined here

    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    /**
     * Returns the first letter of a string regardless of whitespace
     *
     * @param {string} text The text to retrieve the first letter of.
     * @returns {string} The first letter of the text.
     */
    function getFirstLetter(text) {
        var matches = text.match( firstLetterRegex );

        if ( null === matches ) {
            return '';
        }

        // Ignore JSDoc blocks
        if ( '@' === matches[1] ) {
            return '';
        }

        return matches[0];
    }

    /**
     * Reports a spacing error with an appropriate message.
     * @param {ASTNode} node - A comment node to check.
     * @param {string} message - An error message to report
     * @returns {void}
     */
    function report(node, message) {
        context.report({
            node: node,
            message: message
        });
    }

    function checkCommentForCapitalLetter(node) {
        // Ignores empty comments
        if (node.value.length === 0) {
            return;
        }

        var firstLetter = getFirstLetter(node.value);

        // Ignores comments without letters
        if ( '' === firstLetter ) {
            return;
        }

        if ( requireCapitalLetter ) {
            if ( firstLetter !== firstLetter.toUpperCase() ) {
                report(node, "Expected an uppercase letter at the start of a comment.");
            }
        } else {
            if ( firstLetter !== firstLetter.toLowerCase() ) {
                report(node, "Expected a lowercase letter at the start of a comment.");
            }
        }
    }

    return {
        LineComment: checkCommentForCapitalLetter,
        BlockComment: checkCommentForCapitalLetter
    };

};

module.exports.schema = [
    {
        enum: ["always", "never"]
    }
];
