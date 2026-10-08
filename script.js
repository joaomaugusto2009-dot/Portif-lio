const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const lightThemeEnabled = document.body.classList.toggle("light-theme");

    themeToggle.setAttribute("aria-pressed", lightThemeEnabled);
    themeToggle.textContent = lightThemeEnabled
      ? "Ativar modo escuro"
      : "Ativar modo claro";
  });
}
// modal do currículo
const curriculoLink = document.querySelector(".curriculo a");
const curriculoModal = document.querySelector("#curriculo-modal");
const closeModalButton = document.querySelector(".modal-close");

function closeCurriculoModal() {
  curriculoModal.classList.remove("is-open");
  curriculoModal.setAttribute("aria-hidden", "true");
  curriculoLink.focus();
}

if (curriculoLink && curriculoModal && closeModalButton) {
  curriculoLink.addEventListener("click", (event) => {
    event.preventDefault();
    curriculoModal.classList.add("is-open");
    curriculoModal.setAttribute("aria-hidden", "false");
    closeModalButton.focus();
  });

  closeModalButton.addEventListener("click", closeCurriculoModal);

  curriculoModal.addEventListener("click", (event) => {
    if (event.target === curriculoModal) closeCurriculoModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && curriculoModal.classList.contains("is-open")) {
      closeCurriculoModal();
    }
  });
}

// Máscaras dos campos de contato
document.querySelectorAll("[data-mask]").forEach((input) => {
  input.addEventListener("input", () => {
    const cursor = input.selectionStart;
    const beforeCursor = input.value.slice(0, cursor);
    let value = input.value;

    if (input.dataset.mask === "email") {
      value = value.toLowerCase().replace(/\s/g, "");
    } else if (input.dataset.mask === "text") {
      value = value.replace(/^\s+/, "").replace(/\s{2,}/g, " ");
    }

    if (value !== input.value) {
      const newCursor = beforeCursor.length;
      input.value = value;
      input.setSelectionRange(newCursor, newCursor);
    }
  });
});
