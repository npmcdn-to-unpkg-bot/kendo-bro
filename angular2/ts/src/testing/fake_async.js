System.register(['angular2/src/facade/exceptions', './test_injector'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var exceptions_1, test_injector_1;
    var _FakeAsyncTestZoneSpecType;
    /**
     * Wraps a function to be executed in the fakeAsync zone:
     * - microtasks are manually executed by calling `flushMicrotasks()`,
     * - timers are synchronous, `tick()` simulates the asynchronous passage of time.
     *
     * If there are any pending timers at the end of the function, an exception will be thrown.
     *
     * Can be used to wrap inject() calls.
     *
     * ## Example
     *
     * {@example testing/ts/fake_async.ts region='basic'}
     *
     * @param fn
     * @returns {Function} The function wrapped to be executed in the fakeAsync zone
     */
    function fakeAsync(fn) {
        if (Zone.current.get('FakeAsyncTestZoneSpec') != null) {
            throw new exceptions_1.BaseException('fakeAsync() calls can not be nested');
        }
        var fakeAsyncTestZoneSpec = new _FakeAsyncTestZoneSpecType();
        var fakeAsyncZone = Zone.current.fork(fakeAsyncTestZoneSpec);
        var innerTestFn = null;
        if (fn instanceof test_injector_1.FunctionWithParamTokens) {
            if (fn.isAsync) {
                throw new exceptions_1.BaseException('Cannot wrap async test with fakeAsync');
            }
            innerTestFn = function () { test_injector_1.getTestInjector().execute(fn); };
        }
        else {
            innerTestFn = fn;
        }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var res = fakeAsyncZone.run(function () {
                var res = innerTestFn.apply(void 0, args);
                flushMicrotasks();
                return res;
            });
            if (fakeAsyncTestZoneSpec.pendingPeriodicTimers.length > 0) {
                throw new exceptions_1.BaseException((fakeAsyncTestZoneSpec.pendingPeriodicTimers.length + " ") +
                    "periodic timer(s) still in the queue.");
            }
            if (fakeAsyncTestZoneSpec.pendingTimers.length > 0) {
                throw new exceptions_1.BaseException(fakeAsyncTestZoneSpec.pendingTimers.length + " timer(s) still in the queue.");
            }
            return res;
        };
    }
    exports_1("fakeAsync", fakeAsync);
    function _getFakeAsyncZoneSpec() {
        var zoneSpec = Zone.current.get('FakeAsyncTestZoneSpec');
        if (zoneSpec == null) {
            throw new Error('The code should be running in the fakeAsync zone to call this function');
        }
        return zoneSpec;
    }
    /**
     * Clear the queue of pending timers and microtasks.
     * Tests no longer need to call this explicitly.
     *
     * @deprecated
     */
    function clearPendingTimers() {
        // Do nothing.
    }
    exports_1("clearPendingTimers", clearPendingTimers);
    /**
     * Simulates the asynchronous passage of time for the timers in the fakeAsync zone.
     *
     * The microtasks queue is drained at the very start of this function and after any timer callback
     * has been executed.
     *
     * ## Example
     *
     * {@example testing/ts/fake_async.ts region='basic'}
     *
     * @param {number} millis Number of millisecond, defaults to 0
     */
    function tick(millis) {
        if (millis === void 0) { millis = 0; }
        _getFakeAsyncZoneSpec().tick(millis);
    }
    exports_1("tick", tick);
    /**
     * Flush any pending microtasks.
     */
    function flushMicrotasks() {
        _getFakeAsyncZoneSpec().flushMicrotasks();
    }
    exports_1("flushMicrotasks", flushMicrotasks);
    return {
        setters:[
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            },
            function (test_injector_1_1) {
                test_injector_1 = test_injector_1_1;
            }],
        execute: function() {
            _FakeAsyncTestZoneSpecType = Zone['FakeAsyncTestZoneSpec'];
        }
    }
});
//# sourceMappingURL=fake_async.js.map