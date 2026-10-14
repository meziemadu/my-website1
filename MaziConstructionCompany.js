// // ==========================================
// // MAZI CONSTRUCTION COMPANY
// // Complete Website JavaScript
// // ==========================================

// // document.addEventListener("DOMContentLoaded", () => {

// //     // ==========================================
// //     // 1. MOBILE NAVIGATION
// //     // ==========================================

// //     const menuBtn = document.querySelector("#menu-btn");
// //     const navLinks = document.querySelector("#nav-links");

// //     if (menuBtn && navLinks) {
// //         menuBtn.addEventListener("click", () => {
// //             navLinks.classList.toggle("active");

// //             // Change menu icon
// //             if (navLinks.classList.contains("active")) {
// //                 menuBtn.innerHTML = "✕";
// //             } else {
// //                 menuBtn.innerHTML = "☰";
// //             }
// //         });

// //         // Close menu when a link is clicked
// //         navLinks.querySelectorAll("a").forEach(link => {
// //             link.addEventListener("click", () => {
// //                 navLinks.classList.remove("active");
// //                 menuBtn.innerHTML = "☰";
//             });
//         });
//     }


//     // ==========================================
//     // 2. SMOOTH SCROLLING
//     // ==========================================

//     document.querySelectorAll('a[href^="#"]').forEach(link => {

//         link.addEventListener("click", function (event) {

//             const targetId = this.getAttribute("href");

//             if (targetId === "#") return;

//             const target = document.querySelector(targetId);

//             if (target) {
//                 event.preventDefault();

//                 target.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start"
//                 });
//             }
//         });

//     });


//     // ==========================================
//     // 3. STICKY HEADER
//     // ==========================================

//     const header = document.querySelector("header");

//     window.addEventListener("scroll", () => {

//         if (!header) return;

//         if (window.scrollY > 80) {
//             header.classList.add("scrolled");
//         } else {
//             header.classList.remove("scrolled");
//         }

//     });


//     // ==========================================
//     // 4. ACTIVE NAVIGATION LINK
//     // ==========================================

//     const sections = document.querySelectorAll("section[id]");
//     const navigationLinks = document.querySelectorAll("#nav-links a");

//     window.addEventListener("scroll", () => {

//         let currentSection = "";

//         sections.forEach(section => {

//             const sectionTop = section.offsetTop - 150;
//             const sectionHeight = section.offsetHeight;

//             if (
//                 window.scrollY >= sectionTop &&
//                 window.scrollY < sectionTop + sectionHeight
//             ) {
//                 currentSection = section.getAttribute("id");
//             }

//         });

//         navigationLinks.forEach(link => {

//             link.classList.remove("active");

//             if (link.getAttribute("href") === `#${currentSection}`) {
//                 link.classList.add("active");
//             }

//         });

//     });


//     // ==========================================
//     // 5. SCROLL REVEAL ANIMATION
//     // ==========================================

//     const revealElements = document.querySelectorAll(
//         ".reveal, .service-card, .project-card, .about-content"
//     );

//     const revealObserver = new IntersectionObserver(
//         entries => {

//             entries.forEach(entry => {

//                 if (entry.isIntersecting) {

//                     entry.target.classList.add("show");

//                     revealObserver.unobserve(entry.target);
//                 }

//             });

//         },
//         {
//             threshold: 0.15
//         }
//     );

//     revealElements.forEach(element => {
//         revealObserver.observe(element);
//     });


//     // ==========================================
//     // 6. NUMBER COUNTERS
//     // ==========================================

//     const counters = document.querySelectorAll(".counter");

//     const counterObserver = new IntersectionObserver(
//         entries => {

//             entries.forEach(entry => {

//                 if (!entry.isIntersecting) return;

//                 const counter = entry.target;
//                 const target = Number(counter.dataset.target);

//                 let count = 0;

//                 const speed = Math.max(target / 100, 1);

//                 const updateCounter = () => {

//                     count += speed;

//                     if (count < target) {

//                         counter.textContent = Math.floor(count);

//                         requestAnimationFrame(updateCounter);

//                     } else {

//                         counter.textContent = target;
//                     }
//                 };

//                 updateCounter();

//                 counterObserver.unobserve(counter);
//             });

//         },
//         {
//             threshold: 0.7
//         }
//     );

//     counters.forEach(counter => {
//         counterObserver.observe(counter);
//     });


//     // ==========================================
//     // 7. PROJECT FILTER
//     // ==========================================

//     const filterButtons = document.querySelectorAll(".filter-btn");
//     const projectCards = document.querySelectorAll(".project-card");

//     filterButtons.forEach(button => {

//         button.addEventListener("click", () => {

