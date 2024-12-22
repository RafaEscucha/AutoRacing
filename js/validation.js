document.querySelector("html").addEventListener("submit", function (event) {
    event.preventDefault();

    const fields = [
        "Nombre",
        "Apellido",
        "DNI",
        "Tram_DNI",
        "Fecha_nac",
        "Form_Circuito",
        "correo",
        "Fecha_tur",
        "condiciones"
    ];

    let allValid = true;
    let missingFields = [];

    fields.forEach((id) => {
        const field = document.getElementById(id);
        if (!field) return;

        const errorMessage = document.createElement("span");
        errorMessage.className = "error-message";
        
        if (field.nextSibling?.className === "error-message") {
            field.nextSibling.remove();
        }

        if (field.type === "checkbox") {
            if (!field.checked) {
                missingFields.push("Términos y condiciones");
                allValid = false;
            }
        } else if (!field.value.trim()) {
            const label = document.querySelector(`label[for="${field.id}"]`);
            const labelText = label ? label.textContent.replace("[*]:", "").trim() : field.name || field.id;
            missingFields.push(labelText);
            allValid = false;
        }
    });

    if (!allValid) {
        alert(`Por favor, complete los siguientes campos obligatorios: ${missingFields.join(", ")}.`);
    } else {
        alert("Formulario enviado exitosamente.");
        event.target.submit();
    }
});
