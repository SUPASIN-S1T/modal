let btnModal = document.querySelectorAll(".btn-modal");
let ModalShow = document.querySelector(".float-modal-container");
let btnClose = document.querySelector(".btn-close");
let btnDone = document.querySelector(".btn-receive");

for (let i = 0; i < btnModal.length; i++) {
  // click open to modal
  btnModal[i].addEventListener("click", () => {
    console.log(`button no : ${i}`);
    ModalShow.style.display = "flex";

    // countdown --> close modal auto (15sec)
    let timeOut = 10;
    let countDownAuto = setInterval(countDown, 1000);
    function countDown() {
      let counting = timeOut--;
      console.log(`timeup : ${counting}`);

      if (timeOut == 0) {
        clearInterval(countDownAuto);
        ModalShow.style.display = "none";
      }
    }

    // click close to modal
    btnClose.addEventListener("click", () => {
      clearInterval(countDownAuto);
      ModalShow.style.display = "none";
    });

    btnDone.addEventListener("click", () => {
      clearInterval(countDownAuto);
      ModalShow.style.display = "none";
    });
  });
}
