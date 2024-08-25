const highlight = document.getElementById('highlight');
const image = document.querySelectorAll('.item');


image.forEach(element => {
    const imageItem = element.querySelector('img')
    imageItem.addEventListener('click',function(){
        image.forEach(item => {
            item.querySelector('img').classList.remove('active');
        });
        highlight.src = imageItem.src;
        imageItem.classList.add('active');
    });
});


