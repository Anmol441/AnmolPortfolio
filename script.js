document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    alert(`Thank you, ${name}! Your message has been sent successfully.`);

    form.reset();
  });
});
