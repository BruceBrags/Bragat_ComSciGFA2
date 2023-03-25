var num1;
var num2;
var ans;
function operAdd(){
    num1=document.getElementById('numI').value
    num2=document.getElementById('numII').value
    ans=parseFloat(num1)+parseFloat(num2)
    document.getElementById('footer').innerHTML='<p>The sum of '+num1+' and '+num2+' is '+ans+'.</p>';
}
function operSub(){
    num1=document.getElementById('numI').value
    num2=document.getElementById('numII').value
    ans=num1-num2
    document.getElementById('footer').innerHTML='<p>The difference of '+num1+' and '+num2+' is '+ans+'.</p>';
}
function operMult(){
    num1=document.getElementById('numI').value
    num2=document.getElementById('numII').value
    ans=num1*num2
    document.getElementById('footer').innerHTML='<p>The product of '+num1+' and '+num2+' is '+ans+'.</p>';
}
function operDiv(){
    num1=document.getElementById('numI').value
    num2=document.getElementById('numII').value
    ans=num1/num2
    document.getElementById('footer').innerHTML='<p>The quotient of '+num1+' and '+num2+' is '+ans+'.</p>';
}
function operRem(){
    num1=document.getElementById('numI').value
    num2=document.getElementById('numII').value
    ans=num1%num2
    document.getElementById('footer').innerHTML='<p>The remainder of '+num1+' and '+num2+' is '+ans+'.</p>';
}