const semestres = {
    "Primer Semestre": [
        { codigo: "BI-121", nombre: "Biología General", requisitos: [] },
        { codigo: "QQ-103", nombre: "Química General", requisitos: [] },
        { codigo: "SC-101", nombre: "Sociología", requisitos: [] },
        { codigo: "IOE-569", nombre: "Informática", requisitos: [] },
        { codigo: "MM-112", nombre: "Matemática", requisitos: [] },
        { codigo: "EG-011", nombre: "Español", requisitos: [] }
    ],
    "Segundo Semestre": [
        { codigo: "QQ-214", nombre: "Química Orgánica", requisitos: ["QQ-103", "BI-121"] },
        { codigo: "MM-241", nombre: "Bioestadística", requisitos: ["MM-112"] },
        { codigo: "FI-101", nombre: "Filosofía", requisitos: [] },
        { codigo: "HH-101", nombre: "Historia de Honduras", requisitos: [] }
    ],
    "Tercer Semestre": [
        { codigo: "OptCN", nombre: "Optativa de Ciencias Naturales", requisitos: ["BI-121"] },
        { codigo: "OptHum", nombre: "Optativa de Humanidades", requisitos: ["FF-101", "HH-101"] },
        { codigo: "OptArt", nombre: "Optativa de Arte o Deporte", requisitos: [] },
        { codigo: "IOE-041", nombre: "Introducción a la Odontología", requisitos: [] },
        { codigo: "Optlnga", nombre: "Optativa de Lengua", requisitos: ["EG-101"] }
    ],
    "Cuarto Semestre": [
        { codigo: "AM-221", nombre: "Anatomía Macroscópica", requisitos: ["QQ-214", "BI-121"] },
        { codigo: "NA-111", nombre: "Neuroanatomía", requisitos: ["QQ-214", "BI-121"] },
        { codigo: "EL-111", nombre: "Embriología General", requisitos: ["QQ-214", "BI-121"] },
        { codigo: "HX-101", nombre: "Histología General", requisitos: ["QQ-214", "BI-121"] },
        { codigo: "OSE-082", nombre: "Odontología Sanitaria I", requisitos: ["IOE-041", "MM-241"] }
    ],
    "Quinto Semestre": [
        { codigo: "AME-184", nombre: "Anatomía y Modelado Dental", requisitos: ["AM-221"] },
        { codigo: "ACE-194", nombre: "Anatomía de Cabeza y Cuello", requisitos: ["AM-221", "NE-111"] },
        { codigo: "FM-111", nombre: "Fisiología I", requisitos: ["AM-221"] },
        { codigo: "MB-111", nombre: "Microbiología", requisitos: ["AM-221", "NA-111"] },
        { codigo: "BQ-111", nombre: "Bioquímica", requisitos: ["HX-101", "EL-111"] },
        { codigo: "HEE-234", nombre: "Histología y Embriología Bucodental", requisitos: ["HX-101", "EL-111"] },
        { codigo: "OSE-173", nombre: "Odontología Sanitaria II", requisitos: ["AM-221", "OSE-082"] }
    ],
    "Sexto Semestre": [
        { codigo: "OCE-265", nombre: "Oclusión", requisitos: ["FM-111", "AME-184"] },
        { codigo: "RDE-275", nombre: "Radiología", requisitos: ["FS-104", "ACE-194"] },
        { codigo: "POE-295", nombre: "Psicología Aplicada", requisitos: ["FM-111","NA-111" ] },
        { codigo: "FC-511", nombre: "Farmacología", requisitos: ["BQ-111", "MB-111"] },
        { codigo: "EPE-244", nombre: "Epidemiología", requisitos: ["OSE-173"] },
        { codigo: "PGE-285", nombre: "Patología General", requisitos: ["MB-111", "FM-111"] }
    ],
    "Séptimo Semestre": [
        { codigo: "OPE-326", nombre: "Operatoria Dental I", requisitos: ["HEE-224", "OCE-265"] },
        { codigo: "ESE-336", nombre: "Estomatologia", requisitos: ["PGE-285", "RDE-275"] },
        { codigo: "SEE-336", nombre: "Semiologia", requisitos: ["PGE-285", "FC-511"] },
        { codigo: "PGE-385", nombre: "Cirugia Bucal I", requisitos: ["PGE-285", "FC-511"] },
        { codigo: "TAE-366", nombre: "Terapeutica Aplicada", requisitos: ["FC-511"] },
        { codigo: "MIE-315", nombre: "Metodología de la Investigación", requisitos: ["EPE-244"] }
    ],
    "Octavo Semestre": [
        { codigo: "PRE-387", nombre: "Prótesis Removible I", requisitos: ["PE-326", "CBE-356"] },
        { codigo: "OPE-397", nombre: "Operatoria Dental II", requisitos: ["OPE-326", "CBE-356"] },
        { codigo: "ESE-407", nombre: "Estomatologia II", requisitos: ["ESE-336", "SEE-340"] },
        { codigo: "CBE-417", nombre: "Cirugía Bucal II", requisitos: ["TAE-336", "CBE-356"] },
        { codigo: "PIE-427", nombre: "Periodoncia I", requisitos: ["TAE-366", "CBE-356"] },
        { codigo: "EDE-437", nombre: "Endodoncia I", requisitos: ["OPE-326", "TAE-366"] }
    ],
    "Noveno Semestre": [
        { codigo: "PRE-458", nombre: "Prótesis Removible II", requisitos: ["PRE-387", "OPE-397"] },
        { codigo: "OPE-457", nombre: "Operatoria Dental III", requisitos: ["OPE-397"] },
        { codigo: "ESE-407", nombre: "Cirugía Bucal II", requisitos: ["ESE-387"] },
        { codigo: "PRE-478", nombre: "Prótesis Fija I", requisitos: ["ESE-407"] },
        { codigo: "EDE-457", nombre: "Endodoncia II", requisitos: ["EDE-437"] }
    ],
    "Décimo Semestre": [
        { codigo: "PAE-529", nombre: "Planificación Estratégica", requisitos: ["PRE-478"] },
        { codigo: "PFE-549", nombre: "Prótesis Fija II", requisitos: ["PRE-478"] },
        { codigo: "OPE-559", nombre: "Operatoria Dental IV", requisitos: ["PRE-478"] },
        { codigo: "CIE-589", nombre: "Clínica Integral II", requisitos: ["CIE-579", "MIE-315"] },
        { codigo: "CEE-589", nombre: "Ciencias Estomatológicas", requisitos: ["CIE-579"] }
    ],
    "Undécimo Semestre": [
        { codigo: "ORE-591", nombre: "Ortodoncia II", requisitos: ["PAE-529"] },
        { codigo: "PFE-601", nombre: "Prótesis Fija III", requisitos: ["PFE-549"] },
        { codigo: "PTE-611", nombre: "Prótesis Total II", requisitos: [] },
        { codigo: "GOE-621", nombre: "Gestión de la Calidad Total en Odontología", requisitos: ["CEE-589"] },
        { codigo: "OLE-631", nombre: "Odontología Legal y Forense", requisitos: ["CIE-579"] },
        { codigo: "CIE-641", nombre: "Clínica Integral III", requisitos: ["CIE-589"] }
    ]
};

