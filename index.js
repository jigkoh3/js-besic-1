const coins = require("./coin-exchange").exchange(48);
coins.forEach(coin => {
    console.log(`แลกเหรียญ ${coin.val} บาท ได้จำนวน ${coin.qty} เหรียญ`);
});