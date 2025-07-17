
const materias = [
  { codigo: "BI-121", nombre: "Biología General", semestre: "Primer Año - Primer Semestre", requisito: [] },
  { codigo: "QQ-103", nombre: "Química General", semestre: "Primer Año - Primer Semestre", requisito: [] },
  { codigo: "QQ-214", nombre: "Química Orgánica", semestre: "Primer Año - Segundo Semestre", requisito: ["QQ-103", "BI-121"] },
  { codigo: "AM-221", nombre: "Anatomía Macroscópica", semestre: "Segundo Año - Cuarto Semestre", requisito: ["QQ-214", "BI-121"] },
  { codigo: "OPE-326", nombre: "Operatoria Dental I", semestre: "Cuarto Año - Séptimo Semestre", requisito: ["AM-221"] },
  { codigo: "OPE-397", nombre: "Operatoria Dental II", semestre: "Cuarto Año - Octavo Semestre", requisito: ["OPE-326"] },
  { codigo: "OPE-559", nombre: "Operatoria Dental IV", semestre: "Quinto Año - Décimo Semestre", requisito: ["OPE-397"] }
];

const estadoMaterias = {};

function renderMalla() {
  const malla = document.getElementById("malla");
  const detalleTexto = document.getElementById("detalle-texto");
  malla.innerHTML = "";

  const semestres = [...new Set(materias.map(m => m.semestre))];
  semestres.forEach(semestre => {
    const divSem = document.createElement("div");
    divSem.className = "semestre";
    divSem.innerHTML = `<h2>${semestre}</h2>`;

    materias
      .filter(m => m.semestre === semestre)
      .forEach(m => {
        const div = document.createElement("div");
        div.className = "materia";
        div.id = m.codigo;
        div.innerText = `${m.codigo} - ${m.nombre}`;

        const completada = localStorage.getItem(m.codigo) === "true";
        estadoMaterias[m.codigo] = completada;

        if (completada) div.classList.add("completada");

        const requisitosCumplidos = m.requisito.every(req => estadoMaterias[req]);
        if (!completada && !requisitosCumplidos && m.requisito.length > 0) {
          div.classList.add("bloqueada");
        }

        div.onclick = () => {
          if (div.classList.contains("bloqueada")) return;

          div.classList.toggle("completada");
          const hecho = div.classList.contains("completada");
          estadoMaterias[m.codigo] = hecho;
          localStorage.setItem(m.codigo, hecho);
          renderMalla();
          detalleTexto.innerText = `Materia: ${m.nombre}\nCódigo: ${m.codigo}\nRequisitos: ${m.requisito.length ? m.requisito.join(", ") : "Ninguno"}`;
        };

        divSem.appendChild(div);
      });

    malla.appendChild(divSem);
  });
}

window.onload = renderMalla;
