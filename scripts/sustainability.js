const queryString = window.location.search;
console.log(queryString);
var data =[["Carbs","White sugar","26.5"],["Carbs","Flour","0.56"],["Carbs","Cocoa","18.7"],["Carbs","Salt","0.56"],["Carbs","Tomatoes","1.4"],["Carbs","Potatoes","0.3"],["Carbs","Milk","2.8"],["Carbs","Soymilk","1"],["Carbs","Wheat & Rye","1.4"],["Carbs","Barley","1.1"],["Carbs","Cassava","0.9"],["Carbs","Peas","0.8"],["Carbs","Onions & Leeks","0.3"],["Carbs","Root vegetables","0.3"],["Carbs","Cabbages","0.4"],["Carbs","Misc Vegetables","0.5"],["Carbs","Misc Fruits","0.7"],["Carbs","Citrus Fruits","0.3"],["Carbs","Bananas","0.8"],["Carbs","Apples","0.3"],["Carbs","Rice","4"],["Carbs","Beans","2"],["Carbs","Maize","1.1"],["Carbs","Oatmeal","1.6"],["Carbs","Cane Sugar","2.6"],["Carbs","Beet Sugar","1.4"],["Carbs","Soymilk","1"],["Carbs","Strawberry","0.27"],["Carbs","Grapes","0.83"],["Carbs","Blueberries","0.32"],["Carbs","Cherries","0.78"],["Carbs","Raspberries","0.27"],["Carbs","Plums","0.22"],["Carbs","Pears","0.34"],["Carbs","Oranges","0.03"],["Carbs","Carrots","0.11"],["Carbs","Mushrooms","0.08"],["Carbs","Broccoli","2"],["Carbs","Spinach","0.34"],["Fats","Palm Oil","7.6"],["Fats","Canola Oil","0.468"],["Fats","Soybean Oil","6"],["Fats","Rapseed Oil","3.7"],["Fats","Sunflower Oil","3.5"],["Fats","Avocado","0.84636"],["Fats","Olive oil","6"],["Fats","Almonds","3.56"],["Fats","Pistachios","1.11"],["Fats","Pecans","1.61"],["Fats","Macadamias","2"],["Fats","Hazelnuts","2"],["Fats","Cashew nuts","2"],["Fats","Brazil nuts","2"],["Fats","Walnuts","0.76"],["Fats","Peanuts","0.57"],["Protein","Poultry","6.1"],["Protein","Beef","60"],["Protein","Lamb","24.5"],["Protein","Pig","7.2"],["Protein","Fish","5.1"],["Protein","Lobster","7.9"],["Protein","Shrimp","11.8"],["Protein","Eggs","4.5"],["Protein","Tofu","3"],["Protein","Cheese","21.2"]];
const urlParams = new URLSearchParams(queryString);
const search = urlParams.get('search');
var corredata = search.split("-");
console.log(corredata);
function algorithm(input){
    let cftp = 0.0;
    let c = 0.0; //counter
    //calculates the sum of carbon footprints
    for(var x = 0; x < data.length; x++){
        if(search.indexOf(data[x][1].toLowerCase()) != -1){
            cftp = cftp + parseFloat(data[x][2]);

        }
        c = c+parseFloat(data[x][2]);

    }
    susScore = (c-cftp)/c;
    susScorePercent = susScore*100
    return susScorePercent;
}

/*
We want sustainability score, and then the breakdown for each ingredient
*/
window.onload = function() {
    var text = document.createTextNode("Sustainability Score: " + algorithm() + "%");
    document.getElementById("result").appendChild(text);
};