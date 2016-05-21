System.register(['angular2/src/facade/lang', 'angular2/src/facade/collection', 'angular2/core', './invalid_pipe_argument_exception'], function(exports_1, context_1) {
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
    var lang_1, collection_1, core_1, invalid_pipe_argument_exception_1;
    var I18nSelectPipe;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (invalid_pipe_argument_exception_1_1) {
                invalid_pipe_argument_exception_1 = invalid_pipe_argument_exception_1_1;
            }],
        execute: function() {
            /**
             *
             *  Generic selector that displays the string that matches the current value.
             *
             *  ## Usage
             *
             *  expression | i18nSelect:mapping
             *
             *  where `mapping` is an object that indicates the text that should be displayed
             *  for different values of the provided `expression`.
             *
             *  ## Example
             *
             *  ```
             *  <div>
             *    {{ gender | i18nSelect: inviteMap }}
             *  </div>
             *
             *  class MyApp {
             *    gender: string = 'male';
             *    inviteMap: any = {
             *      'male': 'Invite her.',
             *      'female': 'Invite him.',
             *      'other': 'Invite them.'
             *    }
             *    ...
             *  }
             *  ```
             */
            I18nSelectPipe = (function () {
                function I18nSelectPipe() {
                }
                I18nSelectPipe.prototype.transform = function (value, mapping) {
                    if (!lang_1.isStringMap(mapping)) {
                        throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(I18nSelectPipe, mapping);
                    }
                    return collection_1.StringMapWrapper.contains(mapping, value) ? mapping[value] : mapping['other'];
                };
                I18nSelectPipe = __decorate([
                    lang_1.CONST(),
                    core_1.Pipe({ name: 'i18nSelect', pure: true }),
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], I18nSelectPipe);
                return I18nSelectPipe;
            }());
            exports_1("I18nSelectPipe", I18nSelectPipe);
        }
    }
});
//# sourceMappingURL=i18n_select_pipe.js.map