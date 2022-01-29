var name_array = []
function submit(){
    var name_1 = document.getElementById("Name_1").value;
    var name_2 = document.getElementById("Name_2").value;
    var name_3 = document.getElementById("Name_3").value;
    var name_4 = document.getElementById("Name_4").value;
    name_array.push(name_1);
    name_array.push(name_2);
    name_array.push(name_3);
    name_array.push(name_4);
console.log(name_array);
document.getElementById("display_name").innerHTML = name_array;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
    name_array.sort();
    console.log(name_array);
    document.getElementById("display_name").innerHTML = name_array;
}