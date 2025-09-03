function calcBill() {
    let unit = document.getElementById('unit').value;
    if (unit < 1) {
        alert("Invalid unit number");
        return;
    }
    let billWithoutTax = unit * 4;
    let tax;
    if (unit <= 200) {
        tax = 0;
    } else if (unit <= 300) {
        tax = 2;
    } else if (unit <= 400) {
        tax = 4;
    } else if (unit <= 500) {
        tax = 6;
    } else {
        tax = 10;
    }
    let taxRupees = (tax * billWithoutTax) / 100;
    let total = billWithoutTax + taxRupees;

    document.getElementById('result').innerHTML = `<p>============================</p> <p>Total unit number is :${unit}</p> <p>Bill amount without tax is : ${billWithoutTax} rs</p> <p>Tax in percentage is : ${tax}%</p> <p>Tax in rupees is: ${taxRupees} rs</p> <p>Final payable bill amount is : ${total} rs</p> <p>============================</p>`

}

function vowel() {
    let ch = document.getElementById('char').value;
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
        if (ch == 'a' || ch == 'A' || ch == 'e' || ch == 'E' || ch == 'i' || ch == 'I' || ch == 'o' || ch == 'O' || ch == 'u' || ch == 'U') {
            alert('Vowel');
        } else {
            alert("Consonent");
        }
    }else{
        alert("Enter english alphabet character instead of : " +ch);
    }
}

function table(){
    let num = Number(document.getElementById('table').value);
    let k =document.getElementById('ptable');
    k.innerHTML = ``;
    for(let i=1;i<=10;i++){
        let p = document.createElement('p');
        p.innerHTML=`${num}*${i} = ${num*i}`;
        k.appendChild(p);
    }
}
function count(){
    let k = prompt("enter number or if you want to quit enter quit ?");
    let even=0 , odd=0 , positive=0 , negative=0;
    while(k!='quit'){
        if(k>=0){
            positive++;
        }else{
            negative++;
        }
        if(k%2==0){
            even++;
        }else{
            odd++;
        }
        k=prompt("enter number or if you want to quit enter quit ?");
    }
    alert(`Even:${even} , Odd:${odd} , Positive:${positive} , Negative:${negative} `);
    
}