module.exports.exchange = (num)=>{
    const coins= [{val:10,qty:0},{val:5,qty:0},{val:1,qty:0}];
    for(i=0;i < coins.length; i++){
        if(num >= coins[i].val){
            coins[i].qty = Math.floor(num/coins[i].val);
            num = Math.floor(num%coins[i].val);
        }
    }
    return coins;
}