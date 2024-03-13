      /* パスワードジェネレーター */
      let passBox = document.getElementById("passBox");
      
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

      // コピーボタン
      copyIcon.addEventListener("click", () => {
        if (passBox.value != "" || passBox.value.length >= 1) {
          navigator.clipboard.writeText(passBox.value);
          copyIcon.innerText = "check";
          copyIcon.title = "Paassword Copied!";

          setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
          }, 1000);
        }
      });