// 1. Time-Based Video Switching
function setVideoByTime() {
  const hour = new Date().getHours();
  const video = document.getElementById('bg-video');
  
  if (hour >= 5 && hour < 12) {
    video.src = 'videos/video3.mp4'; // Sunrise, kids eating breakfast
  } else if (hour >= 12 && hour < 17) {
    video.src = 'videos/video2.mp4'; // Classroom scenes
  } else {
    video.src = 'videos/video1.mp4'; // Family time, sunset
  }
  
  video.load();
}

setVideoByTime();

// 2. Pause Video on Hover (for "Reflect" moments)
const videoContainer = document.querySelector('.video-container');
videoContainer.addEventListener('mouseenter', () => {
  document.getElementById('bg-video').pause();
});

videoContainer.addEventListener('mouseleave', () => {
  document.getElementById('bg-video').play();
});

// 3. Animate Timeline on Scroll
const moments = document.querySelectorAll('.moment');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

moments.forEach(moment => {
  moment.style.opacity = '0';
  moment.style.transform = 'translateY(20px)';
  moment.style.transition = 'all 0.6s ease';
  observer.observe(moment);
});

// 4. CTA Button Click
document.getElementById('cta-btn').addEventListener('click', () => {
  // Replace with your donation modal logic
  alert('Thank you for sponsoring a child’s day!');
});



