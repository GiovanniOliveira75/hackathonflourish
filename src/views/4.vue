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
      <p>Bacana! Como te falei, to aqui pra te ajudar a realizar os seus sonhos. Vamos começar com o sonho de realizar o melhor casamento, aprendendo a lidar com alguns desafios financeiros.</p>
    </div>
    <div class="card mt-5 p-3 shadow bg-gradient-custom">
      <router-link to="/5" class="btn btn-custom" type="primary">SHOW!</router-link>
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

