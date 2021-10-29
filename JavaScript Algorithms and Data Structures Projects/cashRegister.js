/* --- Cash Register ---

Design a cash register drawer function checkCashRegister() that accepts purchase price as the 
first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is 
equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest 
to lowest order, as the value of the change key. 


Currency            Unit	     Amount
-------             -----       --------
Penny	            $0.01       (PENNY)
Nickel	            $0.05       (NICKEL)
Dime	            $0.1        (DIME)
Quarter	            $0.25       (QUARTER)
Dollar	            $1          (ONE)
Five Dollars	    $5          (FIVE)
Ten Dollars	        $10         (TEN)
Twenty Dollars	    $20         (TWENTY)
One-hundred Dollars	$100        (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

[
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]
*/

function checkCashRegister(price, cash, cid) {
    let amounts = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let change = [];
    let changeRequired = cash - price;
    let status = '';

    for (let i = cid.length - 1; i >= 0; i--) {
        let unitRemainingInRegister = cid[i][1];
        let unitAmountInChange = 0;

        while (changeRequired >= amounts[i] && unitRemainingInRegister > 0) {
            unitAmountInChange = parseFloat((unitAmountInChange + amounts[i]).toFixed(2));
            unitRemainingInRegister = parseFloat((unitRemainingInRegister - amounts[i]).toFixed(2))
            changeRequired = parseFloat((changeRequired - amounts[i]).toFixed(2))
        }
        console.log(unitAmountInChange, cid[i][1])
        if (unitAmountInChange != cid[i][1]) status = 'OPEN';

        if (unitAmountInChange > 0) {
            change.push([cid[i][0], unitAmountInChange]);
        }
    }
    // If there's still change needed
    if (changeRequired > 0) {
        status = "INSUFFICIENT_FUNDS";
        change = [];
    } 
    if (status == "") {
        status = "CLOSED";
        change = cid;
    }
    return { status, change }

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));