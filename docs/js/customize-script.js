var images = document.getElementsByTagName('img');
var body = document.body;
var imageView = document.getElementById('imageView');
var fullImage = document.querySelector('#imageView>.imageView-inner>img');
for (var index = 0; index < images.length; index++) {
    var image = images[index];
    image.onclick = function () {
        if (body.style.overflow == 'hidden') {
            
        } else {
            body.style.overflow = 'hidden';
            imageView.style.display = 'block';
            fullImage.src = this.src;
        }
        
        console.log(this.src);
    }
}
imageView.onclick = function () {
    body.style.overflow = '';
    this.style.display = 'none';
    
}
console.log(fullImage);