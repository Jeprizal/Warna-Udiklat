(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      if (!header.classList.contains('header-scrolled')) {
        offset -= 16
      }
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Header fixed top on scroll
     */
    let selectHeader = select('#header')
    if (selectHeader) {
      let headerOffset = selectHeader.offsetTop
      let nextElement = selectHeader.nextElementSibling
      const headerFixed = () => {
        if ((headerOffset - window.scrollY) <= 0) {
          selectHeader.classList.add('fixed-top')
          nextElement.classList.add('scrolled-offset')
        } else {
          selectHeader.classList.remove('fixed-top')
          nextElement.classList.remove('scrolled-offset')
        }
      }
      window.addEventListener('load', headerFixed)
      onscroll(document, headerFixed)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  
    /**
     * Hero carousel indicators
     */
    let heroCarouselIndicators = select("#hero-carousel-indicators")
    let heroCarouselItems = select('#heroCarousel .carousel-item', true)
  
    heroCarouselItems.forEach((item, index) => {
      (index === 0) ?
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
        heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
    });
    
    /**
     * Skills animation
     */
    let skilsContent = select('.skills-content');
    if (skilsContent) {
      new Waypoint({
        element: skilsContent,
        offset: '80%',
        handler: function(direction) {
          let progress = select('.progress .progress-bar', true);
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%'
          });
        }
      })
    }
  
    /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
      let portfolioContainer = select('.portfolio-container');
      if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows'
        });
  
        let portfolioFilters = select('#portfolio-flters li', true);
  
        on('click', '#portfolio-flters li', function(e) {
          e.preventDefault();
          portfolioFilters.forEach(function(el) {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');
  
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
        }, true);
      }
  
    });

    // loading2
    document.addEventListener("DOMContentLoaded", function() {
        // Tampilkan elemen loading saat halaman dimuat
        document.getElementById('loading2').style.display = 'none';

        // Get the current URL
        var currentURL = window.location.href;
        // Sembunyikan elemen loading setelah halaman selesai dimuat
        window.addEventListener('load', function() {
            document.getElementById('loading2').style.display = 'none';
        });
    });
    // end loading2
    
    // button
    document.addEventListener("DOMContentLoaded", function() {
      // Menggunakan querySelectorAll untuk memilih semua tombol dan item
      let buttons = document.querySelectorAll(".primary-button");
      let items = document.querySelectorAll(".primary-button .round");
    
      buttons.forEach(function(button, index) {
        button.addEventListener("mouseenter", function(event) {
          this.classList.add("animate");
    
          let item = items[index];
          let buttonX = event.offsetX;
          let buttonY = event.offsetY;
          if (buttonY < 24) {
            item.style.top = 0 + "px";
          } else if (buttonY > 30) {
            item.style.top = 48 + "px";
          }
    
          item.style.left = buttonX + "px";
          item.style.width = "1px";
          item.style.height = "1px";
        });
    
        button.addEventListener("mouseleave", function() {
          this.classList.remove("animate");
    
          let item = items[index];
          let buttonX = event.offsetX;
          let buttonY = event.offsetY;
          if (buttonY < 24) {
            item.style.top = 0 + "px";
          } else if (buttonY > 30) {
            item.style.top = 48 + "px";
          }
    
          item.style.left = buttonX + "px";
        });
      });
    });
    

    // menu circular
    const menu = document.querySelector('.menu-circular');
    let isDragging = false;
    let initialX, initialY;

    menu.addEventListener('mousedown', (e) => {
      isDragging = true;
      initialX = e.clientX - menu.getBoundingClientRect().left;
      initialY = e.clientY - menu.getBoundingClientRect().top;
    });
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const newX = e.clientX - initialX;
        const newY = e.clientY - initialY;
        
        menu.style.left = newX + 'px';
        menu.style.top = newY + 'px';
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
      //untuk perangkat mobile
      menu.addEventListener('touchstart', (e) => {
        // e.preventDefault();
        isDragging = true;
        initialX = e.touches[0].clientX - menu.getBoundingClientRect().left;
        initialY = e.touches[0].clientY - menu.getBoundingClientRect().top;
      });
      
      document.addEventListener('touchmove', (e) => {
        // e.preventDefault();
        if (isDragging) {
          const newTouchX = e.touches[0].clientX;
          const newTouchY = e.touches[0].clientY;
      
          const deltaX = newTouchX - initialX;
          const deltaY = newTouchY - initialY;
      
          menu.style.left = deltaX + 'px';
          menu.style.top = deltaY + 'px';
        }
      });
      
      document.addEventListener('touchend', () => {
        isDragging = false;
      });
  })()