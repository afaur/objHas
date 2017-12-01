// fn that take an object and returns a fn that will check if prop is on object
const hop = o => p => o.hasOwnProperty(p)

// Takes o(bject) and p(rop)s
module.exports = function (o, ...ps) {
  let e // error
  // While we have props to check, check each prop
  // When o(bject) is defined & has prop then reassign it with new val
  // When o(bject) not defined || doesn't have prop then set error to true
  while (p = ps.shift()) { o && hop(o)(p) ? o = o[p] : e = true }
  // encountered an error? if so then return false
  // no error? Double check o value...
  // If o happens to be undefined then return false otherwise return true
  return e ? false : (o ? true : false)
}
