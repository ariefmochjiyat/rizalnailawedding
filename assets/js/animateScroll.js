const sections = document.querySelectorAll(".animated-box");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
            entry.target.classList.remove("animate");
        }
      });
    }, { threshold: 0.1 }); // 10% bagian terlihat baru animasi jalan

sections.forEach(section => observer.observe(section));