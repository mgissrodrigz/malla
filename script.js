
const materias = [
  { codigo: "BI-121", nombre: "Biología General", semestre: "Primer Año - Primer Semestre", requisito: [] },
  { codigo: "QQ-103", nombre: "Química General", semestre: "Primer Año - Primer Semestre", requisito: [] },
  { codigo: "SC-101", nombre: "Sociología", semestre: "Primer Año - Primer Semestre", requisito: [] },
  { codigo: "IF-105", nombre: "Informática", semestre: "Primer Año - Primer Semestre", requisito: [] },
  { codigo: "MM-121", nombre: "Matemática", semestre: "Primer Año - Primer Semestre", requisito: [] },
  { codigo: "EG-011", nombre: "Español", semestre: "Primer Año - Primer Semestre", requisito: [] },
  { codigo: "QQ-214", nombre: "Química Orgánica", semestre: "Primer Año - Segundo Semestre", requisito: ["QQ-103", "BI-121"] },
  { codigo: "FF-101", nombre: "Bioestadística", semestre: "Primer Año - Segundo Semestre", requisito: [] },
  { codigo: "FI-101", nombre: "Filosofía", semestre: "Primer Año - Segundo Semestre", requisito: [] },
  { codigo: "HH-101", nombre: "Historia de Honduras", semestre: "Primer Año - Segundo Semestre", requisito: [] },
  { codigo: "OPT-NAT", nombre: "Optativa de Ciencias Naturales", semestre: "Segundo Año - Tercer Semestre", requisito: ["BI-121"] },
  { codigo: "OPT-HUM", nombre: "Optativa de Humanidades", semestre: "Segundo Año - Tercer Semestre", requisito: [] },
  { codigo: "OPT-ART", nombre: "Optativa de Arte o Deporte", semestre: "Segundo Año - Tercer Semestre", requisito: [] },
  { codigo: "IOE-041", nombre: "Introducción a la Odontología", semestre: "Segundo Año - Tercer Semestre", requisito: [] },
  { codigo: "AM-221", nombre: "Anatomía Macroscópica", semestre: "Segundo Año - Cuarto Semestre", requisito: ["QQ-214", "BI-121"] },
  { codigo: "NE-111", nombre: "Neuroanatomía", semestre: "Segundo Año - Cuarto Semestre", requisito: ["QQ-214", "BI-121"] },
  { codigo: "EL-111", nombre: "Embriología General", semestre: "Segundo Año - Cuarto Semestre", requisito: ["QQ-214", "BI-121"] },
  { codigo: "HE-223", nombre: "Histología General", semestre: "Segundo Año - Cuarto Semestre", requisito: ["QQ-214", "BI-121"] },
  { codigo: "OSE-173", nombre: "Odontología Sanitaria I", semestre: "Segundo Año - Cuarto Semestre", requisito: ["QQ-214", "BI-121"] },
  { codigo: "AME-184", nombre: "Anatomía y Medicina Dental", semestre: "Tercer Año - Quinto Semestre", requisito: ["AM-221"] },
  { codigo: "FM-111", nombre: "Anatomía de Cabeza y Cuello", semestre: "Tercer Año - Quinto Semestre", requisito: ["AM-221"] },
  { codigo: "FI-111", nombre: "Fisiología I", semestre: "Tercer Año - Quinto Semestre", requisito: ["AM-221"] },
  { codigo: "HEE-224", nombre: "Histología y Embriología Bucodental", semestre: "Tercer Año - Quinto Semestre", requisito: ["EL-111", "HE-223"] },
  { codigo: "OSE-174", nombre: "Odontología Sanitaria II", semestre: "Tercer Año - Quinto Semestre", requisito: ["OSE-173"] },
  { codigo: "OCE-265", nombre: "Oclusión", semestre: "Tercer Año - Sexto Semestre", requisito: ["FM-111", "AME-184"] },
  { codigo: "RDE-275", nombre: "Radiología", semestre: "Tercer Año - Sexto Semestre", requisito: [] },
  { codigo: "PGE-285", nombre: "Psicología", semestre: "Tercer Año - Sexto Semestre", requisito: [] },
  { codigo: "FC-511", nombre: "Farmacología", semestre: "Tercer Año - Sexto Semestre", requisito: [] },
  { codigo: "EPE-244", nombre: "Propedéutica", semestre: "Tercer Año - Sexto Semestre", requisito: ["OSE-173"] },
  { codigo: "OPE-326", nombre: "Operatoria Dental I", semestre: "Cuarto Año - Séptimo Semestre", requisito: ["HEE-224", "OCE-265"] },
  { codigo: "ESE-336", nombre: "Preclínica", semestre: "Cuarto Año - Séptimo Semestre", requisito: ["PGE-285", "RDE-275"] },
  { codigo: "PGE-385", nombre: "Psicología Clínica", semestre: "Cuarto Año - Séptimo Semestre", requisito: ["PGE-285", "FC-511"] },
  { codigo: "CIE-579", nombre: "Clínica Integral I", semestre: "Cuarto Año - Séptimo Semestre", requisito: ["EPE-244"] },
  { codigo: "MIE-315", nombre: "Metodología de la Investigación", semestre: "Cuarto Año - Séptimo Semestre", requisito: ["EPE-244"] },
  { codigo: "PRE-387", nombre: "Prótesis Removible I", semestre: "Cuarto Año - Octavo Semestre", requisito: ["OPE-326"] },
  { codigo: "OPE-397", nombre: "Operatoria Dental II", semestre: "Cuarto Año - Octavo Semestre", requisito: ["OPE-326"] },
  { codigo: "ESE-387", nombre: "Cirugía Bucal I", semestre: "Cuarto Año - Octavo Semestre", requisito: ["ESE-336"] },
  { codigo: "TAE-366", nombre: "Terapéutica", semestre: "Cuarto Año - Octavo Semestre", requisito: [] },
  { codigo: "EDE-437", nombre: "Endodoncia I", semestre: "Cuarto Año - Octavo Semestre", requisito: ["OPE-326", "TAE-366"] },
  { codigo: "PRE-458", nombre: "Prótesis Removible II", semestre: "Quinto Año - Noveno Semestre", requisito: ["PRE-387", "OPE-397"] },
  { codigo: "OPE-457", nombre: "Operatoria Dental III", semestre: "Quinto Año - Noveno Semestre", requisito: ["OPE-397"] },
  { codigo: "ESE-407", nombre: "Cirugía Bucal II", semestre: "Quinto Año - Noveno Semestre", requisito: [] },
  { codigo: "PRE-478", nombre: "Prótesis Fija I", semestre: "Quinto Año - Noveno Semestre", requisito: [] },
  { codigo: "EDE-447", nombre: "Endodoncia II", semestre: "Quinto Año - Noveno Semestre", requisito: ["EDE-437"] },
  { codigo: "PAE-529", nombre: "Planificación Estratégica", semestre: "Quinto Año - Décimo Semestre", requisito: [] },
  { codigo: "PFE-549", nombre: "Prótesis Fija II", semestre: "Quinto Año - Décimo Semestre", requisito: ["PRE-478"] },
  { codigo: "OPE-559", nombre: "Operatoria Dental IV", semestre: "Quinto Año - Décimo Semestre", requisito: [] },
  { codigo: "CIE-589", nombre: "Clínica Integral II", semestre: "Quinto Año - Décimo Semestre", requisito: ["MIE-315"] },
  { codigo: "CEE-589", nombre: "Ciencias Estomatológicas", semestre: "Quinto Año - Décimo Semestre", requisito: [] },
  { codigo: "ORE-591", nombre: "Ortodoncia II", semestre: "Sexto Año - Undécimo Semestre", requisito: ["PAE-529"] },
  { codigo: "PFE-601", nombre: "Prótesis Fija III", semestre: "Sexto Año - Undécimo Semestre", requisito: ["PFE-549"] },
  { codigo: "PTE-611", nombre: "Prótesis Total II", semestre: "Sexto Año - Undécimo Semestre", requisito: [] },
  { codigo: "GOE-621", nombre: "Gestión de la Calidad Total en Odontología", semestre: "Sexto Año - Undécimo Semestre", requisito: [] },
  { codigo: "OLE-631", nombre: "Odontología Legal y Forense", semestre: "Sexto Año - Undécimo Semestre", requisito: ["CIE-579"] },
  { codigo: "CIE-641", nombre: "Clínica Integral III", semestre: "Sexto Año - Undécimo Semestre", requisito: [] }
];

