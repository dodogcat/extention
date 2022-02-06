// //alert("content");

// //충분히 큰 수를 위해서 최소 10000
// function random_enough_big(min, max) {
//   var ran = Math.floor(Math.random() * (max - min)) + min;

//   return ran;
// }

// function check_prime(number) {
//   for (var i = 2; i < number; i++) {
//     if (number % i == 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function check_coprime(a, b) {
//   var small;
//   var big;

//   if (a > b) {
//     big = a;
//     small = b;
//   } else {
//     big = b;
//     small = a;
//   }

//   for (var i = 2; i < small; i++) {
//     if (small % i == 0 && big % i == 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function power_up(a, b) {
//   var sum = 1;
//   for (var i = 0; i < b; i++) {
//     sum = sum * a;
//   }

//   return sum;
// }

// function RSA() {
//   alert("Start");

//   var input = "like this";

//   var p;
//   var q;

//   while (true) {
//     p = random_enough_big(10000, 100000);
//     console.log("try p");
//     if (check_prime(p)) {
//       break;
//     }
//   }
//   while (true) {
//     q = random_enough_big(10000, 100000);
//     console.log("try q");
//     if (check_prime(q)) {
//       break;
//     }
//   }

//   //  alert("set p = " + p + ", and q = " + q);
//   console.log("set p = " + p + ", and q = " + q);

//   var n = p * q;
//   var strange_n = (p - 1) * (q - 1);
//   var e;
//   while (true) {
//     e = random_enough_big(1, strange_n);
//     console.log("try e");
//     if (check_coprime(e)) {
//       break;
//     }
//   }

//   var d;
//   while (true) {
//     d = random_enough_big(1, strange_n);
//     console.log("try d");
//     if ((e * d) % strange_n == 1) {
//       break;
//     }
//   }
//   // alert(
//   //   "set n = " +
//   //     n +
//   //     ", and strange_n = " +
//   //     strange_n +
//   //     ", and e = " +
//   //     e +
//   //     ", and d = " +
//   //     d
//   // );
//   console.log(
//     "set n = " +
//       n +
//       ", and strange_n = " +
//       strange_n +
//       ", and e = " +
//       e +
//       ", and d = " +
//       d
//   );

//   console.log("start encrypted");

//   var encrypted = [];
//   for (var i = 0; i < input.length; i++) {
//     encrypted[i] = power(input[i].charCodeAt(), e) % n;
//   }

//   alert(encrypted);

//   console.log("start decrypted");

//   var decrypted = [];
//   for (var i = 0; i < encrypted.length; i++) {
//     decrypted[i] = String.fromCharCode(power(encrypted[i], d) % n);
//   }

//   alert(decrypted);
// }
