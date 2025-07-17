const semestres = {
    "Primer Semestre": [
        { codigo: "BI-121", nombre: "Biología General", requisitos: [] },
        { codigo: "QQ-103", nombre: "Química General", requisitos: [] },
        { codigo: "SC-101", nombre: "Sociología", requisitos: [] },
        { codigo: "IF-105", nombre: "Informática", requisitos: [] },
        { codigo: "MM-121", nombre: "Matemática", requisitos: [] },
        { codigo: "EG-011", nombre: "Español", requisitos: [] }
    ],
    "Segundo Semestre": [
        { codigo: "QQ-214", nombre: "Química Orgánica", requisitos: ["QQ-103", "BI-121"] },
        { codigo: "FF-101", nombre: "Bioestadística", requisitos: [] },
        { codigo: "FI-101", nombre: "Filosofía", requisitos: [] },
        { codigo: "HH-101", nombre: "Historia de Honduras", requisitos: [] }
    ],
    "Tercer Semestre": [
        { codigo: "OptCN", nombre: "Optativa de Ciencias Naturales", requisitos: ["BI-121"] },
        { codigo: "OptHum", nombre: "Optativa de Humanidades", requisitos: [] },
        { codigo: "OptArt", nombre: "Optativa de Arte o Deporte", requisitos: [] },
        { codigo: "IOE-041", nombre: "Introducción a la Odontología", requisitos: [] }
    ],
    "Cuarto Semestre": [
        { codigo: "AM-221", nombre: "Anatomía Macroscópica", requisitos: ["QQ-214", "BI-121"] },
        { codigo: "NE-111", nombre: "Neuroanatomía", requisitos: ["QQ-214", "BI-121"] },
        { codigo: "EL-111", nombre: "Embriología General", requisitos: ["QQ-214", "BI-121"] },
        { codigo: "HE-223", nombre: "Histología General", requisitos: ["QQ-214", "BI-121"] },
        { codigo: "OSE-173", nombre: "Odontología Sanitaria I", requisitos: ["QQ-214", "BI-121"] }
    ],
    "Quinto Semestre": [
        { codigo: "AME-184", nombre: "Anatomía y Medicina Dental", requisitos: ["AM-221"] },
        { codigo: "FM-111", nombre: "Anatomía de Cabeza y Cuello", requisitos: ["AM-221", "NE-111"] },
        { codigo: "FI-111", nombre: "Fisiología I", requisitos: ["AM-221"] },
        { codigo: "HEE-224", nombre: "Histología y Embriología Bucodental", requisitos: ["EL-111", "HE-223"] },
        { codigo: "OSE-174", nombre: "Odontología Sanitaria II", requisitos: ["OSE-173"] }
    ],
    "Sexto Semestre": [
        { codigo: "OCE-265", nombre: "Oclusión", requisitos: ["FM-111", "AME-184"] },
        { codigo: "RDE-275", nombre: "Radiología", requisitos: [] },
        { codigo: "PGE-285", nombre: "Psicología", requisitos: ["FM-111"] },
        { codigo: "FC-511", nombre: "Farmacología", requisitos: ["NE-111", "FM-111"] },
        { codigo: "EPE-244", nombre: "Propedéutica", requisitos: ["OSE-173"] }
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
