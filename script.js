function compute()
{
   let p = document.getElementById("principal").value;
   let r = document.getElementById("rate").value;
   let y = document.getElementById("years").value;
    
    let i = p + (1+r)**(y);
    console.log(i);
    document.getElementById("result").innerHTML = 'if your principal amount is '+ p.toString() + 'at a rate of ' + r.toString() + '% for ' + y.toString() + 'years, your interest is equal to ' + i.toString();  
    
}

function slider_value(val)
{
    document.getElementById("rate_val").innerHTML = val.toString() + "%" ;
}
        