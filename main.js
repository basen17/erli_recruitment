class Bank {
    constructor(id,
                fund = 15000, 
                capitalization_time = 0, 
                next_capitalization = 0, 
                profit = 0, 
                interest = 0, 
                transfer_tax = 0)
    {
        this.id = id;
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

function Capitalization() {
    for(i = 0; i < banks_tab.length; i++) {
        // Check if time for capitalization has come
        if (time === banks_tab[i].next_capitalization ) {
            banks_tab[i].fund += banks_tab[i].profit;
            banks_tab[i].profit = 0;
            banks_tab[i].RandBankProperties();
            banks_tab[i].CalculateNextCapitalizationTime();

            // Money transfer 
            var max_intrest = 0;
            for(j=0; j<banks_tab.length; j++) {
                if(banks_tab[j].interest > max_intrest) {
                    max_intrest = banks_tab[i].interest;
                    bank_no = j;
                }
            }

            console.log(banks_tab)
            if((banks_tab[i].fund * banks_tab[i].interest) * (banks_tab[i].next_capitalization - time) < (1 - (banks_tab[bank_no].transfer_tax / 100)) * (banks_tab[bank_no].fund * (banks_tab[bank_no].interest) * banks_tab[bank_no].next_capitalization - time)) {
                banks_tab[bank_no].fund = banks_tab[bank_no].fund + (1-banks_tab[bank_no].transfer_tax / 100) * banks_tab[i].fund;
                banks_tab[i].fund = 0;
                console.log('=====Transfer=====')
            }
        }
    }
}

function EarnMoney(){
    for(i = 0; i < banks_tab.length; i++) {
        banks_tab[i].profit = Math.floor((banks_tab[i].profit + (banks_tab[i].fund * (banks_tab[i].interest / 100))) * 100) / 100;

    }
}

function PrintBanksCurrentState(){
    if ((time+1)%60 == 0) {
        var full_fund = 0;
        for(i = 0; i < banks_tab.length; i++) {
            console.log("Bank " + i + "  Fund: "+ banks_tab[i].fund + " Profit: " + banks_tab[i].profit);
            full_fund = Math.floor((full_fund + banks_tab[i].fund + banks_tab[i].interest) * 100) / 100;
        }
        console.log("*** Full fund: " + full_fund + " ***");
    }
}


function Simulation() {
    Capitalization();        
    EarnMoney();
    PrintBanksCurrentState();

    console.log("Time: " + time);
    time +=1;
}

var time = 0;
banks_tab = []
for(i = 0 ; i <= 2 ; i++) {
    banks_tab[i] = new Bank(i);
}
console.log(banks_tab)
setInterval(Simulation, 100);