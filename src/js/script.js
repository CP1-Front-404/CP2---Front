 window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = 'none';
    }, 400); // 
  }, 1000); // 
});