function display(value)
{
    let x = document.getElementById('result').value;
    if(x == '0')
    {
        document.getElementById('result').value = '';
        document.getElementById('result').value += value;
    }
    else
    {
        document.getElementById('result').value += value;
    }
}

function clearScreen()
{
    document.getElementById('result').value = '0';
}

function calculate()
{
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
}

function back()
{
    let x = document.getElementById('result').value;
    let y = "";
    for(let i = 0; i < x.length - 1; i++)
    {
        y += x[i];
    }
    if(y == '')
    {
        document.getElementById('result').value = 0;
    }
    else
    {
        document.getElementById('result').value = y;
    }
}