/* objHas.js compatible with older browsers and node versions */
var hop = function(o) { return function(p) { return o.hasOwnProperty(p) } }
var fe = function (a, cb) { for (let i=0; i<a.length; i++) { cb(a[i]) } }
module.exports = function (/*o, ...ps*/) {
  var args = Array.prototype.slice.call(arguments)
  var o = args.shift(), ps = args, e
  fe(ps, function(p) { o && hop(o)(p) ? o = o[p] : e = true })
  return e ? false : (o ? true : false)
}
