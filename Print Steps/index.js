// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution 1
// function steps(n) {
//   for (let i=1; i<=n; i++) {
//     let step = '';
//     for (let j=1; j<=i; j++) {
//       step += '#';
//     }
//     for (let k=n; k>i; k--) {
//       step += ' ';
//     }
//     console.log(step);
//   }
// }

// Solution 2
// function steps(n) {
//   for (let row=0; row<n; row++) {
//     let step = '';

//     for (let col=0; col<n; col++) {
//       if (col <= row)
//         step += '#';
//       else
//         step += ' ';
//     }
//     console.log(step);
//   }
// }

// Solution 3
function steps(n, row=0, step='') {
  if (n==row)
    return;

  if (n==step.length) {
    console.log(step);
    return steps(n, row+1);
  }

  const add = step.length <= row ? '#' : ' ';
  steps(n, row, step + add);
}

module.exports = steps;
