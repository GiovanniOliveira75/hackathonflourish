<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-2">
        <div href="#" class="avatar rounded-circle mr-3">
          <img alt="Image placeholder" src="img/theme/may.png">
        </div>
      </div>
      <div class="col">
        <h1>May</h1>
      </div>
    </div>
    <div>
      <p>Oi, eu sou a Mayara, mas pode me chamar de May. Tudo bem com você?</p>
      <p>
        To aqui pra ajudar você a alcançar os seus sonhos! Agora, me fala sobre você e seu parceiro(a). Quais são seus nomes??
      </p>
    </div>
    <div class="card mt-5 p-3 shadow bg-gradient-custom">
      <base-input class="input-group" placeholder="Seu nome" type="text"></base-input>
      <base-input
        class="input-group"
        placeholder="Nome do seu parceiro"
        type="text"
      ></base-input>
      <router-link to="/2" class="btn btn-custom" type="primary">Continuar</router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
body{
  background-color: #EEEEF4;
}
.bg-gradient-custom {
  background-image: linear-gradient(-30deg, #ed7140, #ce4496);
}
.form-control {
  background-color: transparent !important;
  border-color: white !important;
  color: white !important;
  font-family: "Montserrat", sans-serif;
}
.form-control::placeholder {
  color: white;
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s;
}
.btn-custom,
.btn-custom:hover,
.btn-custom:focus,
.btn-custom:active {
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  background-image: none;
  background-color: transparent;
  border: none;
  box-shadow: none !important;
  font-family: "Montserrat", sans-serif;
}
</style>

