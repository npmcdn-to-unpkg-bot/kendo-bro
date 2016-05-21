System.register(['angular2/src/facade/lang', 'angular2/src/facade/collection', './view_type'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var lang_1, collection_1, view_type_1;
    var StaticNodeDebugInfo, DebugContext;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (view_type_1_1) {
                view_type_1 = view_type_1_1;
            }],
        execute: function() {
            StaticNodeDebugInfo = (function () {
                function StaticNodeDebugInfo(providerTokens, componentToken, varTokens) {
                    this.providerTokens = providerTokens;
                    this.componentToken = componentToken;
                    this.varTokens = varTokens;
                }
                StaticNodeDebugInfo = __decorate([
                    lang_1.CONST(), 
                    __metadata('design:paramtypes', [Array, Object, Object])
                ], StaticNodeDebugInfo);
                return StaticNodeDebugInfo;
            }());
            exports_1("StaticNodeDebugInfo", StaticNodeDebugInfo);
            DebugContext = (function () {
                function DebugContext(_view, _nodeIndex, _tplRow, _tplCol) {
                    this._view = _view;
                    this._nodeIndex = _nodeIndex;
                    this._tplRow = _tplRow;
                    this._tplCol = _tplCol;
                }
                Object.defineProperty(DebugContext.prototype, "_staticNodeInfo", {
                    get: function () {
                        return lang_1.isPresent(this._nodeIndex) ? this._view.staticNodeDebugInfos[this._nodeIndex] : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DebugContext.prototype, "context", {
                    get: function () { return this._view.context; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DebugContext.prototype, "component", {
                    get: function () {
                        var staticNodeInfo = this._staticNodeInfo;
                        if (lang_1.isPresent(staticNodeInfo) && lang_1.isPresent(staticNodeInfo.componentToken)) {
                            return this.injector.get(staticNodeInfo.componentToken);
                        }
                        return null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DebugContext.prototype, "componentRenderElement", {
                    get: function () {
                        var componentView = this._view;
                        while (lang_1.isPresent(componentView.declarationAppElement) &&
                            componentView.type !== view_type_1.ViewType.COMPONENT) {
                            componentView = componentView.declarationAppElement.parentView;
                        }
                        return lang_1.isPresent(componentView.declarationAppElement) ?
                            componentView.declarationAppElement.nativeElement :
                            null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DebugContext.prototype, "injector", {
                    get: function () { return this._view.injector(this._nodeIndex); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DebugContext.prototype, "renderNode", {
                    get: function () {
                        if (lang_1.isPresent(this._nodeIndex) && lang_1.isPresent(this._view.allNodes)) {
                            return this._view.allNodes[this._nodeIndex];
                        }
                        else {
                            return null;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DebugContext.prototype, "providerTokens", {
                    get: function () {
                        var staticNodeInfo = this._staticNodeInfo;
                        return lang_1.isPresent(staticNodeInfo) ? staticNodeInfo.providerTokens : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DebugContext.prototype, "source", {
                    get: function () {
                        return this._view.componentType.templateUrl + ":" + this._tplRow + ":" + this._tplCol;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DebugContext.prototype, "locals", {
                    get: function () {
                        var _this = this;
                        var varValues = {};
                        // TODO(tbosch): right now, the semantics of debugNode.locals are
                        // that it contains the variables of all elements, not just
                        // the given one. We preserve this for now to not have a breaking
                        // change, but should change this later!
                        collection_1.ListWrapper.forEachWithIndex(this._view.staticNodeDebugInfos, function (staticNodeInfo, nodeIndex) {
                            var vars = staticNodeInfo.varTokens;
                            collection_1.StringMapWrapper.forEach(vars, function (varToken, varName) {
                                var varValue;
                                if (lang_1.isBlank(varToken)) {
                                    varValue = lang_1.isPresent(_this._view.allNodes) ? _this._view.allNodes[nodeIndex] : null;
                                }
                                else {
                                    varValue = _this._view.injectorGet(varToken, nodeIndex, null);
                                }
                                varValues[varName] = varValue;
                            });
                        });
                        collection_1.StringMapWrapper.forEach(this._view.locals, function (localValue, localName) { varValues[localName] = localValue; });
                        return varValues;
                    },
                    enumerable: true,
                    configurable: true
                });
                return DebugContext;
            }());
            exports_1("DebugContext", DebugContext);
        }
    }
});
//# sourceMappingURL=debug_context.js.map