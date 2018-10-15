/*
. Class and Constructor Creation

Album Class

        Create a script called shopping_spree.js. In this file create a constructor function for an Album object. The Album object should have the following properties:

        Title

        Artist: This should be an object containing firstname and lastname

        Price: No strings, use a number.

        Release Date: Use a date object

        Quantity: All objects should have an initial value of a Random number between 1 and 10.

        Tracklisting: Should be an array of song titles

Cart Class

        Create a constructor function for an object called Cart. It should have a property called items which is an array. 25 pts.

B. Methods to add

Album Class

       Add a function to the Album prototype called "purchase". The function will decrement the quantity by 1. Should return 1 if album is available or -1 if the quantity is 0.

Cart Class 

      Add a function to the Cart prototype called add that adds an album to its item's property.

      Add a function to the Cart prototype called remove that removes and album from its items.

C. Test Program

    Create 5 different albums from the Album Class and store them in an array. 

    Write a loop that simulates purchases. The initial amount of money should be $1000.00. Write a loop that iterates over the array of albums and purchases each one as      long as there is money left. So everytime you purchase an album you need to decrement the initial amount of money by the purchase price. Each time you purchase an    item, add it to the cart. 

Finally, display all the items purchased in the cart. Show the album name, the artist name, qty purchased and subtotal for each. So if I purchased 3 of album A at 1.00, I should see a subtotal for album A at 5.00. Then show the total purchase price and any money left over.

*/

var money = 1000

function Album(title, artist, price, tracklisting){   
     this.title = title;
     this.artist = artist;
     this.price = price;
     this.date = new Date();
     this.quantity = Math.floor((Math.random() * 50) + 1); //setting quanity to max of 50 to run out of money
	 this.tracklisting = tracklisting;
}



Album.prototype.purchase = function(){
	this.quantity--;
        if (this.quantity > 0){
            return 1;
        }
        else{
            return -1;
		}
}

function Cart(album){
	this.items =[]
}


Cart.prototype.add = function(album){
    this.items.push(album);
};

Cart.prototype.remove = function(album){
	this.items.splice(albums.indexOf(album), 1);
};

function results(cart){
	var grandTotal = 0;
	var change =0;
	
	for (var j = 0; j < albums.length; j++) {
		var count = 0
		var subTotal = 0;
		
		for(var k = 0; k < cart.items.length; k++){ 
			if (cart.items[k].title == albums[j].title){
				count++
				subTotal += albums[j].price;
				
			}
		}
		
		console.log("Album: \t" + albums[j].title + "\t Artist: "+albums[j].artist + "\t Quantity purchased: " + count + "\t" + "Subtotal: $" + subTotal)

		grandTotal += subTotal;
		change = 1000 - grandTotal;
	}
	
	console.log ("\t\t\t\t\t\t\t    Grand Total:  $" + grandTotal + "\tYou spend too much on music!" +"\r\n"
				+"\t\t\t\t\t\t\t    Money Left:   $" + change);
}




var album1 = new Album("Title1", "Song Artist", 20, ["Song1", "Song2","Song3", "Song4"]);
var album2 = new Album("Title2", "Singer ofSong", 9,  ["Song3", "Song4","Song5", "Song6"]);
var album3 = new Album("Title3", "TSwizzle", 17, ["Song8", "Song9","Song10", "Song11"]);
var album4 = new Album("Title4", "Kanye West", 15, ["Song12", "Song13","Song14", "Song15"]);
var album5 = new Album("Title5", "Eric Clapton", 1, ["Song16", "Song13","Song14", "Song15"]); //setting to 1 dollar to always use 1000 dollars


var albums = [album1, album2, album3, album4, album5];


var cart = new Cart();

var minPrice = albums[0].price



for (var i =0; i < albums.length; i++){ 
	
	if(albums[i].price < minPrice){
		minPrice = albums[i].price
	
	}
}  

var albumCount = 0
while (money >= minPrice){
	var number = parseInt(Math.floor(Math.random() * 5));
		if(money >= albums[number].price){
	
		albums[number].purchase()
		money = money - albums[number].price
		cart.add(albums[number])
	}}
	

results(cart);




