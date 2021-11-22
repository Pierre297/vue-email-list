var app = new Vue({
  el: "#app",
  data: {
    email: "",
    emailList: [],
  },
  //hook
  mounted() {
    const self = this;
    for (i = 0; i < 10; i++) {
      // chiamata ajax alla API
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function (lista) {
          self.email = lista.data.response;
          self.email.push(emailList);
          console.log(emailList);
        });
    }
  },
});
