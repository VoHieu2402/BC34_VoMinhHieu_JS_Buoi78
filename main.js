lstNum = [];

function displayList(lst) {
    var serie = "";
    for(var i=0;i<lst.length;i++) {
        if(i==0) {
            serie += lst[i].toString();
        } else {
            serie += ", " + lst[i].toString();
        }
    }
    return serie;
}
// Main task
document.getElementById("addNum").onclick = function() {
    var num = document.getElementById("num-main").value * 1;
    lstNum.push(num);
    var serie = displayList(lstNum);
    document.getElementById("noti-main").innerHTML = "<h3>" + serie + "</h3>";
}

// Task 1
document.getElementById("calc-t1").onclick = function() {
    var total = 0;
    for(var i=0;i<lstNum.length;i++) {
        if(lstNum[i]<=0) {
            continue;
        } else {
            total = total + lstNum[i];
        }
    }
    // show noti
    document.getElementById("noti-t1").innerHTML = "<h3>" + "Kết quả: " + total.toString() + "</h3>";
}

// Task 2
document.getElementById("calc-t2").onclick = function() {
    var count = 0;
    for(var i=0;i<lstNum.length;i++) {
        if(lstNum[i]<=0) {
            continue;
        } else {
            count += 1;
        }
    }
    // show noti
    document.getElementById("noti-t2").innerHTML = "<h3>" + "Kết quả: " + count.toString() + "</h3>";
}

function findMin(lst) {
    var min = 0;
    for(var i=0;i<lst.length;i++) {
        if(i==0) {
            min = lst[i];
        } else {
            if(min>=lst[i]) {
                min = lst[i];
            }
        }
    }
    return min;
}

// Task 3
document.getElementById("calc-t3").onclick = function() {
    var min = findMin(lstNum);
    // show noti
    document.getElementById("noti-t3").innerHTML = "<h3>" + "Kết quả: " + min.toString() + "</h3>";
}

// Task 4
document.getElementById("calc-t4").onclick = function() {
    var min = 0;
    for(var i=0;i<lstNum.length;i++) {
        if(lstNum[i]<=0) {
            continue;
        } else {
            if(min==0) {
                min = lstNum[i];
            } else {
                if(min>=lstNum[i]) {
                    min = lstNum[i];
                }
            }
        }
    }
    // show noti
    document.getElementById("noti-t4").innerHTML = "<h3>" + "Kết quả: " + min.toString() + "</h3>";
}

// Task 5
document.getElementById("calc-t5").onclick = function() {
    var result = -1;
    for(var i=0;i<lstNum.length;i++) {
        if(lstNum[i]%2 != 0) {
            continue;
        } else {
            result = lstNum[i];
        }
    }
    // show noti
    document.getElementById("noti-t5").innerHTML = "<h3>" + "Kết quả: " + result.toString() + "</h3>";
}

// Task 6
document.getElementById("calc-t6").onclick = function() {
    var lstNumAlt = [];
    var pos1 = document.getElementById("pos-1").value * 1;
    var pos2 = document.getElementById("pos-2").value * 1;
    for(var i=0;i<lstNum.length;i++) {
        if(i==(pos1-1)) {
            lstNumAlt.push(lstNum[pos2-1]);
        } else if(i==(pos2-1)) {
            lstNumAlt.push(lstNum[pos1-1]);
        } else {
            lstNumAlt.push(lstNum[i]);
        }
    }

    // show noti
    var serie = displayList(lstNumAlt);
    document.getElementById("noti-t6").innerHTML = "<h3>" + serie + "</h3>";
}

function isInLst(element,lst) {
    var result = 0;
    for(var i=0; i<lst.length;i++) {
        if(element==lst[i]) {
            result = 1;
            break;
        }
    }
    return result;
}

// Task 7
document.getElementById("calc-t7").onclick = function() {
    var lstNumAlt = [];
    var min = findMin(lstNum);
    lstNumAlt.push(min);
    while (lstNumAlt.length<lstNum.length) {
        var lstContainer = [];
    
        for(var i=0;i<lstNum.length;i++) {
            if(isInLst(lstNum[i],lstNumAlt)==1) {
                continue;
            } else {
                lstContainer.push(lstNum[i]);
            }
        }

        lstNumAlt.push(findMin(lstContainer));
    }

    // show noti
    var serie = displayList(lstNumAlt);
    document.getElementById("noti-t7").innerHTML = "<h3>" + serie + "</h3>";
}

function checkPrimeNum(num) {
    var result = 0;
    if(num==2 || num==3 || num==5) {
        result =  1;
    } else if(num%2 == 0) {
        result = 0;
    } else {
        var i=3;
        while(i<=num/2) {
            if(num%i == 0) {
                result = 0;
                break;
            } else {
                result = 1;
            }
            i = i + 2;
        }
    }
    return result;
}

// Task 8
document.getElementById("calc-t8").onclick = function() {
    var result = -1;
    for(var i=0;i<lstNum.length;i++) {
        if(checkPrimeNum(lstNum[i])==1) {
            result = lstNum[i];
            break;
        }
    }

    // show noti
    document.getElementById("noti-t8").innerHTML = "<h3>" + "Kết quả: " + result.toString() + "</h3>";
}

// Task 9
document.getElementById("calc-t9").onclick = function() {
    var count = 0;
    for(var i=0;i<lstNum.length;i++) {
        if(Number.isInteger(lstNum[i])==1) {
            count = count + 1;
        }
    }

    // show noti
    document.getElementById("noti-t9").innerHTML = "<h3>" + "Kết quả: " + count.toString() + "</h3>";
}

// Task 10
document.getElementById("calc-t10").onclick = function() {
    var countPositive = 0;
    var countNegative = 0;
    var result = "";
    for(var i=0;i<lstNum.length;i++) {
        if(lstNum[i]==0) {
            continue;
        } else if(lstNum[i]>0) {
            countPositive += 1;
        } else {
            countNegative += 1;
        }
    }

    if(countPositive>countNegative) {
        result = "Số dương > Số âm";
    } else if(countPositive<countNegative) {
        result = "Số dương < Số âm";
    } else {
        result = "Số dương = Số âm";
    }

    // show noti
    document.getElementById("noti-t10").innerHTML = "<h3>" + "Kết quả: " + result.toString() + "</h3>";
}