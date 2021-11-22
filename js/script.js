var app = new Vue({
  el: "#app",
  data: {
    email: "stringa",
  },
  //hook
  mounted() {
    // chiamata ajax alla API
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(function (lista) {
        console.log(lista.data);
      });
  },
});
