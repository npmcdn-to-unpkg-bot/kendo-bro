System.register(['angular2/src/facade/lang', 'angular2/src/core/di', './application_tokens', './application_ref', './change_detection/change_detection', "./linker/view_utils", './linker/component_resolver', './linker/dynamic_component_loader'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lang_1, di_1, application_tokens_1, application_ref_1, change_detection_1, view_utils_1, component_resolver_1, component_resolver_2, dynamic_component_loader_1, dynamic_component_loader_2;
    var __unused, APPLICATION_COMMON_PROVIDERS;
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (di_1_1) {
                di_1 = di_1_1;
            },
            function (application_tokens_1_1) {
                application_tokens_1 = application_tokens_1_1;
            },
            function (application_ref_1_1) {
                application_ref_1 = application_ref_1_1;
            },
            function (change_detection_1_1) {
                change_detection_1 = change_detection_1_1;
            },
            function (view_utils_1_1) {
                view_utils_1 = view_utils_1_1;
            },
            function (component_resolver_1_1) {
                component_resolver_1 = component_resolver_1_1;
                component_resolver_2 = component_resolver_1_1;
            },
            function (dynamic_component_loader_1_1) {
                dynamic_component_loader_1 = dynamic_component_loader_1_1;
                dynamic_component_loader_2 = dynamic_component_loader_1_1;
            }],
        execute: function() {
             // avoid unused import when Type union types are erased
            /**
             * A default set of providers which should be included in any Angular
             * application, regardless of the platform it runs onto.
             */
            exports_1("APPLICATION_COMMON_PROVIDERS", APPLICATION_COMMON_PROVIDERS = lang_1.CONST_EXPR([
                application_ref_1.APPLICATION_CORE_PROVIDERS,
                new di_1.Provider(component_resolver_1.ComponentResolver, { useClass: component_resolver_2.ReflectorComponentResolver }),
                application_tokens_1.APP_ID_RANDOM_PROVIDER,
                view_utils_1.ViewUtils,
                new di_1.Provider(change_detection_1.IterableDiffers, { useValue: change_detection_1.defaultIterableDiffers }),
                new di_1.Provider(change_detection_1.KeyValueDiffers, { useValue: change_detection_1.defaultKeyValueDiffers }),
                new di_1.Provider(dynamic_component_loader_1.DynamicComponentLoader, { useClass: dynamic_component_loader_2.DynamicComponentLoader_ })
            ]));
        }
    }
});
//# sourceMappingURL=application_common_providers.js.map