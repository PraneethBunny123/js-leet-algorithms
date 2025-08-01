function partition(s) { 
    let start = 0;
    let end = 0;

    let res = []

    let lastIndex = {}

    for(let i=0; i<s.length; i++) {
        lastIndex[s[i]] = i
    }

    for(let i=0; i<s.length; i++) {
        start = start+1
        end = Math.max(end, lastIndex[s[i]])

        if(i === end) {
            res.push(start)
            start = 0
        }
    }
}