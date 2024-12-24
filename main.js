const steps = document.querySelectorAll(".step");
const details = document.querySelectorAll(".details");
const detailsContainer = document.querySelector(".details-container");

const isMobile = window.innerWidth <= 768;

if (isMobile) {
  steps.forEach((step) => {
    step.addEventListener("click", () => {
      const detailId = step.getAttribute("data-detail");
      const currentDetail = document.getElementById(detailId);

      if (
        detailsContainer.classList.contains("expand") &&
        currentDetail.classList.contains("show")
      ) {
        detailsContainer.classList.remove("expand");
        currentDetail.classList.remove("show");
      } else {
        detailsContainer.classList.add("expand");
        details.forEach((detail) => {
          if (detail.id === detailId) {
            detail.classList.add("show");
          } else {
            detail.classList.remove("show");
          }
        });
      }
    });
  });
} else {
  steps.forEach((step) => {
    step.addEventListener("mouseenter", () => {
      const detailId = step.getAttribute("data-detail");
      detailsContainer.classList.add("expand");
      details.forEach((detail) => {
        if (detail.id === detailId) {
          detail.classList.add("show");
        } else {
          detail.classList.remove("show");
        }
      });
    });

    step.addEventListener("mouseleave", () => {
      detailsContainer.classList.remove("expand");
      details.forEach((detail) => {
        detail.classList.remove("show");
      });
    });
  });
}

document.querySelectorAll(".accordion").forEach((accordion) => {
  accordion.addEventListener("click", function () {
    const content = this.nextElementSibling;
    this.classList.toggle("active");
    content.classList.toggle("open");

    if (content.classList.contains("open")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});
