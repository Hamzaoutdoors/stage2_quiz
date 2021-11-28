class ModalGenerator {
  constructor(text, yesText, cancelText, yesAnswer, cancelAnswer) {
    this.parent = document.querySelector("#modal");
    this.text = text || "Are you sure you want to continue?";
    this.yesText = yesText || "Yes";
    this.cancelText = cancelText || "Cancel";
    this.parent = document.querySelector("#modal");
    this.message = document.querySelector(".message");

    this.yesAnswer = yesAnswer || 'You just clicked "YES" 😊';
    this.cancelAnswer = cancelAnswer || 'You just clicked "CANCEL" 😢';

    this.modal = undefined;
    this.yesButton = undefined;
    this.cancelButton = undefined;

    this.createModal();
  }

  response() {
    this.yesButton.addEventListener("click", () => {
      this.destroyModal(this.yesAnswer);
    });
    this.cancelButton.addEventListener("click", () => {
      this.destroyModal(this.cancelAnswer);
    });
  }

  createModal() {
    this.parent.style.display = "flex";

    // Background dialog
    this.modal = document.createElement("div");
    this.modal.classList.add("pop-overlay-dialog");

    // Title text
    const text = document.createElement("p");
    text.classList.add("pop-overlay-text");
    text.textContent = this.text;
    this.modal.appendChild(text);

    // Accept or cancel button group
    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("pop-overlay-buttons");

    // Accept button
    this.yesButton = document.createElement("button");
    this.yesButton.type = "button";
    this.yesButton.innerText = this.yesText;
    this.yesButton.classList.add("yes-button");
    buttonGroup.appendChild(this.yesButton);

    // Cancel button
    this.cancelButton = document.createElement("button");
    this.cancelButton.type = "button";
    this.cancelButton.innerText = this.cancelText;
    this.cancelButton.classList.add("cancel-button");
    buttonGroup.appendChild(this.cancelButton);

    this.modal.appendChild(buttonGroup);

    // Append to parent
    this.parent.appendChild(this.modal);
  }

  destroyModal(message) {
    this.parent.removeChild(this.modal);
    this.appendMessage(message);
    this.parent.style.display = "none";
  }

  appendMessage(msg) {
    this.message.innerText = '';
    this.message.innerText = msg;
  }

  animate() {
    this.modal.animate([{
        transform: 'translateY(100px)'
      },
      {
        transform: 'translateX(0px)'
      }
    ], {
      duration: 1000,
      iterations: 1,
      direction: 'alternate',
      easing: 'ease-in-out'

    });
  }
}