//Expand (𝑎+𝑏)𝑛 using increment in factorial/nCr calculation.

function factorial(n){let f=1;for(let i=1;i<=n;i++)f*=i;return f;}
function nCr(n,r){return factorial(n)/(factorial(r)*factorial(n-r));}
function expand(a,b,n){
  for(let k=0;k<=n;k++){
    console.log(`${nCr(n,k)}*${a}^${n-k}*${b}^${k}`);
  }
}
expand("a","b",3);
