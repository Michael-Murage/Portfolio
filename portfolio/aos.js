AOS.init({
  // Global settings:
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
});
  
AOS.init({
  // AOS would work only for windows bigger than or equal to 768px
  disable: function() { var maxWidth = 768; return window.innerWidth < maxWidth; }
});

// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:  
AOS.init({
  mirror: true, // whether elements should animate out while scrolling past them          
});
  
AOS.init({
  once: false, // whether animation should happen only once - while scrolling down
});
  