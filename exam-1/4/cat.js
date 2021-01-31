function calculateOldCat()
{
    var g = document.getElementById("g").value;
    var objDiv = document.getElementById("showOldD");

    if(g>0)
        objDiv.innerHTML="แมวของคุณอายุเท่ากับ "+g*7+"ปี เมื่อเทียบกับมนุษย์"
    
    else
        objDiv.innerHTML="อายุของแมวไม่ถูกต้อง"

}