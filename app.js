function imageGallery() {
    //slect highlight image highlight and all the preview images
    const highlight = document.querySelector('.gallery-highlight')
    const previews = document.querySelectorAll('.preview img')
//add an event listener to each preview using forEach()
    previews.forEach((preview)=>{
        preview.addEventListener("click", function() {
            //variable to give us the location of the image
            //replace() the "-small.jpg" keyword  with "-big.jpeg" keyword 
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace("small", "big")
            highlight.src = bigSrc
            //fade the preview image in and out with an active class property
            previews.forEach(preview => preview.classList.remove('active'))
            preview.classList.add('active')
            });
    });
}
imageGallery();