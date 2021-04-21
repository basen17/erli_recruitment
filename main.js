class Bank {

    constructor(fund = 15000, capitalization_time = 0, next_capitalization = 0, interest, transfer_tax){
        this.fund = fund;
        this.interest = interest;
        this.capitalization_time = capitalization_time;
        this.transfer_tax = transfer_tax;
        this.next_capitalization = next_capitalization;
    }

    RandInterest() {
        this.interest = Math.round(((Math.random() * 100) + 1) * 100) / 100;
        console.log("Interest: " + this.interest)
    }

    RandCapitalizationTime() {
        this.capitalization_time = Math.floor((Math.random() * 5) + 5);
        // console.log("Capitalization time: " + this.capitalization_time);
    }

    CalculateNextCapitalizationTime() {
        this.next_capitalization = this.next_capitalization + this.capitalization_time;
        // console.log("Next capitalization: " + this.next_capitalization)
    }

    RandTransferTax() {
        this.transfer_tax = Math.floor(Math.random() * 15) + 1;
        console.log("Transfer tax: " + this.transfer_tax);
    }

    PrintValues() {
        console.log(this.interest);
        console.log(this.capitalization_time);
        console.log(this.transfer_tax);
    }
}



// var time = 0;
banks_vector = []


// Create banks_vector vector
for(i = 0 ; i <= 2 ; i++) {
    banks_vector[i] = new Bank;
    banks_vector[i].RandTransferTax();
    // banks_vector[i].RandInterest();
    // banks_vector[i].RandCapitalizationTime();
    // banks_vector[i].CalculateNextCapitalizationTime();
    // banks_vector[i].RandTransferTax();
}

for(time=0;time<70;time++) {
    for(i = 0; i < banks_vector.length; i++) {

        // Check if time for capitalization
        // console.log("Time: " + time + " Next capitalization time: " + banks_vector[i].next_capitalization);
        if (time === banks_vector[i].next_capitalization) {
            banks_vector[i].RandInterest();
            banks_vector[i].RandCapitalizationTime();
            banks_vector[i].CalculateNextCapitalizationTime();
            // console.log("Bank " + i + " New capitalization time: " + banks_vector[i].next_capitalization);


            var res = Math.max.apply(Math,banks_vector.map(function(o){return o.interest;}))
            if (banks_vector[i].interest<res) {
                var max_intrest = 0;
                var bank_no = 0;
                for(j=0; j<banks_vector.length; j++){
                    if(max_intrest<banks_vector[j].interest){
                        max_intrest = banks_vector[j].interest;
                        bank_no = j;
                    }
                }
                console.log("Highest interest: " + max_intrest + " Bank no: " + bank_no);
                banks_vector[bank_no].fund = banks_vector[bank_no].fund + (banks_vector[i].fund - (banks_vector[i].fund * (banks_vector[i].transfer_tax / 100)));
                banks_vector[i].fund = 0;

                console.log("========Transfer fund========");
                console.log("Bank without money: " + banks_vector[i].fund + " bank with money: " + banks_vector[bank_no].fund)

            }

            // for(j = 0; j < banks_vector.length; j++) {
            //     if (banks_vector[i].interest < banks_vector[j].interest){
            //         console.log("Higher interest: " + banks_vector[i].interest + " || " + banks_vector[j].interest);
            //         var res = Math.max.apply(Math,banks_vector.map(function(o){return o.interest;}))

            //         var bank_index = banks_vector.find(function(o){return o.interest == res;})
            //         console.log("Highest intrest of bank no: " + res);
            //         console.log("Bank index: " + bank_index);
            //         // max_intrest = j;
            //         console.log("Bank no with higher interest: " + j);
            //     } 
            // }

            // if (banks_vector[i].fund * banks_vector[i].interest < ((banks_vector[i].fund - (banks_vector[i].fund * banks_vector[i].transfer_tax)) * banks_vector[bank_no].interest)) {
            //     console.log("========Transfer fund========");
            //     banks_vector[max_intrest].fund = banks_vector[max_intrest].fund + (banks_vector[i].fund - (banks_vector[i].fund * (banks_vector[i].transfer_tax / 100)));
            //     banks_vector[i].fund = 0;
            // }
        }
        
        
        // Earn money
        console.log('Bank ' + i + ' Interest ' + banks_vector[i].interest / 100)
        banks_vector[i].fund = Math.floor((banks_vector[i].fund + (banks_vector[i].fund * (banks_vector[i].interest / 100))) * 100) / 100;
    }


    // if (time%60 == 0) {
    //     // var full_fund = 0;
    //     for(i = 0; i < banks_vector.length; i++) {
    //         console.log(banks_vector[i].fund);
    //         full_fund = full_fund + banks_vector[i].fund;
    //     }
    //     // console.log("Full fund: " + full_fund);
    // }



    // Calculate full fund
    // var full_fund = 0;
    // for(i = 0; i < banks_vector.length; i++) {
    //     console.log("Bank " + i + "  Fund: "+ banks_vector[i].fund);
    //     full_fund = Math.floor((full_fund + banks_vector[i].fund) * 100) / 100;
    // }
    // console.log("Full fund: " + full_fund);

    // Calculate and print fund in each bank and full fund
    // if ((time)%60 == 0) {
    //     var full_fund = 0;
    //     for(i = 0; i < banks_vector.length; i++) {
    //         console.log("Bank " + i + "  Fund: "+ banks_vector[i].fund);
    //         full_fund = Math.floor((full_fund + banks_vector[i].fund) * 100) / 100;
    //     }
    //     console.log("*** Full fund: " + full_fund + " ***");
    // }

    // time = time + 1;
    console.log("Time: " + (time+1));
    var full_fund = 0;
    for(i = 0; i < banks_vector.length; i++) {
        console.log("Bank " + i + "  Fund: "+ banks_vector[i].fund);
        full_fund = Math.floor((full_fund + banks_vector[i].fund) * 100) / 100;
    }
    console.log("*** Full fund: " + full_fund + " ***");
}