//             // Remove active class
//             filterButtons.forEach(btn => {
//                 btn.classList.remove("active");
//             });

//             button.classList.add("active");

//             const filter = button.dataset.filter;

//             projectCards.forEach(card => {

//                 const category = card.dataset.category;

//                 if (filter === "all" || category === filter) {

//                     card.style.display = "block";

//                     setTimeout(() => {
//                         card.classList.add("show");
//                     }, 50);

//                 } else {

//                     card.style.display = "none";
//                     card.classList.remove("show");
//                 }

//             });

//         });

//     });


//     // ==========================================
//     // 8. PROJECT IMAGE LIGHTBOX
//     // ==========================================

//     const projectImages = document.querySelectorAll(".project-card img");

//     projectImages.forEach(image => {

//         image.addEventListener("click", () => {

//             const lightbox = document.createElement("div");

//             lightbox.className = "lightbox";

//             lightbox.innerHTML = `
//                 <div class="lightbox-content">
//                     <button class="close-lightbox">&times;</button>
//                     <img src="${image.src}" alt="MAZI Construction Project">
//                 </div>
//             `;

//             document.body.appendChild(lightbox);

//             document.body.style.overflow = "hidden";

//             const closeButton =
//                 lightbox.querySelector(".close-lightbox");

//             closeButton.addEventListener("click", closeLightbox);

//             lightbox.addEventListener("click", event => {

//                 if (event.target === lightbox) {
//                     closeLightbox();
//                 }

//             });

//             function closeLightbox() {
//                 lightbox.remove();
//                 document.body.style.overflow = "";
//             }

//         });

//     });


//     // ==========================================
//     // 9. TESTIMONIAL SLIDER
//     // ==========================================

//     const testimonials = document.querySelectorAll(".testimonial");
//     const nextButton = document.querySelector("#next-testimonial");
//     const prevButton = document.querySelector("#prev-testimonial");

//     let testimonialIndex = 0;

//     function showTestimonial(index) {

//         testimonials.forEach(testimonial => {
//             testimonial.classList.remove("active");
//         });

//         if (testimonials[index]) {
//             testimonials[index].classList.add("active");
//         }
//     }

//     if (testimonials.length > 0) {

//         showTestimonial(testimonialIndex);

//         if (nextButton) {

//             nextButton.addEventListener("click", () => {

//                 testimonialIndex++;

//                 if (testimonialIndex >= testimonials.length) {
//                     testimonialIndex = 0;
//                 }

//                 showTestimonial(testimonialIndex);
//             });

//         }

//         if (prevButton) {

//             prevButton.addEventListener("click", () => {

//                 testimonialIndex--;

//                 if (testimonialIndex < 0) {
//                     testimonialIndex = testimonials.length - 1;
//                 }

//                 showTestimonial(testimonialIndex);
//             });

//         }

//         // Automatic testimonial change

//         setInterval(() => {

//             testimonialIndex++;

//             if (testimonialIndex >= testimonials.length) {
//                 testimonialIndex = 0;
//             }

//             showTestimonial(testimonialIndex);

//         }, 6000);

//     }


//     // ==========================================
//     // 10. CONTACT FORM VALIDATION
//     // ==========================================

//     const contactForm = document.querySelector("#contact-form");
//     const formMessage = document.querySelector("#form-message");

//     if (contactForm) {

//         contactForm.addEventListener("submit", event => {

//             event.preventDefault();

//             const name =
//                 document.querySelector("#name")?.value.trim();

//             const email =
//                 document.querySelector("#email")?.value.trim();

//             const phone =
//                 document.querySelector("#phone")?.value.trim();

//             const message =
//                 document.querySelector("#message")?.value.trim();


//             // Check required fields

//             if (!name || !email || !phone || !message) {

//                 showFormMessage(
//                     "Please fill in all the required fields.",
//                     "error"
//                 );

//                 return;
//             }


//             // Validate email

//             const emailPattern =
//                 /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//             if (!emailPattern.test(email)) {

//                 showFormMessage(
//                     "Please enter a valid email address.",
//                     "error"
//                 );

//                 return;
//             }


//             // Validate phone

//             const phonePattern =
//                 /^[0-9+\-\s()]{7,20}$/;

//             if (!phonePattern.test(phone)) {

//                 showFormMessage(
//                     "Please enter a valid phone number.",
//                     "error"
//                 );

//                 return;
//             }


//             // Success

//             showFormMessage(
//                 `Thank you ${name}! Your message has been received. MAZI Construction Company will contact you shortly.`,
//                 "success"
//             );

//             contactForm.reset();

//         });

//     }


//     function showFormMessage(text, type) {

