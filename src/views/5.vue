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
      <p>
        Com base no que conversamos, eu vou te contar uma história.</p>
        <p>“Era uma vez um casal chamado “nome 1” e “nome 2”. Eles estavam com o grande sonho de casar! E que tarefa difícil seria essa, não é mesmo?!</p>
        <p>Pra começar essa jornada eles precisam saber o quanto eles querem investir em seu casamento.”</p>
    </div>
    <div class="card mt-5 p-3 shadow bg-gradient-custom">
      <label>Qual o valor do orçamento de vocês?</label>
      <base-input class="input-group" placeholder="R$ 0,00" type="text"></base-input>
      <div class="row">
        <div class="col">
          <router-link to="/6" class="btn btn-custom" type="primary">Não sei</router-link>
        </div>
        <div class="col">
          <router-link to="/7" class="btn btn-custom" type="primary">Continuar</router-link>
        </div>
      </div>      
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
body {
  background-color: #eeeef4;
}
.bg-gradient-custom {
  background-image: linear-gradient(-30deg, #ed7140, #ce4496);
}
label {
  color: white !important;
  font-family: "Montserrat", sans-serif;
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

