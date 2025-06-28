

const slid = document.querySelectorAll(".slid");
var counter = 0;

slid.forEach(
    (slid, index) => {
        slid.style.left = `${index * 100}%`;
    }
);

const goNext = () => {
    counter = (counter + 1) % slid.length; // Loop back to the first slide
    slideImage();
}

const goPrev = () => {
    counter = (counter - 1 + slid.length) % slid.length; // Loop to the last slide if counter is negative
    slideImage();
}

const slideImage = () => {
    slid.forEach(
        (slid) => {
            slid.style.transform = `translateX(-${counter * 100}%)`;
        }
    );
}

// Automatically go to the next slide every 3 seconds
setInterval(goNext, 3000);

            var menuItems=document.getElementById("MenuItems");
            
            MenuItems.style.maxHeight="0px";
            function menutoggle(){
                if(MenuItems.style.maxHeight == "0px"){
                    MenuItems.style.maxHeight="200px";
                }
                else{
                    MenuItems.style.maxHeight="0px";
                }
            }
        
            let scrollValue = 0;

            function nextSlide() {
                const container = document.querySelector('.card-container');
                scrollValue += 270; // Adjust based on card width + margin
                if (scrollValue > container.scrollWidth - container.clientWidth) {
                    scrollValue = 0; // Reset to first card
                }
                container.style.transform = `translateX(-${scrollValue}px)`;
            }
            
            function prevSlide() {
                const container = document.querySelector('.card-container');
                scrollValue -= 270;
                if (scrollValue < 0) {
                    scrollValue = container.scrollWidth - container.clientWidth; // Go to last card
                }
                container.style.transform = `translateX(-${scrollValue}px)`;
            }
            
            function sortItems() {
                var sortBy = document.getElementById('sort-by').value;
                // Logic to sort items based on selected option
                console.log("Sorting by:", sortBy);
            }


                    // frequently asked 
                    
            document.addEventListener('DOMContentLoaded', function() {
                const faqQuestions = document.querySelectorAll('.faq-question');
            
                faqQuestions.forEach(question => {
                    question.addEventListener('click', () => {
                        question.classList.toggle('active');
            
                        const answer = question.nextElementSibling;
                        if (question.classList.contains('active')) {
                            question.querySelector('.faq-toggle').textContent = '-';
                            answer.style.display = 'block';
                        } else {
                            question.querySelector('.faq-toggle').textContent = '+';
                            answer.style.display = 'none';
                        }
                    });
                });
            });
            



