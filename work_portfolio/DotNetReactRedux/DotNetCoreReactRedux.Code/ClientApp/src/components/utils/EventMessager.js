"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var ShowInfoInSidePanel = /** @class */ (function () {
    function ShowInfoInSidePanel(itemClicked) {
        this._itemClicked = itemClicked;
    }
    Object.defineProperty(ShowInfoInSidePanel.prototype, "itemClicked", {
        get: function () {
            return this._itemClicked;
        },
        enumerable: true,
        configurable: true
    });
    return ShowInfoInSidePanel;
}());
exports.ShowInfoInSidePanel = ShowInfoInSidePanel;
var EventMessager = /** @class */ (function () {
    function EventMessager() {
        this.subject = new rxjs_1.Subject();
    }
    EventMessager.prototype.publish = function (message) {
        this.subject.next(message);
    };
    EventMessager.prototype.observe = function () {
        return this.subject.asObservable();
    };
    return EventMessager;
}());
exports.EventMessager = EventMessager;
//# sourceMappingURL=EventMessager.js.map