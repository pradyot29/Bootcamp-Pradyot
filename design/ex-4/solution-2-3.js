document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img.lazy");
  
    const lazyLoad = (image) => {
      image.src = image.dataset.src; // Assign the actual source
      image.classList.add("loaded");
    };
  
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lazyLoad(entry.target);
            observer.unobserve(entry.target);
          }
        });
      });
  
      lazyImages.forEach((img) => observer.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      lazyImages.forEach((img) => lazyLoad(img));
    }
  });
  