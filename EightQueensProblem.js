let perfect = 0;
NQueens(4);
console.log("number of perfect is: " + perfect);
function NQueens(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = null;
    }
  }

  let i = 0;
  let j = 0;
  let loop = true;
  while (loop) {
    console.log(i, j);
    arr[i][j] = "Q";
    let violation = false;

    let k = 0;
    while (k < i) {
      if (arr[k][j] == "Q") {
        //up
        violation = true;
      }
      k++;
    }

    k = 0;
    while (k < j) {
      if (arr[i][k] == "Q") {
        //left
        violation = true;
      }
      k++;
    }

    k = 1;
    let l = -1;
    while (i + k < n && j + l >= 0) {
      if (arr[i + k][j + l] == "Q") {
        //  左下
        violation = true;
      }
      k++;
      l--;
    }

    k = -1;
    while (i + k >= 0 && j + k >= 0) {
      if (arr[i + k][j + k] == "Q") {
        //左上
        violation = true;
      }
      k--;
    }

    if (!violation) {
      console.log("okay");
      console.log(arr);
      if (j == n - 1) {
        perfect++;
        console.log("Perfect");
        console.log(arr);
        arr[i][j] = null;
        i++;
      } else {
        i = 0;
        j++;
      }
    }
    if (violation) {
      console.log("not okay");
      console.log(arr);
      arr[i][j] = null;
      i++;
    }

    function check() {
      j--;
      for (b = 0; b < arr.length; b++) {
        if (arr[b][j] == "Q") {
          arr[b][j] = null;
          console.log(" b and j is ");
          console.log(b, j);
          i = b + 1;
        }
      }
    }
    while (i >= n) {
      check();
      if (j < 0) {
        console.log("dead end");
        loop = false;
        break;
      }
    }
  }
}
