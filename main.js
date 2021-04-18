class Bank {

    constructor(fund = 15000, capitalization_time = 0, interest, transfer_tax, next_capitalization){
        this.fund = fund;
        this.interest = interest;
        this.capitalization_time = capitalization_time;
        this.transfer_tax = transfer_tax;
        this.next_capitalization = next_capitalization;
    }

    RandInterest() {
        this.interest = Math.floor(Math.random() * 15)+ 1;
    }

    RandCapitalizationTime() {
        this.capitalization_time = Math.floor(Math.random() * 5) + 5;
    }

    CalcualteNextCapitalizationTime(time) {
        this.next_capitalization = this.capitalization_time + time;
    }

    RandTransferTax() {
        this.transfer_tax = Math.floor(Math.random() * 15) + 1;
    }

}



var time = 0;
banks = []



for(i = 0 ; i <= 2 ; i++) {
    // interest = Math.floor(Math.random() * 14)+ 1;
    // capitalization_time = Math.floor(Math.random() * 5) + 5;
    // transfer_tax = Math.floor(Math.random() * 14) + 1;
    // obj = "bank" + i;
    // banks[i] = new Bank(start_fund, interest, capitalization_time, transfer_tax);
    // banks.push(obj);
    banks[i] = new Bank;
}

console.log(banks)

while (true) {
    for(i = 0; i <= banks.length; i++) {
        if (time == banks[i].capitalization_time) {
            banks[i].RandInterest();
            banks[i].RandCapitalizationTime();
            banks[i].CalcualteNextCapitalizationTime(time);
            banks[i].RandTransferTax();
        }
        banks[i].fund = banks[i].fund + (banks[i].fund * banks[i].interest);
    }

    if (time%60 == 0) {
        var full_fund = 0;
        for(i = 0; i <= banks.lengthl; i++) {
            full_fund = full_fund + banks[i];
        }
        console.log("Full fund: " + full_fund);
    }
    time = time++;

    console.log(banks);
}
