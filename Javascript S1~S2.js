var name = 'Mike';//possible to define multiple times and possible to use before defined but no value in it.
console.log(name);
let age = 13; // only once and can't use before it is defined
const gender = 'Male';
console.log(age, gender)
function Item(title, price){
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log('The price is ' + price)
    }
}
const item1 = new Item("Bear", 2000);
const item2 = new Item("Cup", 1500);
const item3 = new Item("Spoon", 3000);
console.log(item1, item2, item3);
item3.showPrice();