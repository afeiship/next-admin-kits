/*!
 * name: @jswork/next-fetch-with-random-ua
 * description: Random user-agent for fetch.
 * homepage: https://github.com/afeiship/next-fetch-with-random-ua
 * version: 1.0.0
 * date: 2020-11-20 22:32:59
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxDeepAssign = nx.deepAssign || require('@jswork/next-deep-assign');
  var nxRandomUa = nx.randomUa || require('@jswork/next-random-ua');
  var DEFAULT_OPTIONS = {
    headers: { 'User-Agent': nxRandomUa() }
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
