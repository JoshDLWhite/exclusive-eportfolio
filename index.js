//Template ID: template_jb9i0pl
//Service ID: service_77ywktl
//Public Key: rnMxH2Mh02Rt-ZWWG

function contact() {
  event.preventDefault();
  const loading = document.querySelector(`.modal__overlay--loading`);
  const success = document.querySelector(`.modal__overlay--success`);
  loading.classList += " modal__overlay--visible"
  emailjs
    .sendForm(
      `service_77ywktl`,
      `template_jb9i0pl`,
      event.target,
      `rnMxH2Mh02Rt-ZWWG`
  ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert("The email service is temporarily unavailable. Please contact me directly at JoshDLWhite@gmail.com");
  })
}