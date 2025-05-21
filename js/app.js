let tiempoRestante = 0;
let tiempoInicial = 0;
let intervalo = null;

const mostrarTiempo = () => {
  const minutos = Math.floor(tiempoRestante / 60).toString().padStart(2, '0');
  const segundos = (tiempoRestante % 60).toString().padStart(2, '0');
  document.getElementById("tiempo").textContent = `${minutos}:${segundos}`;
};

document.getElementById("formTiempo").addEventListener("submit", (e) => {
  e.preventDefault(); 
});

document.getElementById("iniciar").addEventListener("click", () => {
  if (!intervalo) {
    const input = document.getElementById("inputTiempo");
    if (tiempoRestante === 0) {
      tiempoInicial = parseInt(input.value, 10);
      if (isNaN(tiempoInicial) || tiempoInicial <= 0) {
        alert("Por favor ingresá un número mayor a 0");
        return;
      }
      tiempoRestante = tiempoInicial;
    }

    intervalo = setInterval(() => {
      if (tiempoRestante > 0) {
        tiempoRestante--;
        mostrarTiempo();
      } else {
        clearInterval(intervalo);
        intervalo = null;
        alert("¡Tiempo terminado!");
      }
    }, 1000);

    mostrarTiempo();
  }
});

document.getElementById("pausar").addEventListener("click", () => {
  if (intervalo) {
    clearInterval(intervalo);
    intervalo = null;
  }
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  tiempoRestante = 0;
  tiempoInicial = 0;
  document.getElementById("tiempo").textContent = "00:00";
  document.getElementById("inputTiempo").value = "";
});