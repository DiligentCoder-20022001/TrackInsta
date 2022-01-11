//RSA encryption 
const gcd = (a, b) => {
    if(b == 0)
    return a; 
    return gcd(b, a%b);
}
const encypt = (s) => {
    const p = 419;
    const q = 523;

    const n = p*q; 
    const phi = (p-1)*(q-1);
    let e = 2; 
    while(e < phi)
    {
        if(gcd(e, phi) == 1)
        break; 
        else 
        e++;
    }
    let k = 2; 
    //ed = 1 + k*phi
    let d = (1 + k*phi)/e; 
    let res = ""; 
    for(let i = 0; i < s.length; i++)
    {
        let msg = s.charCodeAt(i);
        let c = (Math.pow(msg, e))%n; 
        res += c; 
    }
    return res;
}
module.exports = encypt;