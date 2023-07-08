$('#recipeCarousel').carousel({
    interval: 1000
})

$('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

    next.children(':first-child').clone().appendTo($(this));
    }
});


document.getElementById("card1").addEventListener("click",function(){
    location.href = "../new_arrivals/new_arrivals.html";
})

document.getElementById("card2").addEventListener("click",function(){
    location.href = "./bedroom.html";
})

document.getElementById("card3").addEventListener("click",function(){
    location.href = "./livingRoom.html";
})

document.getElementById("card4").addEventListener("click",function(){
    location.href = "./diningCategory.html";
})

document.getElementById("card5").addEventListener("click",function(){
    location.href = "./office.html";
})
