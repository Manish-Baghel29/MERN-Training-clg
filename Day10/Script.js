function fact(){
    let num = Number(prompt("Enter number for factorial : "));
    if(num<0){
        alert("Number should be positive!");
        return;
    }
    if(num == 0 || num==1){
        alert("The factorial is 1");
        return;
    }
    let fact = num;
    for(let i=num-1;i>1;i--){
        fact *= i;
    }
    alert("The factorial is :" +fact);
}

function pattern(){
    let n = Number(prompt('Enter lines ?'));
    for(let i=1 ;i<=n; i++){
        for(let j=n;j>=i;j--){
            document.writeln(j);
        }
        document.writeln('<br/>');
    }
}