System.register(['angular2/src/compiler/parse_util', 'angular2/src/compiler/html_ast', 'angular2/src/facade/lang', './message'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var parse_util_1, html_ast_1, lang_1, message_1;
    var I18N_ATTR, I18N_ATTR_PREFIX, CUSTOM_PH_EXP, I18nError, Part, _StringifyVisitor;
    // Man, this is so ugly!
    function partition(nodes, errors) {
        var res = [];
        for (var i = 0; i < nodes.length; ++i) {
            var n = nodes[i];
            var temp = [];
            if (_isOpeningComment(n)) {
                var i18n = n.value.substring(5).trim();
                i++;
                while (!_isClosingComment(nodes[i])) {
                    temp.push(nodes[i++]);
                    if (i === nodes.length) {
                        errors.push(new I18nError(n.sourceSpan, "Missing closing 'i18n' comment."));
                        break;
                    }
                }
                res.push(new Part(null, null, temp, i18n, true));
            }
            else if (n instanceof html_ast_1.HtmlElementAst) {
                var i18n = _findI18nAttr(n);
                res.push(new Part(n, null, n.children, lang_1.isPresent(i18n) ? i18n.value : null, lang_1.isPresent(i18n)));
            }
            else if (n instanceof html_ast_1.HtmlTextAst) {
                res.push(new Part(null, n, null, null, false));
            }
        }
        return res;
    }
    exports_1("partition", partition);
    function _isOpeningComment(n) {
        return n instanceof html_ast_1.HtmlCommentAst && lang_1.isPresent(n.value) && n.value.startsWith("i18n:");
    }
    function _isClosingComment(n) {
        return n instanceof html_ast_1.HtmlCommentAst && lang_1.isPresent(n.value) && n.value == "/i18n";
    }
    function _findI18nAttr(p) {
        var i18n = p.attrs.filter(function (a) { return a.name == I18N_ATTR; });
        return i18n.length == 0 ? null : i18n[0];
    }
    function meaning(i18n) {
        if (lang_1.isBlank(i18n) || i18n == "")
            return null;
        return i18n.split("|")[0];
    }
    exports_1("meaning", meaning);
    function description(i18n) {
        if (lang_1.isBlank(i18n) || i18n == "")
            return null;
        var parts = i18n.split("|");
        return parts.length > 1 ? parts[1] : null;
    }
    exports_1("description", description);
    function messageFromAttribute(parser, p, attr) {
        var expectedName = attr.name.substring(5);
        var matching = p.attrs.filter(function (a) { return a.name == expectedName; });
        if (matching.length > 0) {
            var value = removeInterpolation(matching[0].value, matching[0].sourceSpan, parser);
            return new message_1.Message(value, meaning(attr.value), description(attr.value));
        }
        else {
            throw new I18nError(p.sourceSpan, "Missing attribute '" + expectedName + "'.");
        }
    }
    exports_1("messageFromAttribute", messageFromAttribute);
    function removeInterpolation(value, source, parser) {
        try {
            var parsed = parser.splitInterpolation(value, source.toString());
            var usedNames = new Map();
            if (lang_1.isPresent(parsed)) {
                var res = "";
                for (var i = 0; i < parsed.strings.length; ++i) {
                    res += parsed.strings[i];
                    if (i != parsed.strings.length - 1) {
                        var customPhName = getPhNameFromBinding(parsed.expressions[i], i);
                        customPhName = dedupePhName(usedNames, customPhName);
                        res += "<ph name=\"" + customPhName + "\"/>";
                    }
                }
                return res;
            }
            else {
                return value;
            }
        }
        catch (e) {
            return value;
        }
    }
    exports_1("removeInterpolation", removeInterpolation);
    function getPhNameFromBinding(input, index) {
        var customPhMatch = lang_1.StringWrapper.split(input, CUSTOM_PH_EXP);
        return customPhMatch.length > 1 ? customPhMatch[1] : "" + index;
    }
    exports_1("getPhNameFromBinding", getPhNameFromBinding);
    function dedupePhName(usedNames, name) {
        var duplicateNameCount = usedNames.get(name);
        if (lang_1.isPresent(duplicateNameCount)) {
            usedNames.set(name, duplicateNameCount + 1);
            return name + "_" + duplicateNameCount;
        }
        else {
            usedNames.set(name, 1);
            return name;
        }
    }
    exports_1("dedupePhName", dedupePhName);
    function stringifyNodes(nodes, parser) {
        var visitor = new _StringifyVisitor(parser);
        return html_ast_1.htmlVisitAll(visitor, nodes).join("");
    }
    exports_1("stringifyNodes", stringifyNodes);
    return {
        setters:[
            function (parse_util_1_1) {
                parse_util_1 = parse_util_1_1;
            },
            function (html_ast_1_1) {
                html_ast_1 = html_ast_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
            exports_1("I18N_ATTR", I18N_ATTR = "i18n");
            exports_1("I18N_ATTR_PREFIX", I18N_ATTR_PREFIX = "i18n-");
            CUSTOM_PH_EXP = /\/\/[\s\S]*i18n[\s\S]*\([\s\S]*ph[\s\S]*=[\s\S]*"([\s\S]*?)"[\s\S]*\)/g;
            /**
             * An i18n error.
             */
            I18nError = (function (_super) {
                __extends(I18nError, _super);
                function I18nError(span, msg) {
                    _super.call(this, span, msg);
                }
                return I18nError;
            }(parse_util_1.ParseError));
            exports_1("I18nError", I18nError);
            Part = (function () {
                function Part(rootElement, rootTextNode, children, i18n, hasI18n) {
                    this.rootElement = rootElement;
                    this.rootTextNode = rootTextNode;
                    this.children = children;
                    this.i18n = i18n;
                    this.hasI18n = hasI18n;
                }
                Object.defineProperty(Part.prototype, "sourceSpan", {
                    get: function () {
                        if (lang_1.isPresent(this.rootElement))
                            return this.rootElement.sourceSpan;
                        else if (lang_1.isPresent(this.rootTextNode))
                            return this.rootTextNode.sourceSpan;
                        else
                            return this.children[0].sourceSpan;
                    },
                    enumerable: true,
                    configurable: true
                });
                Part.prototype.createMessage = function (parser) {
                    return new message_1.Message(stringifyNodes(this.children, parser), meaning(this.i18n), description(this.i18n));
                };
                return Part;
            }());
            exports_1("Part", Part);
            _StringifyVisitor = (function () {
                function _StringifyVisitor(_parser) {
                    this._parser = _parser;
                    this._index = 0;
                }
                _StringifyVisitor.prototype.visitElement = function (ast, context) {
                    var name = this._index++;
                    var children = this._join(html_ast_1.htmlVisitAll(this, ast.children), "");
                    return "<ph name=\"e" + name + "\">" + children + "</ph>";
                };
                _StringifyVisitor.prototype.visitAttr = function (ast, context) { return null; };
                _StringifyVisitor.prototype.visitText = function (ast, context) {
                    var index = this._index++;
                    var noInterpolation = removeInterpolation(ast.value, ast.sourceSpan, this._parser);
                    if (noInterpolation != ast.value) {
                        return "<ph name=\"t" + index + "\">" + noInterpolation + "</ph>";
                    }
                    else {
                        return ast.value;
                    }
                };
                _StringifyVisitor.prototype.visitComment = function (ast, context) { return ""; };
                _StringifyVisitor.prototype.visitExpansion = function (ast, context) { return null; };
                _StringifyVisitor.prototype.visitExpansionCase = function (ast, context) { return null; };
                _StringifyVisitor.prototype._join = function (strs, str) {
                    return strs.filter(function (s) { return s.length > 0; }).join(str);
                };
                return _StringifyVisitor;
            }());
        }
    }
});
//# sourceMappingURL=shared.js.map