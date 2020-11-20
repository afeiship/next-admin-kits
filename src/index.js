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
