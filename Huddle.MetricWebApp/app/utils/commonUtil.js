"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonUtil = (function () {
    function CommonUtil() {
    }
    CommonUtil.isInMsTeam = function () {
        var isInIFrame = (window.location != window.parent.location) ? true : false;
        return isInIFrame;
    };
    CommonUtil.getTeamId = function () {
        return this.getParam(this.teamId);
    };
    CommonUtil.getParam = function (key) {
        // This function is anonymous, is executed immediately and 
        // the return value is assigned to QueryString!
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            }
            else if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            }
            else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string[key];
    };
    CommonUtil.navigateToUrl = function (url, router) {
        var targetUrl = url;
        if (targetUrl.indexOf(this.teamId) < 0)
            targetUrl += '?' + this.teamId + "=" + this.getTeamId();
        //location.href = targetUrl;
        return router.navigateByUrl(targetUrl);
    };
    return CommonUtil;
}());
CommonUtil.teamId = "teamId";
exports.CommonUtil = CommonUtil;
//# sourceMappingURL=commonUtil.js.map