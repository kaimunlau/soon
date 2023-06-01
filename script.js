const devText = document.getElementById('flip-text');

const changeText = (element) => {
    element.textContent === 'Dev' ? element.textContent = 'Coming Soon...' : element.textContent = 'Dev';
}

const animateElement = (element, initialClass, finalClass, delay) => {
    function toggleClasses() {
        changeText(element);
      element.classList.remove(finalClass);
      element.classList.add(initialClass);
  
      setTimeout(function () {
        element.classList.remove(initialClass);
        element.classList.add(finalClass);
      }, delay);
    }
    toggleClasses(); // Initial animation
  
    setInterval(toggleClasses, delay * 2); // Repeat animation every (delay * 2) milliseconds
  }
// On Load
animateElement(devText, 'animate__bounceInDown', 'animate__hinge', 4000);