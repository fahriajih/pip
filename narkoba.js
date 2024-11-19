
document.querySelectorAll("img").forEach(function(img) {
    img.addEventListener("mouseenter", function() {
      img.style.transform = "scale(1.1) rotate(5deg)";
      img.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.8)";
    });
  
    img.addEventListener("mouseleave", function() {
      img.style.transform = "scale(1) rotate(0deg)";
      img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.7)";
    });
  });
  
  document.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();  
      alert("Anda telah mengklik link untuk informasi lebih lanjut!");
    });
  });
  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // 2. Modal Pop-up
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];
  
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  let lastScrollTop = 0;
  let navbar = document.querySelector('nav');
  
  window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset;
    if (currentScroll > lastScrollTop) {
      navbar.style.top = "-60px"; 
    } else {
      navbar.style.top = "0"; 
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const config = {
      rootMargin: '0px 0px 50px 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, config);
  
    images.forEach(image => {
      observer.observe(image);
    });
  });

  let scrollButton = document.getElementById("scrollToTopBtn");
  
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }
  
  scrollButton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  let toggleButton = document.getElementById('darkModeToggle');
  toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  let acc = document.getElementsByClassName("accordion");
  
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
  
  let timer = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "EXPIRED";
    }
  }, 1000);
  
  let form = document.getElementById("myForm");
  
  form.addEventListener("submit", function(e) {
    let name = document.getElementById("name").value;
    if (name === "") {
      alert("Name is required!");
      e.preventDefault();
    }
  });
 
  document.getElementById('loadButton').addEventListener('click', function() {
    fetch('content.json')
      .then(response => response.json())
      .then(data => {
        document.getElementById('content').innerHTML = data.content;
      });
  });
  
  let text = "Hello, welcome to my website!";
  let index = 0;
  
  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  
  typeWriter();

  document.getElementById('copyButton').addEventListener('click', function() {
    let text = document.getElementById("textToCopy").textContent;
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  });
  
  let slideIndex = 0;
  
  function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
  }
  
  showSlides();
  
  document.getElementById('draggable').addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text', e.target.id);
  });
  
  document.getElementById('dropzone').addEventListener('dragover', function(e) {
    e.preventDefault();
  });
  
  document.getElementById('dropzone').addEventListener('drop', function(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(data));
  });

  let textElement = document.getElementById("animatedText");
  
  textElement.addEventListener("mouseover", function() {
    textElement.classList.add("animate-text");
  });
  
  textElement.addEventListener("mouseout", function() {
    textElement.classList.remove("animate-text");
  });
 
  let element = document.getElementById('shakeElement');
  
  element.addEventListener('click', function() {
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 500);
  });
 
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
  });

  let startTime = Date.now();
  let countUpTimer = setInterval(function() {
    let elapsed = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("countUpTimer").innerText = "Time: " + elapsed + "s";
  }, 1000);

  let customSelect = document.querySelector(".custom-select");
  
  customSelect.addEventListener("click", function() {
    this.classList.toggle("open");
  });
  
  let fadeText = document.getElementById("fadeText");
  
  setInterval(function() {
    fadeText.style.opacity = (fadeText.style.opacity == 1 ? 0 : 1);
  }, 2000);
  