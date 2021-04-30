menu_list_array=[
    "Chicken Tandoori Pizza","Deluxe Veggie Pizza","Paneer Tikka Pizza", "Veg Extravaganza Pizza", "Veg Supreme Pizza"
]
function getmenu(){
var htmldata;
htmldata= "<ol class= 'menulist>"
menu_list_array.sort();
for(var i=0; i<menu_list_array.length;i++){
    htmldata= htmldata+"<li>" + menu_list_array[i] + '<li>'

}
htmldata= htmldata+"</ol>"
document.getElementById("display_menu").innerhtml = htmldata;

}

function add_item(){
    var htmldata
    var item=document.getElementById("add_item").value;
   menu_list_array.push(item);
   menu_list_array.sort();
   htmldata="<section class='cards'>"
   for(var i=0; i<menu_list_array.length;i++){
    htmldata= htmldata+"<div cards= card'>"+ <img src=pizzalmg.png> </img> + menu_list_array[i] + '<li>'

}
htmldata= htmldata+"</ol>"
document.getElementById("display_menu").innerhtml = htmldata;
}