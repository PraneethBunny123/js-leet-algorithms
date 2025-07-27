// var romanToInt = function(s) {
//     let num = 0
//     let map = new Map()
//     map.set('I', 1)
//     map.set('V',5)
//     map.set('X',10)
//     map.set('L',50)
//     map.set('C',100)
//     map.set('D',500)
//     map.set('M',1000)
//     map.set('IV',4)
//     map.set('IX',9)
//     map.set('XL',40)
//     map.set('XC',90)
//     map.set('CD',400)
//     map.set('CM',900)
//     let i;
//     for(i=0; i<s.length-1; i++) {
//         if(map.has(s[i]+s[i+1])) {
//             num += map.get(s[i]+s[i+1])
//             i++
//         }else{
//             num += map.get(s[i])
//         }
//     }
//     if(i < s.length){
//         num += map.get(s[i])
//     }
//     return num
// };

class Roman{
    static getVal(ch){
        switch(ch){
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        }
    }
}
var romanToInt = function(s) {
    var n = s.length;
    var sum =0;
    // const sol = new Roman();

    for(let i=0;i<n;i++){
        if(i+1<n && Roman.getVal(s[i]) < Roman.getVal(s[i+1]))
            sum -= Roman.getVal(s[i])
        else
            sum += Roman.getVal(s[i])

    }
    return sum;
    
};

console.log(romanToInt('III'));
