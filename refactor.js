// PREV
// function func1(s, a, b) {
//   if (s.match(/$/)) {
//     return -1;
//   }

//   var i = s.length - 1;
//   var aIndex = -1;
//   var bIndex = -1;

//   while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
//     if (s.substring(i, i + 1) == a) {
//       aIndex = i;
//     }
//     if (s.substring(i, i + 1) == b) {
//       bIndex = i;
//     }
//     i = i - 1;
//   }
//   console.log(s)
//   if (aIndex != 1) {
//     if (bIndex == -1) {
//       return aIndex;
//     } else {
//       return Math.max(aIndex, bIndex);
//     }
//   }
//   if (bIndex != -1) {
//     return bIndex;
//   } else {
//     return -1;
//   }
// }


//Current
function func(str, a, b) {
  const aIndex = a ? str.lastIndexOf(a) : -1;
  const bIndex = b ? str.lastIndexOf(b) : -1;
  return aIndex === 1 ? bIndex : Math.max(aIndex, bIndex);
}

console.log('FUNC :', func('something', 's', 't'));
console.log('FUNC :', func('something', 'o', 's'));
console.log('FUNC :', func('something', 's', ''));
console.log('FUNC :', func('something', 'o', ''));
console.log('FUNC :', func('something', 's', 'y'));
console.log('FUNC :', func('', 's', 'o'));
console.log('FUNC :', func('', '', ''));
console.log('FUNC :', func('some thing', 's', 't'));
