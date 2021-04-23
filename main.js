class Bank {
    constructor(id,
                fund = 15000, 
                capitalizationTime = 0, 
                nextCapitalization = 0, 
                profit = 0, 
                interest = 0, 
                transferTax = 0)
    {
        this.id = id;
        this.fund = fund;
        this.interest = interest;
        this.profit = profit;
        this.capitalizationTime = capitalizationTime;
        this.transferTax = transferTax;
        this.nextCapitalization = nextCapitalization;
    }

    randBankProperties() {
        this.interest = Math.round(((Math.random() * 100) + 1) * 100) / 100;
        this.capitalizationTime = Math.floor((Math.random() * 5) + 5);
        this.transferTax = Math.floor(Math.random() * 15) + 1;
    }

    calculateNextCapitalizationTime() {
        this.nextCapitalization = this.nextCapitalization + this.capitalizationTime;
    }
}

function capitalization() {
    for(i = 0; i < banksTab.length; i++) {
        // Check if time for capitalization has come
        if (time === banksTab[i].nextCapitalization ) {
            banksTab[i].fund += banksTab[i].profit;
            banksTab[i].profit = 0;
            banksTab[i].randBankProperties();
            banksTab[i].calculateNextCapitalizationTime();

            // Money transfer 
            var maxIntrest = 0;
            for(j=0; j<banksTab.length; j++) {
                if(banksTab[j].interest > maxIntrest) {
                    maxIntrest = banksTab[i].interest;
                    var bankNo = j;
                }
            }

            if((banksTab[i].fund * banksTab[i].interest) * (banksTab[i].nextCapitalization - time) < (((1 - (banksTab[bankNo].transferTax / 100)) * banksTab[bankNo].fund) * banksTab[bankNo].interest) * (banksTab[bankNo].nextCapitalization - time)) {
                banksTab[bankNo].fund = banksTab[bankNo].fund + ((1-banksTab[bankNo].transferTax / 100) * banksTab[i].fund);
                banksTab[i].fund = 0;
            }
        }
    }
}

function earnMoney(){
    for(i = 0; i < banksTab.length; i++) {
        banksTab[i].profit = Math.floor((banksTab[i].profit + (banksTab[i].fund * (banksTab[i].interest / 100))) * 100) / 100;

    }
}

function printBanksCurrentState(){
    if ((time+1)%60 == 0) {
        var fullFund = 0;
        for(i = 0; i < banksTab.length; i++) {
            console.log("Bank " + i + "  Fund: "+ Math.floor(banksTab[i].fund * 100) / 100 + " Profit: " + Math.floor(banksTab[i].profit * 100) / 100);
            fullFund = Math.floor((fullFund + banksTab[i].fund + banksTab[i].interest) * 100) / 100;
        }
        console.log("*** Full fund: " + fullFund + " ***");
    }
}


function simulation() {
    capitalization();        
    earnMoney();
    printBanksCurrentState();

    time +=1;
}

var time = 0;
var banksTab = []
for(i = 0 ; i <= 2 ; i++) {
    banksTab[i] = new Bank(i);
}
setInterval(simulation, 100);