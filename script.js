const heart = document.getElementById("heart");
const likesTest = document.getElementById("counter");

const comments =  document.querySelector(".commentSection");
const commentList = document.getElementById("myComments");
const userComment = document.getElementById("userInput");
const form = document.getElementById("form");
const numberComments = document.getElementById("numComments");

const bookmark = document.getElementById("bookmarkIcon");
const notifcation = document.querySelector(".notification")

const header = document.querySelector(".fixedHeader");

const img = document.querySelectorAll(".image");
const carouselButtons = document.querySelectorAll("[data-carousel-button]");




form.addEventListener("submit", onSubmit);
heart.addEventListener("click",likes);
bookmark.addEventListener("click", bookmarkNotification);

img.forEach(image =>{
    image.addEventListener("click", enlargeImg);
})





let numLikes = 0;
let numComments = 3;

carouselButtons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides =  button
                        .closest("[data-carousel")
                        .querySelector("[data-slides")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if( newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active
    })
})

function bookmarkNotification(){
    notifcation.classList.add("visible");
    setTimeout(() =>{
        notifcation.classList.remove("visible");
    }, 1000);
    

}



function enlargeImg(){
    if(this.style.transform === "scale(1.3)"){
        this.style.transform= "scale(1)";
        this.style.transition= "transform 0.25s ease";
        header.style.opacity = "1"
        header.style.transition = ".30s ease"
        header.style.zIndex = "2";
        carouselButtons.forEach(button =>{
            button.style.opacity = ".3"
            button.style.zIndex = "1"
        })

    }else{
        this.style.transform= "scale(1.3)";
        this.style.transition= "transform 0.25s ease";
        header.style.zIndex = "0";
        header.style.opacity = "0";
        header.style.transition = ".30s ease";
        carouselButtons.forEach(button =>{
            button.style.opacity = "0"
        })
    }
    }

function likes(){
    counter();
    if(numLikes == 1){
        likesTest.innerHTML= " and <strong>" + numLikes + "</strong> other person";
    }else{
        likesTest.innerHTML= " and <strong>" + numLikes + "</strong> other people";
    }
}


function displayComments(){
    if(comments.style.display === "block"){
        comments.style.display = "none";
    } else{
        comments.style.display = "block";
    }
}

function focusComment(){
    displayComments();
    userComment.focus();
}


function counter(){
    numLikes++;
    
}


function onSubmit(e){
    e.preventDefault();

    let userC = userComment.value;
    let userN = "Anonymous" + Math.floor(Math.random() * 100);
    let newComment = document.createElement('li');

    let pic = document.getElementById("pic");

    let name = document.createElement("div");
    name.classList.add("usernameComments", "bold", "alignComments");
    
    let comment = document.createElement("div");
    comment.classList.add("userComments", "alignComments");
    
    let clnPic = pic.cloneNode(true);
    name.innerHTML = userN + "&nbsp";
    comment.innerHTML = "&nbsp" + userC;

    newComment.appendChild(clnPic);
    newComment.appendChild(name);
    newComment.appendChild(comment);
    commentList.appendChild(newComment);
    numComments++;
    numberComments.innerHTML = "View all " + numComments + " comments";

    form.reset();
    return false;
    
    
}


