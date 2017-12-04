// Takes object then returns fn that checks if prop is on object.
const hop = o => p => o.hasOwnProperty(p)

// Takes a(rray) and c(all)b(ack) then calls the cb on array items.
const fe = (a, cb) => {for (let i=0; i<a.length; i++) { cb(a[i]) }}

// - Takes o(bject) and p(rop)s and returns a Bool.
//   - *Object*: Look for nested properties on this.
//   - *Props*: One or many Strings used to search the object.
//   - *Bool*: If depth reached and value of final prop is truthy.
module.exports = function (o, ...ps)
{
  // Error variable to determine if a nested property wasn't found.
  let e
  // - While we have props to check, check each prop
  //   - Obj defined and has prop reassign it with new val
  //   - Obj not defined or does not have prop set error to true
  fe(ps, p => o && hop(o)(p) ? o = o[p] : e = true)
  // - Encountered an error?
  //   - If so then return false
  //   - Else double check o value
  //     - If o happens to be truthy return true
  //     - Else return false
  return e ? false : (o ? true : false)
}
