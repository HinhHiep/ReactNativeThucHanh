(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';
}
)();

//1.Take the IIFE and at the end of the function, attach an event listener that changes the color of the h1 element to blue when the user hovers over it
(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';
    header.addEventListener('mouseover', function(){
        header.style.color = 'blue';
    });
}
)();
//2. And now when the user hovers out, the color should change back to red
(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';
    header.addEventListener('mouseover', function(){
        header.style.color = 'blue';
    });
    header.addEventListener('mouseout', function(){
        header.style.color = 'red';
    });
}
)();
