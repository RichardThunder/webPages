for(let i = 1; i<=10; ++i){
    if(i%2 == 0)
        console.log(i);
}

 i = 0;
while(i<3){
    console.log(`number${i}!`);
    ++i;
}
let num;
do
{
 num  = prompt("input number > 100 !",0);
}while(num <= 100 && num);

num = prompt("input a number",10);
let isPrime = new Array(num);
for(let i = 2; i <= num; ++i){
    isPrime[i]=true;
}

for(let p = 2; p*p <= num; ++p){
    if(isPrime[p]){
    for(let s = p*p; s<=num; s+=p){
        isPrime[s]=false;
    }
}
for(let i = 0; i<=num; ++i){
    if(isPrime[i])
        console.log(i);
  }
}