//         if (!formMessage) return;

//         formMessage.textContent = text;

//         formMessage.className = `form-message ${type}`;

//         setTimeout(() => {

//             formMessage.textContent = "";
//             formMessage.className = "form-message";

//         }, 6000);

//     }


//     // ==========================================
//     // 11. WHATSAPP BUTTON
//     // ==========================================

//     const whatsappNumber = "2349034516302";

//     const whatsappButtons =
//         document.querySelectorAll(".whatsapp-btn");

//     whatsappButtons.forEach(button => {

//         button.addEventListener("click", () => {

//             const message =
//                 "Hello MAZI Construction Company, I would like to make an enquiry about your construction services.";

//             const whatsappURL =
//                 `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

//             window.open(whatsappURL, "_blank");

//         });

//     });


//     // ==========================================
//     // 12. BACK TO TOP BUTTON
//     // ==========================================

//     const topButton = document.querySelector("#top-btn");

//     if (topButton) {

//         window.addEventListener("scroll", () => {

//             if (window.scrollY > 500) {

//                 topButton.classList.add("show");

//             } else {

//                 topButton.classList.remove("show");

//             }

//         });

//         topButton.addEventListener("click", () => {

//             window.scrollTo({
//                 top: 0,
//                 behavior: "smooth"
//             });

//         });

//     }


//     // ==========================================
//     // 13. HERO TEXT TYPING EFFECT
//     // ==========================================

//     const typingText =
//         document.querySelector("#typing-text");

//     if (typingText) {

//         const words = [
//             "Building Dreams",
//             "Creating Beautiful Spaces",
//             "Quality Construction",
//             "Strong Foundations",
//             "Professional Workmanship"
//         ];

//         let wordIndex = 0;
//         let characterIndex = 0;
//         let deleting = false;

//         function typeEffect() {

//             const currentWord = words[wordIndex];

//             if (!deleting) {

//                 typingText.textContent =
//                     currentWord.substring(0, characterIndex + 1);

//                 characterIndex++;

//                 if (characterIndex === currentWord.length) {

//                     deleting = true;

//                     setTimeout(typeEffect, 1800);

//                     return;
//                 }

//             } else {

//                 typingText.textContent =
//                     currentWord.substring(0, characterIndex - 1);

//                 characterIndex--;

//                 if (characterIndex === 0) {

//                     deleting = false;

//                     wordIndex++;

//                     if (wordIndex >= words.length) {
//                         wordIndex = 0;
//                     }

//                 }

//             }

//             setTimeout(
//                 typeEffect,
//                 deleting ? 60 : 100
//             );
//         }

//         typeEffect();
//     }


//     // ==========================================
//     // 14. FAQ ACCORDION
//     // ==========================================

//     const faqQuestions =
//         document.querySelectorAll(".faq-question");

//     faqQuestions.forEach(question => {

//         question.addEventListener("click", () => {

//             const answer =
//                 question.nextElementSibling;

//             const isOpen =
//                 question.classList.contains("active");


//             // Close all FAQs

//             faqQuestions.forEach(item => {

//                 item.classList.remove("active");

//                 const itemAnswer =
//                     item.nextElementSibling;

//                 if (itemAnswer) {
//                     itemAnswer.style.maxHeight = null;
//                 }

//             });


//             // Open selected FAQ

//             if (!isOpen) {

//                 question.classList.add("active");

//                 if (answer) {

//                     answer.style.maxHeight =
//                         answer.scrollHeight + "px";
//                 }

//             }

//         });

//     });


//     // ==========================================
//     // 15. CURRENT YEAR
//     // ==========================================

//     const yearElement =
//         document.querySelector("#year");

//     if (yearElement) {

//         yearElement.textContent =
//             new Date().getFullYear();

//     }


//     // ==========================================
//     // 16. LOADING SCREEN
//     // ==========================================

//     const loader =
//         document.querySelector("#loader");

//     window.addEventListener("load", () => {

//         if (loader) {

//             loader.classList.add("hide");

//             setTimeout(() => {
//                 loader.remove();
//             }, 700);

//         }

//     });


//     // ==========================================
//     // 17. PREVENT EMPTY LINKS
//     // ==========================================

//     document.querySelectorAll('a[href="#"]').forEach(link => {

//         link.addEventListener("click", event => {
//             event.preventDefault();
//         });

//     });


//     // ==========================================
//     // 18. CONSOLE MESSAGE
//     // ==========================================

//     console.log(
//         "MAZI Construction Company website loaded successfully."
//     );

// });
const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.addEventListener("click", function () {
    const phoneNumber = "2349034516302";

    const message = "Hello, I visited your website and I would like to make an enquiry.";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});