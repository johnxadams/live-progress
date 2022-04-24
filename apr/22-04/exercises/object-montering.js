const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

    function aStudent(obj){
        delete obj.rollno
        return obj;
    }
    // aStudent(student);
    console.log("Task 1", aStudent(student))



    let favMovie = {
        title: "The DCI Horror Movie",
        duration: 132,
        stars: ["Daan", "Lorenz", "Cristophoros", "Aigerim", "Maykal", "Lucia"],
    }

    function dciMovie(theMovie){
        let title = theMovie.title;
        let duration = theMovie.duration + "mins";
        let stars = theMovie.stars.join(', ')
        console.log("Task 2", `${title} lasts for ${duration}. Stars: ${stars}.`);
        return theMovie;
    }
    dciMovie(favMovie);



    let eShop {
        name: "Red Carpet",
        length: 20,
        price: 350,
    } 