const contenedor = document.getElementById("contenedor-malla");

for (const [semestre, ramos] of Object.entries(semestres)) {
    const columna = document.createElement("div");
    columna.className = "semestre";
    columna.innerHTML = `<h2>${semestre}</h2>`;

    ramos.forEach(ramo => {
        const div = document.createElement("div");
        div.classList.add("ramo");
        div.id = ramo.codigo;
        div.innerText = `${ramo.codigo}\n${ramo.nombre}`;
        div.onclick = () => aprobarRamo(ramo.codigo);
        columna.appendChild(div);
    });

    contenedor.appendChild(columna);
}

function actualizarDesbloqueo() {
    for (const ramos of Object.values(semestres)) {
        ramos.forEach(ramo => {
            const requisitosCumplidos = ramo.requisitos.every(req =>
                document.getElementById(req)?.classList.contains("aprobado")
            );
            const div = document.getElementById(ramo.codigo);
            if (requisitosCumplidos && !div.classList.contains("aprobado")) {
                div.classList.add("desbloqueado");
            }
        });
    }
}

function aprobarRamo(codigo) {
    const div = document.getElementById(codigo);
    if (!div.classList.contains("desbloqueado")) return;
    div.classList.add("aprobado");
    actualizarDesbloqueo();
}

actualizarDesbloqueo();
