System.register(['angular2/src/facade/lang', 'angular2/src/core/metadata/lifecycle_hooks'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lang_1, lifecycle_hooks_1;
    function hasLifecycleHook(lcInterface, token) {
        if (!(token instanceof lang_1.Type))
            return false;
        var proto = token.prototype;
        switch (lcInterface) {
            case lifecycle_hooks_1.LifecycleHooks.AfterContentInit:
                return !!proto.ngAfterContentInit;
            case lifecycle_hooks_1.LifecycleHooks.AfterContentChecked:
                return !!proto.ngAfterContentChecked;
            case lifecycle_hooks_1.LifecycleHooks.AfterViewInit:
                return !!proto.ngAfterViewInit;
            case lifecycle_hooks_1.LifecycleHooks.AfterViewChecked:
                return !!proto.ngAfterViewChecked;
            case lifecycle_hooks_1.LifecycleHooks.OnChanges:
                return !!proto.ngOnChanges;
            case lifecycle_hooks_1.LifecycleHooks.DoCheck:
                return !!proto.ngDoCheck;
            case lifecycle_hooks_1.LifecycleHooks.OnDestroy:
                return !!proto.ngOnDestroy;
            case lifecycle_hooks_1.LifecycleHooks.OnInit:
                return !!proto.ngOnInit;
            default:
                return false;
        }
    }
    exports_1("hasLifecycleHook", hasLifecycleHook);
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (lifecycle_hooks_1_1) {
                lifecycle_hooks_1 = lifecycle_hooks_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=directive_lifecycle_reflector.js.map