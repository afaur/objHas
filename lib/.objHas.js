/* objHas.js compatible with older browsers and node versions */
var hop = function(o) { return function(p) { return o.hasOwnProperty(p) } }
module.exports = function (/*o, ...ps*/) {
  var args = Array.prototype.slice.call(arguments)
  var o = args.shift(), ps = args, e
  while (p = ps.shift()) { o && hop(o)(p) ? o = o[p] : e = true }
  return e ? false : (o ? true : false)
}
