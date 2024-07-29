module.exports = function reverse (n) {
    let res=''
    n=String(Math.abs(n))  
    l=n.length
    
    for (let i=l-1; i>=0; i--)
    {res=res+n.slice(i,i+1)
        console.log(i ,n.slice(i,i+1) )
    }
    return Number(res)
}
