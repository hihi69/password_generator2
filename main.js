      /* パスワードジェネレーター */
      let passBox = document.getElementById("passBox");
      /* const length = 12; */
      let upperCase = document.getElementById("upperCase");
      let lowerCase = document.getElementById("lowerCase");
      let number = document.getElementById("number");
      let symbol = document.getElementById("symbol");
      let genBtn = document.getElementById("genBtn");
      let inputSlider = document.getElementById("inputSlider");
      let sliderValue = document.getElementById("sliderValue");

      const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowerChars = "abcdefghijklmnopqrsttuvwxz";
      const allNumbers = "0123456789";
      const allSymbols = "@#$^&*()_+~|{}[],./-=";

/*       const allChars = upperChars + lowerChars + allNumbers + allSymbols;
 */
      // スライダー
      sliderValue.textContent = inputSlider.value;
      inputSlider.addEventListener("input", () => {
        sliderValue.textContent = inputSlider.value;
      }); 

      //パスワード生成ボタン
      genBtn.addEventListener("click", () => {
        if (!lowerCase.checked && !upperCase.checked && !number.checked && !symbol.checked) {
          alert("最低でも1つのチェックボックスにチェックしてください。");
          return;
        }
        passBox.value = generatePassword();
      });

      // パスワード生成
      function generatePassword() {
        let genPassword = "";
        let allChars = "";

        allChars += lowerCase.checked ? lowerChars : "";
        allChars += upperCase.checked ? upperChars : "";
        allChars += number.checked ? allNumbers : "";
        allChars += symbol.checked ? allSymbols : "";

        if (allChars == "" || allChars.length == 0) {
          return genPassword;
        }

        let i = 1;
        while (i <= inputSlider.value) {
          genPassword += allChars.charAt(
            Math.floor(Math.random() * allChars.length)
          );
          i++;
        }
        return genPassword;
      }
      /* function createPassword() {
        let password = "";
        password += upperChars[Math.floor(Math.random() * upperChars.length)];
        password += lowerChars[Math.floor(Math.random() * lowerChars.length)];
        password += allNumbers[Math.floor(Math.random() * allNumbers.length)];
        password += allSymbols[Math.floor(Math.random() * allSymbols.length)];

        while (length > password.length) {
          password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        passwordBox.value = password;
      } */

      // コピーボタン
      function copyPassword() {
        passwordBox.select();
        document.execCommand("copy");
      }