function Szamol() {
    const e = parseInt(document.getElementById("elso").value);
    const m = parseInt(document.getElementById("masodik").value);

    const kozteszam = [];
    for (let i = e + 1; i < m; i++) {
        kozteszam.push(i);
    }

    document.getElementById("szamok").innerHTML = kozteszam.join(", ");
}