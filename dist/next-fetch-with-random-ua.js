/*!
 * name: @feizheng/next-fetch-with-random-ua
 * description: Random user-agent for fetch.
 * homepage: https://github.com/afeiship/next-fetch-with-random-ua
 * version: 1.0.0
 * date: 2020-06-28T00:53:13.449Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nxDeepAssign = nx.deepAssign || require('@feizheng/next-deep-assign');
  var nxRandomUa = nx.randomUa || require('@feizheng/next-random-ua');
  var DEFAULT_OPTIONS = {
    headers: { 'User-Agent': nxRandomUa }
  };

  nx.fetchWithRandomUa = function (inFetch) {
    return function (inUrl, inOptions) {
      var options = nxDeepAssign(null, DEFAULT_OPTIONS, inOptions);
      return inFetch(inUrl, options);
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fetchWithRandomUa;
  }
})();

//# sourceMappingURL=next-fetch-with-random-ua.js.map
