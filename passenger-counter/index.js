const COUNT_EL = document.getElementById("count-el");
let count = 0;
let previousEntries = document.getElementById("previous-ent");

increment = () => {
    count++;
    COUNT_EL.textContent = count;
}

save = () => {
    previousEntries.textContent += ` ${count} -`;
    count = 0;
    COUNT_EL.textContent = count;
}