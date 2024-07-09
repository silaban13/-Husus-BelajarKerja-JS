
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");


burger.addEventListener("click", () => {
  navLists.classList.toggle("nav-active");
  burger.classList.toggle("toggle-burger");
});
};

navSlide();


// Clear form before unload
// ini digunakan ketika kita mengisi sebuah form dan kembali ke form tersebut 
// maka akan otomatis hapus 
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};
// footer 1
// Animasi scroll ke atas
// function scrollToTop() {
//   window.scrollTo({
//       top: 0,
//       behavior: 'smooth' 
//   });
// }


// const emailInput = document.getElementById('emailInput');
// const emailForm = document.getElementById('emailForm');
//   emailForm.addEventListener('submit',function (event) {
//    event.preventDefault();

//  const emailValue = emailInput.value.trim();

//   if (isValidEmail(emailValue)) {
//     alert('Alamat Email Benar');
//    } else {
//     alert('Alamat Email Salah');
//    }
//  });

//  function isValidEmail(email) {
//      // Gunakan regular expression untuk validasi alamat email
//      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return emailPattern.test(email);
// }



