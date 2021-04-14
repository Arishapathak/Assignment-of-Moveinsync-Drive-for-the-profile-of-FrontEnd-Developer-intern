function formdata(){
    document.getElementById("myForm").style.display = "block";
}

function getdata(){
    
    var name=document.getElementById("Name").value;
    var city=document.getElementById("City").value;
    var degree=document.getElementById("Degree").value;
    var table = document.getElementById("myTable");

if(name===""||city===""||degree==="") 
{
    alert("Fill all the fields");
}
else{

    var rowcheck= table.rows.length;
    var row=table.insertRow(rowcheck);
    
    var cell1=row.insertCell(0);
    cell1.innerHTML=name;

    var cell2=row.insertCell(1);
    cell2.innerHTML=rowcheck;

    var cell3=row.insertCell(2);
    cell3.innerHTML=city;

    var cell4= row.insertCell(3);
    cell4.innerHTML=degree;

    var cell5=row.insertCell(4);
    var time=new Date();
    cell5.innerHTML=time.toUTCString();
    document.getElementById("myForm").style.display = "none";
    
}
}