function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();


const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
   : 'fa-solid fa-bars'
}




const data = [
  { imgSrc: 'img/img1.jpg' }, 
  { imgSrc: 'img/img2.jpeg' }, 
  { imgSrc: 'img/img3.jpg' },
  { imgSrc: 'img/img4.jpg' },
  { imgSrc: 'img/img5.jpg' },
  { imgSrc: 'img/img6.jpg' },
];

const gallery = document.getElementById('gallery');

data.forEach((item, index) => {
  const picDiv = document.createElement('div');
  picDiv.classList.add('pics');
  picDiv.innerHTML = `<img class="xx" src="${item.imgSrc}" alt="gallery-img-${index}">`;
  picDiv.onclick = () => openImage(item.imgSrc);
  gallery.appendChild(picDiv);
});


    function handleTitleVisibility() {
        // Get all titles
        const titles = {
            c1: document.getElementById("title-c1"),
            c2: document.getElementById("title-c2"),
            c3: document.getElementById("title-c3"),
            c4: document.getElementById("title-c4")
        };
        
        // Iterate over the titles and hide the one corresponding to the checked radio button
        for (const id in titles) {
            const radioButton = document.getElementById(id);
            const title = titles[id];

            // If the radio button is checked, hide its corresponding title
            if (radioButton.checked) {
                title.style.display = "none";
            } else {
                title.style.display = "block"; // Show others
            }
        }
    }

    // Add event listeners for all radio buttons
    document.querySelectorAll('input[type="radio"][name="slide"]').forEach(radio => {
        radio.addEventListener('change', handleTitleVisibility);
    });

    // Initial function call to handle checked state on page load
    handleTitleVisibility();







    function removeBrTags() {
      const h1Elements = document.querySelectorAll('h1');
      h1Elements.forEach(h1 => {
          h1.innerHTML = h1.innerHTML.replace(/<br\s*\/?>/gi, '');
      });
  }

  // Function to handle media query changes
  function handleScreenResize(e) {
      if (e.matches) { // If screen width is <= 400px
          removeBrTags();
      }
  }

  // Media query for max-width: 400px
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  mediaQuery.addEventListener('change', handleScreenResize);

  // Initial check when page loads
  if (mediaQuery.matches) {
      removeBrTags();
  }





// onclick the card redirect to registration site
    function card1() {
      window.location.href = ""; 
    }
    function card2() {
      window.location.href = ""; 
    }
    function card3() {
      window.location.href = ""; 
    }
    function card4() {
      window.location.href = ""; 
    }
    function register() {
      window.location.href = ""; 
    }
