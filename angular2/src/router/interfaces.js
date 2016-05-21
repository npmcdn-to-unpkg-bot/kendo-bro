'use strict';"use strict";
var lang_1 = require('angular2/src/facade/lang');
// This is here only so that after TS transpilation the file is not empty.
// TODO(rado): find a better way to fix this, or remove if likely culprit
// https://github.com/systemjs/systemjs/issues/487 gets closed.
var __ignore_me = lang_1.global;
var __make_dart_analyzer_happy = null;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtNG5vM1pRdk8udG1wL2FuZ3VsYXIyL3NyYy9yb3V0ZXIvaW50ZXJmYWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EscUJBQXFCLDBCQUEwQixDQUFDLENBQUE7QUFFaEQsMEVBQTBFO0FBQzFFLHlFQUF5RTtBQUN6RSwrREFBK0Q7QUFDL0QsSUFBSSxXQUFXLEdBQUcsYUFBTSxDQUFDO0FBQ3pCLElBQUksMEJBQTBCLEdBQWlCLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJy4vaW5zdHJ1Y3Rpb24nO1xuaW1wb3J0IHtnbG9iYWx9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbi8vIFRoaXMgaXMgaGVyZSBvbmx5IHNvIHRoYXQgYWZ0ZXIgVFMgdHJhbnNwaWxhdGlvbiB0aGUgZmlsZSBpcyBub3QgZW1wdHkuXG4vLyBUT0RPKHJhZG8pOiBmaW5kIGEgYmV0dGVyIHdheSB0byBmaXggdGhpcywgb3IgcmVtb3ZlIGlmIGxpa2VseSBjdWxwcml0XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3lzdGVtanMvc3lzdGVtanMvaXNzdWVzLzQ4NyBnZXRzIGNsb3NlZC5cbnZhciBfX2lnbm9yZV9tZSA9IGdsb2JhbDtcbnZhciBfX21ha2VfZGFydF9hbmFseXplcl9oYXBweTogUHJvbWlzZTxhbnk+ID0gbnVsbDtcblxuLyoqXG4gKiBEZWZpbmVzIHJvdXRlIGxpZmVjeWNsZSBtZXRob2QgYHJvdXRlck9uQWN0aXZhdGVgLCB3aGljaCBpcyBjYWxsZWQgYnkgdGhlIHJvdXRlciBhdCB0aGUgZW5kIG9mIGFcbiAqIHN1Y2Nlc3NmdWwgcm91dGUgbmF2aWdhdGlvbi5cbiAqXG4gKiBGb3IgYSBzaW5nbGUgY29tcG9uZW50J3MgbmF2aWdhdGlvbiwgb25seSBvbmUgb2YgZWl0aGVyIHtAbGluayBPbkFjdGl2YXRlfSBvciB7QGxpbmsgT25SZXVzZX1cbiAqIHdpbGwgYmUgY2FsbGVkIGRlcGVuZGluZyBvbiB0aGUgcmVzdWx0IG9mIHtAbGluayBDYW5SZXVzZX0uXG4gKlxuICogVGhlIGByb3V0ZXJPbkFjdGl2YXRlYCBob29rIGlzIGNhbGxlZCB3aXRoIHR3byB7QGxpbmsgQ29tcG9uZW50SW5zdHJ1Y3Rpb259cyBhcyBwYXJhbWV0ZXJzLCB0aGVcbiAqIGZpcnN0XG4gKiByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgcm91dGUgYmVpbmcgbmF2aWdhdGVkIHRvLCBhbmQgdGhlIHNlY29uZCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIHRoZVxuICogcHJldmlvdXMgcm91dGUgb3IgYG51bGxgLlxuICpcbiAqIElmIGByb3V0ZXJPbkFjdGl2YXRlYCByZXR1cm5zIGEgcHJvbWlzZSwgdGhlIHJvdXRlIGNoYW5nZSB3aWxsIHdhaXQgdW50aWwgdGhlIHByb21pc2Ugc2V0dGxlcyB0b1xuICogaW5zdGFudGlhdGUgYW5kIGFjdGl2YXRlIGNoaWxkIGNvbXBvbmVudHMuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIHtAZXhhbXBsZSByb3V0ZXIvdHMvb25fYWN0aXZhdGUvb25fYWN0aXZhdGVfZXhhbXBsZS50cyByZWdpb249J3JvdXRlck9uQWN0aXZhdGUnfVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9uQWN0aXZhdGUge1xuICByb3V0ZXJPbkFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24sXG4gICAgICAgICAgICAgICAgICAgcHJldkluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbik6IGFueSB8XG4gICAgICBQcm9taXNlPGFueT47XG59XG5cbi8qKlxuICogRGVmaW5lcyByb3V0ZSBsaWZlY3ljbGUgbWV0aG9kIGByb3V0ZXJPblJldXNlYCwgd2hpY2ggaXMgY2FsbGVkIGJ5IHRoZSByb3V0ZXIgYXQgdGhlIGVuZCBvZiBhXG4gKiBzdWNjZXNzZnVsIHJvdXRlIG5hdmlnYXRpb24gd2hlbiB7QGxpbmsgQ2FuUmV1c2V9IGlzIGltcGxlbWVudGVkIGFuZCByZXR1cm5zIG9yIHJlc29sdmVzIHRvIHRydWUuXG4gKlxuICogRm9yIGEgc2luZ2xlIGNvbXBvbmVudCdzIG5hdmlnYXRpb24sIG9ubHkgb25lIG9mIGVpdGhlciB7QGxpbmsgT25BY3RpdmF0ZX0gb3Ige0BsaW5rIE9uUmV1c2V9XG4gKiB3aWxsIGJlIGNhbGxlZCwgZGVwZW5kaW5nIG9uIHRoZSByZXN1bHQgb2Yge0BsaW5rIENhblJldXNlfS5cbiAqXG4gKiBUaGUgYHJvdXRlck9uUmV1c2VgIGhvb2sgaXMgY2FsbGVkIHdpdGggdHdvIHtAbGluayBDb21wb25lbnRJbnN0cnVjdGlvbn1zIGFzIHBhcmFtZXRlcnMsIHRoZVxuICogZmlyc3RcbiAqIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCByb3V0ZSBiZWluZyBuYXZpZ2F0ZWQgdG8sIGFuZCB0aGUgc2Vjb25kIHBhcmFtZXRlciByZXByZXNlbnRpbmcgdGhlXG4gKiBwcmV2aW91cyByb3V0ZSBvciBgbnVsbGAuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIHtAZXhhbXBsZSByb3V0ZXIvdHMvcmV1c2UvcmV1c2VfZXhhbXBsZS50cyByZWdpb249J3JldXNlQ21wJ31cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPblJldXNlIHtcbiAgcm91dGVyT25SZXVzZShuZXh0SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uLCBwcmV2SW5zdHJ1Y3Rpb246IENvbXBvbmVudEluc3RydWN0aW9uKTogYW55IHxcbiAgICAgIFByb21pc2U8YW55Pjtcbn1cblxuLyoqXG4gKiBEZWZpbmVzIHJvdXRlIGxpZmVjeWNsZSBtZXRob2QgYHJvdXRlck9uRGVhY3RpdmF0ZWAsIHdoaWNoIGlzIGNhbGxlZCBieSB0aGUgcm91dGVyIGJlZm9yZVxuICogZGVzdHJveWluZ1xuICogYSBjb21wb25lbnQgYXMgcGFydCBvZiBhIHJvdXRlIGNoYW5nZS5cbiAqXG4gKiBUaGUgYHJvdXRlck9uRGVhY3RpdmF0ZWAgaG9vayBpcyBjYWxsZWQgd2l0aCB0d28ge0BsaW5rIENvbXBvbmVudEluc3RydWN0aW9ufXMgYXMgcGFyYW1ldGVycywgdGhlXG4gKiBmaXJzdFxuICogcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHJvdXRlIGJlaW5nIG5hdmlnYXRlZCB0bywgYW5kIHRoZSBzZWNvbmQgcGFyYW1ldGVyIHJlcHJlc2VudGluZyB0aGVcbiAqIHByZXZpb3VzIHJvdXRlLlxuICpcbiAqIElmIGByb3V0ZXJPbkRlYWN0aXZhdGVgIHJldHVybnMgYSBwcm9taXNlLCB0aGUgcm91dGUgY2hhbmdlIHdpbGwgd2FpdCB1bnRpbCB0aGUgcHJvbWlzZSBzZXR0bGVzLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiB7QGV4YW1wbGUgcm91dGVyL3RzL29uX2RlYWN0aXZhdGUvb25fZGVhY3RpdmF0ZV9leGFtcGxlLnRzIHJlZ2lvbj0ncm91dGVyT25EZWFjdGl2YXRlJ31cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPbkRlYWN0aXZhdGUge1xuICByb3V0ZXJPbkRlYWN0aXZhdGUobmV4dEluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgIHByZXZJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pOiBhbnkgfFxuICAgICAgUHJvbWlzZTxhbnk+O1xufVxuXG4vKipcbiAqIERlZmluZXMgcm91dGUgbGlmZWN5Y2xlIG1ldGhvZCBgcm91dGVyQ2FuUmV1c2VgLCB3aGljaCBpcyBjYWxsZWQgYnkgdGhlIHJvdXRlciB0byBkZXRlcm1pbmVcbiAqIHdoZXRoZXIgYVxuICogY29tcG9uZW50IHNob3VsZCBiZSByZXVzZWQgYWNyb3NzIHJvdXRlcywgb3Igd2hldGhlciB0byBkZXN0cm95IGFuZCBpbnN0YW50aWF0ZSBhIG5ldyBjb21wb25lbnQuXG4gKlxuICogVGhlIGByb3V0ZXJDYW5SZXVzZWAgaG9vayBpcyBjYWxsZWQgd2l0aCB0d28ge0BsaW5rIENvbXBvbmVudEluc3RydWN0aW9ufXMgYXMgcGFyYW1ldGVycywgdGhlXG4gKiBmaXJzdFxuICogcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHJvdXRlIGJlaW5nIG5hdmlnYXRlZCB0bywgYW5kIHRoZSBzZWNvbmQgcGFyYW1ldGVyIHJlcHJlc2VudGluZyB0aGVcbiAqIHByZXZpb3VzIHJvdXRlLlxuICpcbiAqIElmIGByb3V0ZXJDYW5SZXVzZWAgcmV0dXJucyBvciByZXNvbHZlcyB0byBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2lsbCBiZSByZXVzZWQgYW5kIHRoZVxuICoge0BsaW5rIE9uRGVhY3RpdmF0ZX0gaG9vayB3aWxsIGJlIHJ1bi4gSWYgYHJvdXRlckNhblJldXNlYCByZXR1cm5zIG9yIHJlc29sdmVzIHRvIGBmYWxzZWAsIGEgbmV3XG4gKiBjb21wb25lbnQgd2lsbCBiZSBpbnN0YW50aWF0ZWQsIGFuZCB0aGUgZXhpc3RpbmcgY29tcG9uZW50IHdpbGwgYmUgZGVhY3RpdmF0ZWQgYW5kIHJlbW92ZWQgYXNcbiAqIHBhcnQgb2YgdGhlIG5hdmlnYXRpb24uXG4gKlxuICogSWYgYHJvdXRlckNhblJldXNlYCB0aHJvd3Mgb3IgcmVqZWN0cywgdGhlIG5hdmlnYXRpb24gd2lsbCBiZSBjYW5jZWxsZWQuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIHtAZXhhbXBsZSByb3V0ZXIvdHMvcmV1c2UvcmV1c2VfZXhhbXBsZS50cyByZWdpb249J3JldXNlQ21wJ31cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYW5SZXVzZSB7XG4gIHJvdXRlckNhblJldXNlKG5leHRJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24sXG4gICAgICAgICAgICAgICAgIHByZXZJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24pOiBib29sZWFuIHxcbiAgICAgIFByb21pc2U8Ym9vbGVhbj47XG59XG5cbi8qKlxuICogRGVmaW5lcyByb3V0ZSBsaWZlY3ljbGUgbWV0aG9kIGByb3V0ZXJDYW5EZWFjdGl2YXRlYCwgd2hpY2ggaXMgY2FsbGVkIGJ5IHRoZSByb3V0ZXIgdG8gZGV0ZXJtaW5lXG4gKiBpZiBhIGNvbXBvbmVudCBjYW4gYmUgcmVtb3ZlZCBhcyBwYXJ0IG9mIGEgbmF2aWdhdGlvbi5cbiAqXG4gKiBUaGUgYHJvdXRlckNhbkRlYWN0aXZhdGVgIGhvb2sgaXMgY2FsbGVkIHdpdGggdHdvIHtAbGluayBDb21wb25lbnRJbnN0cnVjdGlvbn1zIGFzIHBhcmFtZXRlcnMsXG4gKiB0aGVcbiAqIGZpcnN0IHJlcHJlc2VudGluZyB0aGUgY3VycmVudCByb3V0ZSBiZWluZyBuYXZpZ2F0ZWQgdG8sIGFuZCB0aGUgc2Vjb25kIHBhcmFtZXRlclxuICogcmVwcmVzZW50aW5nIHRoZSBwcmV2aW91cyByb3V0ZS5cbiAqXG4gKiBJZiBgcm91dGVyQ2FuRGVhY3RpdmF0ZWAgcmV0dXJucyBvciByZXNvbHZlcyB0byBgZmFsc2VgLCB0aGUgbmF2aWdhdGlvbiBpcyBjYW5jZWxsZWQuIElmIGl0XG4gKiByZXR1cm5zIG9yXG4gKiByZXNvbHZlcyB0byBgdHJ1ZWAsIHRoZW4gdGhlIG5hdmlnYXRpb24gY29udGludWVzLCBhbmQgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGRlYWN0aXZhdGVkXG4gKiAodGhlIHtAbGluayBPbkRlYWN0aXZhdGV9IGhvb2sgd2lsbCBiZSBydW4pIGFuZCByZW1vdmVkLlxuICpcbiAqIElmIGByb3V0ZXJDYW5EZWFjdGl2YXRlYCB0aHJvd3Mgb3IgcmVqZWN0cywgdGhlIG5hdmlnYXRpb24gaXMgYWxzbyBjYW5jZWxsZWQuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIHtAZXhhbXBsZSByb3V0ZXIvdHMvY2FuX2RlYWN0aXZhdGUvY2FuX2RlYWN0aXZhdGVfZXhhbXBsZS50cyByZWdpb249J3JvdXRlckNhbkRlYWN0aXZhdGUnfVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhbkRlYWN0aXZhdGUge1xuICByb3V0ZXJDYW5EZWFjdGl2YXRlKG5leHRJbnN0cnVjdGlvbjogQ29tcG9uZW50SW5zdHJ1Y3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgcHJldkluc3RydWN0aW9uOiBDb21wb25lbnRJbnN0cnVjdGlvbik6IGJvb2xlYW4gfFxuICAgICAgUHJvbWlzZTxib29sZWFuPjtcbn1cbiJdfQ==