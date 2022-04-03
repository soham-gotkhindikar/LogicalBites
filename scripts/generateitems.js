
    var data =[["Carbs","White sugar","26.5"],["Carbs","Flour","0.56"],["Carbs","Cocoa","18.7"],["Carbs","Salt","0.56"],["Carbs","Tomatoes","1.4"],["Carbs","Potatoes","0.3"],["Carbs","Milk","2.8"],["Carbs","Soymilk","1"],["Carbs","Wheat & Rye","1.4"],["Carbs","Barley","1.1"],["Carbs","Cassava","0.9"],["Carbs","Peas","0.8"],["Carbs","Onions & Leeks","0.3"],["Carbs","Root vegetables","0.3"],["Carbs","Cabbages","0.4"],["Carbs","Misc Vegetables","0.5"],["Carbs","Misc Fruits","0.7"],["Carbs","Citrus Fruits","0.3"],["Carbs","Bananas","0.8"],["Carbs","Apples","0.3"],["Carbs","Rice","4"],["Carbs","Beans","2"],["Carbs","Maize","1.1"],["Carbs","Oatmeal","1.6"],["Carbs","Cane Sugar","2.6"],["Carbs","Beet Sugar","1.4"],["Carbs","Soymilk","1"],["Carbs","Strawberry","0.27"],["Carbs","Grapes","0.83"],["Carbs","Blueberries","0.32"],["Carbs","Cherries","0.78"],["Carbs","Raspberries","0.27"],["Carbs","Plums","0.22"],["Carbs","Pears","0.34"],["Carbs","Oranges","0.03"],["Carbs","Carrots","0.11"],["Carbs","Mushrooms","0.08"],["Carbs","Broccoli","2"],["Carbs","Spinach","0.34"],["Fats","Palm Oil","7.6"],["Fats","Canola Oil","0.468"],["Fats","Soybean Oil","6"],["Fats","Rapseed Oil","3.7"],["Fats","Sunflower Oil","3.5"],["Fats","Avocado","0.84636"],["Fats","Olive oil","6"],["Fats","Almonds","3.56"],["Fats","Pistachios","1.11"],["Fats","Pecans","1.61"],["Fats","Macadamias","2"],["Fats","Hazelnuts","2"],["Fats","Cashew nuts","2"],["Fats","Brazil nuts","2"],["Fats","Walnuts","0.76"],["Fats","Peanuts","0.57"],["Protein","Poultry","6.1"],["Protein","Beef","60"],["Protein","Lamb","24.5"],["Protein","Pig","7.2"],["Protein","Fish","5.1"],["Protein","Lobster","7.9"],["Protein","Shrimp","11.8"],["Protein","Eggs","4.5"],["Protein","Tofu","3"],["Protein","Cheese","21.2"]];
    var filter = "Carbs";


window.onload = function() {
    for(var x = 0; x < data.length; x++){
        if(data[x][0].toLowerCase() === filter.toLowerCase()){
        var div = document.createElement("div");
        div.classList.add("item")
        
        var checkbox = document.createElement('input');
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("onchange", "handleChange(this);");
        checkbox.setAttribute("name", data[x][1].toLowerCase());
        checkbox.setAttribute("id", data[x][1].toLowerCase());
        var label = document.createElement('label');
        label.setAttribute("for", data[x][1].toLowerCase());
        var textelement = document.createElement("p");
        var text = document.createTextNode(data[x][1]);
        textelement.appendChild(text);
        label.appendChild(textelement);
        div.appendChild(checkbox);
        div.appendChild(label);
        
        
        var element = document.getElementById("wrapper");
        element.appendChild(div);
        }
    }
    
//console.log(data);
  };
var list = [];
function handleChange(checkbox){
    var testname = checkbox.getAttribute("name");
    if(list.indexOf(testname) === -1){
        list.push(checkbox.getAttribute("name"));
    } else {
        let index = list.indexOf(checkbox.getAttribute("name"));
        if(index != -1){
            list.splice(index, 1);
        }
    }
    
    var wholelist = document.getElementById("list");
    while (wholelist.firstChild) {
        wholelist.removeChild(wholelist.lastChild);
    }
    for(var x = 0; x < list.length; x++){
        var listelement = document.createElement("li");
    var text = document.createTextNode(list[x]);
    listelement.appendChild(text);
        wholelist.appendChild(listelement);
    }
    if(list.length === 0){
        var pelement = document.createElement("p");
        var text = document.createTextNode("just currently empty :(");
        pelement.appendChild(text);
        wholelist.appendChild(pelement);
    }
}
function changeGroup(dropdownlist){
    console.log("hi")
    var gallery = document.getElementById("wrapper");
    while (gallery.firstChild) {
        gallery.removeChild(gallery.lastChild);
    }
    filter = dropdownlist;
    var grabfilter = [];
    for(var x = 0; x < data.length; x++){
        if(data[x][0].toLowerCase() === filter.toLowerCase()){
        var div = document.createElement("div");
        div.classList.add("item")
        
        var checkbox = document.createElement('input');
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("onchange", "handleChange(this);");
        checkbox.setAttribute("name", data[x][1].toLowerCase());
        checkbox.setAttribute("id", data[x][1].toLowerCase());
        var label = document.createElement('label');
        label.setAttribute("for", data[x][1].toLowerCase());
        var textelement = document.createElement("p");
        var text = document.createTextNode(data[x][1]);
        textelement.appendChild(text);
        label.appendChild(textelement);
        div.appendChild(checkbox);
        div.appendChild(label);
        
        
        var element = document.getElementById("wrapper");
        element.appendChild(div);
        grabfilter.push(data[x][1].toLowerCase());
        }
    }
    for(var x = 0; x < list.length; x++){
        if(grabfilter.indexOf(list[x]) != -1){
            document.getElementById(list[x]).checked = true;
        }
    }
}
function carbs(){
    document.getElementById("foodgroup").value = "Carbs";

    document.getElementsByClassName("initial")[0].setAttribute("hidden", "");
    document.getElementsByClassName("secondary")[0].removeAttribute("hidden");
}
function protein(){
    document.getElementById("foodgroup").value = "Protein";
    document.getElementsByClassName("initial")[0].setAttribute("hidden", "");
    document.getElementsByClassName("secondary")[0].removeAttribute("hidden");
}
function fats(){
    document.getElementById("foodgroup").value = "Fats";

    document.getElementsByClassName("initial")[0].setAttribute("hidden", "");
    document.getElementsByClassName("secondary")[0].removeAttribute("hidden");
}

function susButton(){
    let total = [];
    for(var x = 0; x < list.length; x++){
        if(list[x].indexOf(" ") != -1){
            let test = list[x].split(" ");
            let ampersands = test.join('+').split('&');
            total.push(ampersands.join('%26'));
        }
        else {
            total.push(list[x]);

        }
    }

    window.location.replace(`sustainability.html?search=${total.join("-")}`);

}