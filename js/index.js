"use strict";
const stepPoint1 = document.querySelector("#s1");
const stepPoint2 = document.querySelector("#s2");
const stepPoint3 = document.querySelector("#s3");
const actualStep = document.querySelector("#actualStep");
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let step = 1;
const button1 = document.querySelector("#btn1");
button1 === null || button1 === void 0 ? void 0 : button1.addEventListener("click", () => {
    var _a, _b;
    if ((nome === null || nome === void 0 ? void 0 : nome.value) != "" && (email === null || email === void 0 ? void 0 : email.value) != "") {
        (_a = document.querySelector("#step1")) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "display: none;");
        (_b = document.querySelector("#step2")) === null || _b === void 0 ? void 0 : _b.setAttribute("style", "display: flex;");
        stepPoint2 === null || stepPoint2 === void 0 ? void 0 : stepPoint2.classList.add("stepComplete");
        step++;
        actualStep.innerHTML = String(step);
        nome = document.querySelector("#nome");
        email = document.querySelector("#email");
        const nomeOutput = document.querySelector("#nomeOutput");
        nomeOutput.innerHTML = String(nome.value);
        const emailOutput = document.querySelector("#emailOutput");
        emailOutput.innerHTML = String(email.value);
    }
});
const button2 = document.querySelector("#btn2");
button2 === null || button2 === void 0 ? void 0 : button2.addEventListener("click", (e) => {
    var _a, _b;
    const SD = document.querySelector("#SD");
    const isCheckedSD = SD.checked;
    const UX = document.querySelector("#UX");
    const isCheckedUX = UX.checked;
    const GD = document.querySelector("#GD");
    const isCheckedGD = GD.checked;
    if (!isCheckedSD && !isCheckedUX && !isCheckedGD) {
        alert("Selecione pelo menos 1 tópico!");
    }
    else {
        const list = document.querySelector("#list");
        if (isCheckedSD) {
            let li = document.createElement("li");
            li.innerHTML = "Software Development";
            list.appendChild(li);
        }
        if (isCheckedUX) {
            let li = document.createElement("li");
            li.innerHTML = "User Experience";
            list.appendChild(li);
        }
        if (isCheckedGD) {
            let li = document.createElement("li");
            li.innerHTML = "Graphic Design";
            list.appendChild(li);
        }
        (_a = document.querySelector("#step2")) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "display: none;");
        (_b = document.querySelector("#step3")) === null || _b === void 0 ? void 0 : _b.setAttribute("style", "display: flex;");
        stepPoint3 === null || stepPoint3 === void 0 ? void 0 : stepPoint3.classList.add("stepComplete");
        step++;
        actualStep.innerHTML = String(step);
    }
});
const button3 = document.querySelector("#btn3");
button3 === null || button3 === void 0 ? void 0 : button3.addEventListener("click", () => {
    alert("✅ Success");
});