const contenedor = document.getElementById("malla");
const detalleTexto = document.getElementById("detalle-texto");
const buscador = document.getElementById("buscador");
const filtroSemestre = document.getElementById("filtro-semestre");

function renderMaterias() {
  contenedor.innerHTML = "";
  const texto = buscador.value.toLowerCase();
  const filtro = filtroSemestre.value;

  materias.forEach(m => {
    if ((m.nombre.toLowerCase().includes(texto) || m.codigo.toLowerCase().includes(texto)) &&
        (!filtro || m.semestre === filtro)) {

      const div = document.createElement("div");
      div.className = "materia";
      div.id = m.codigo;
      div.innerText = `${m.codigo}\n${m.nombre}\n${m.semestre}`;

      div.onclick = () => {
        div.classList.toggle("completada");
        detalleTexto.innerText = `Materia: ${m.nombre}\nCódigo: ${m.codigo}\nSemestre: ${m.semestre}\nRequisitos: ${m.requisito.length ? m.requisito.join(", ") : "Ninguno"}`;
      };

      contenedor.appendChild(div);
    }
  });
}

function llenarFiltroSemestre() {
  const semestres = [...new Set(materias.map(m => m.semestre))];
  semestres.forEach(s => {
    const option = document.createElement("option");
    option.value = s;
    option.textContent = s;
    filtroSemestre.appendChild(option);
  });
}

buscador.addEventListener("input", renderMaterias);
filtroSemestre.addEventListener("change", renderMaterias);

llenarFiltroSemestre();
renderMaterias();
