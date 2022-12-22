function my_Dictionary() {
    var Planet = {
        Name: "Neptune",
        Discovered: "1846",
        Color: "Blue",
        Temperature: "-201 C",
        Circumference: "155,600 km",
        Rings: 5,
        Moon: "Triton"
    }; //A dictionary containing KVPs of a planet
    delete Planet.Discovered; //Deletes the value of the key "Discovered"
    document.getElementById("Dictionary").innerHTML = Planet.Discovered; //Displays the key "discovered", but the result will be "undefined" since the value has been deleted
    
}

