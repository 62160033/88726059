function calculateOldDog()
{
    var g = document.getElementById("g").value;
    var objDiv = document.getElementById("showOldD");

    if(g>0)
        objDiv.innerHTML="สุนัขของคุณอายุเท่ากับ "+g*10.5+"ปี เมื่อเทียบกับมนุษย์"
    
    else
        objDiv.innerHTML="อายุของสุนัขไม่ถูกต้อง"

}