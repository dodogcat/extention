function random_enough_big(min, max) {
  var ran = Math.floor(Math.random() * (max - min)) + min;

  return ran;
}

function check_prime(number) {
  // nan은 비교가 까다롭다...
  if (isNaN(number)) {
    return false;
  }
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}

function check_coprime(a, b) {
  var small;
  var big;

  if (a > b) {
    big = a;
    small = b;
  } else {
    big = b;
    small = a;
  }

  for (var i = 2; i < small; i++) {
    if (small % i == 0 && big % i == 0) {
      return false;
    }
  }

  return true;
}

function power_up(a, b) {
  var sum = 1n;
  for (var i = 0; i < b; i++) {
    sum = sum * BigInt(a);
  }

  return sum;
}

function RSA(input) {
  var input_max = -1;
  for (var i = 0; i < input.length; i++) {
    if (input_max < input[i].charCodeAt()) {
      input_max = input[i].charCodeAt();
    }
  }

  var min = 2;
  var max = 500;

  var p;
  var q;

  // 입력된 p 가 소수가 아니면 다시 랜덤으로 설정
  var pq_changed = false;
  if (check_prime(p) == false) {
    pq_changed = true;
    // alert("recheck second line, 'p' is automatically setting");
    while (true) {
      p = random_enough_big(min, max);
      console.log("try p");
      if (check_prime(p)) {
        break;
      }
    }
  }
  console.log("p = " + p);

  if (check_prime(q) == false || input_max >= p * q) {
    pq_changed = true;
    // alert("recheck third line, 'q' is automatically setting");
    while (true) {
      q = random_enough_big(min, max);
      console.log("try q");
      if (check_prime(q) && input_max < p * q) {
        break;
      }
    }
  }
  console.log("q = " + q);

  if (pq_changed) {
    alert("p is " + p + ", q is " + q);
  }

  var n = p * q;
  console.log(n);
  var strange_n = (p - 1) * (q - 1);
  console.log(strange_n);

  var e;
  while (true) {
    e = random_enough_big(2, strange_n);
    console.log("try e");
    if (check_coprime(e, strange_n)) {
      break;
    }
  }
  console.log("e = " + e);

  var d;
  //  랜덤버전
  //   while (true) {
  //     d = random_enough_big(1, strange_n);
  //     console.log("try d");
  //     if ((e * d) % strange_n == 1) {
  //       break;
  //     }
  //   }
  //  랜덤 보다는 확실하게 값을 뽑아주는 for 사용
  for (var i = strange_n - 1; i >= 1; i--) {
    d = i;
    console.log("try d");
    if ((BigInt(e) * BigInt(d)) % BigInt(strange_n) == 1n) {
      break;
    }
  }
  console.log("d = " + d);

  console.log(
    "set n = " +
      n +
      ", and pita_n = " +
      strange_n +
      ", and e = " +
      e +
      ", and d = " +
      d
  );

  console.log("start encrypted");
  console.log("-----------------------");
  console.log("-----------------------");

  var encrypted = [];
  for (var i = 0; i < input.length; i++) {
    // console.log(input[i] + " is " + input[i].charCodeAt());
    encrypted[i] = BigInt(power_up(input[i].charCodeAt(), e)) % BigInt(n);
    // console.log(power_up(input[i].charCodeAt(), e));
    // console.log(n);
    // console.log(encrypted[i]);
  }

  console.log(encrypted);

  console.log("-----------------------");
  console.log("-----------------------");
  console.log("start decrypted");
  console.log("-----------------------");
  console.log("-----------------------");

  var decrypted = [];
  for (var i = 0; i < encrypted.length; i++) {
    // console.log(encrypted[i] + " is " + Number(encrypted[i]));
    decrypted[i] = String.fromCharCode(
      Number(power_up(Number(encrypted[i]), d) % BigInt(n))
    );
    // console.log(power_up(Number(encrypted[i]), d));
    // console.log(n);
    // console.log(Number(power_up(Number(encrypted[i]), d) % BigInt(n)));
    // console.log(decrypted[i]);
  }

  console.log(decrypted);

  console.log("-----------------------");
  console.log("-----------------------");
}

RSA("put here");
