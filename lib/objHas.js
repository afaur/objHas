// fn that takes an object and returns a fn that will check if prop is on object
const hop = o => p => o.hasOwnProperty(p)

// fn that takes an a(rray) and a c(all)b(ack) and calls the cb on array items
const fe = (a, cb) => {for (let i=0; i<a.length; i++) { cb(a[i]) }}

// Takes o(bject) and p(rop)s
module.exports = function (o, ...ps) {
  let e // error
  // While we have props to check, check each prop
  // When o(bject) is defined & has prop then reassign it with new val
  // When o(bject) not defined || doesn't have prop then set error to true
  fe(ps, p => o && hop(o)(p) ? o = o[p] : e = true)
  // encountered an error? if so then return false
  // no error? Double check o value...
  // If o happens to be undefined then return false otherwise return true
  return e ? false : (o ? true : false)
}
