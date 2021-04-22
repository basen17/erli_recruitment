class Bank {

    constructor(fund = 15000, capitalization_time = 0, next_capitalization = 0, profit = 0, interest, transfer_tax){
        this.fund = fund;
        this.interest = interest;
        this.profit = profit;
        this.capitalization_time = capitalization_time;
        this.transfer_tax = transfer_tax;
        this.next_capitalization = next_capitalization;
    }

    RandBankProperties() {
        this.interest = Math.round(((Math.random() * 100) + 1) * 100) / 100;
        this.capitalization_time = Math.floor((Math.random() * 5) + 5);
        this.transfer_tax = Math.floor(Math.random() * 15) + 1;
    }

    CalculateNextCapitalizationTime() {
        this.next_capitalization = this.next_capitalization + this.capitalization_time;
    }
}

var time = 0;
banks_vector = []
for(i = 0 ; i <= 2 ; i++) {
    banks_vector[i] = new Bank;
}
setInterval(Simulation, 100);


function Simulation() {
    for(i = 0; i < banks_vector.length; i++) {
        // Check if time for capitalization has come
        if (time === banks_vector[i].next_capitalization ) {  // To się chyba powinno odbywać pierwszy raz podczas tworzenia wektora banków
            banks_vector[i].fund += banks_vector[i].profit;   // ale nie wiem czy dobrą  praktyką jest robienie tego przed pętlą
            banks_vector[i].profit = 0;                       // wydaje mi się, że można to jakoś zrobić wchodząc pierwszy raz do tej pętli
            banks_vector[i].RandBankProperties();
            banks_vector[i].CalculateNextCapitalizationTime();

            // Money transfer 
            var max_intrest = 0;                               // Przelewanie pieniędzy między bankami, jeśli w innym banku zarobi 
            for(j=0; j<banks_vector.length; j++) {             // więcej w tym samym czasie 
                if(banks_vector[j].interest > max_intrest) {   // opis mojego myślenia dodam osobno do wiadomości 
                    max_intrest = banks_vector[i].interest;
                    bank_no = j;
                }
            }

            console.log(banks_vector)
            if((banks_vector[i].fund * (banks_vector[i].interest * (banks_vector[i].next_capitalization - time))) < (banks_vector[bank_no].fund * (banks_vector[bank_no].interest * banks_vector[bank_no].next_capitalization - time) - (banks_vector[bank_no].fund * banks_vector[bank_no].transfer_tax / 100) )) {
                banks_vector[bank_no].fund = banks_vector[bank_no].fund + (banks_vector[i].fund - (banks_vector[i].fund * (banks_vector[i].transfer_tax / 100)));
                banks_vector[i].fund = 0;
                console.log('=====Transfer=====')
                console.log(banks_vector)
            }
        }

        
    }

    for(i = 0; i < banks_vector.length; i++) {
        // Earn money
        banks_vector[i].profit = Math.floor((banks_vector[i].profit + (banks_vector[i].fund * (banks_vector[i].interest / 100))) * 100) / 100;

    }
    
    // Print fund and profit in each bank
    if ((time+1)%60 == 0) {
        var full_fund = 0;
        for(i = 0; i < banks_vector.length; i++) {
            console.log("Bank " + i + "  Fund: "+ banks_vector[i].fund + " Profit: " + banks_vector[i].profit);
            full_fund = Math.floor((full_fund + banks_vector[i].fund + banks_vector[i].interest) * 100) / 100;
        }
        console.log("*** Full fund: " + full_fund + " ***");
    }
    console.log("Time: " + time);
    time +=1;
}
