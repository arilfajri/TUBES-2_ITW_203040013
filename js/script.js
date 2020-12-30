// testimonial
$('.testimonial .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        560: {
            items: 2
        }
    }
})
// student
const txtElement = ['Aril', 'Fajri', 'Tolani'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 400);

})();
// carousel
const sr = ScrollReveal ({
	origin: 'top',
	distance: '100px',
	duration: 1000,
	reset: true
});
// efek
sr.reveal('.efek-ngetik',{delay: 300});
// about
sr.reveal('.about h1',{delay: 300});
sr.reveal('.about .gambar',{delay: 400});
sr.reveal('.about .panel',{delay: 500});
// services
sr.reveal('.skill-area h1',{delay: 300});
sr.reveal('.skill-area .skill',{delay: 400});
// work
sr.reveal('.portfolio h1',{delay: 300});
sr.reveal('.portfolio .card',{delay: 400});
// testimonial
sr.reveal('.testimonial h1',{delay: 300});
// contact
sr.reveal('.contact h1',{delay: 300});
sr.reveal('.contact .col-lg-4',{delay: 400});
sr.reveal('.contact .col-lg-6',{delay: 500});