const stepPoint1 = document.querySelector("#s1");
const stepPoint2 = document.querySelector("#s2");
const stepPoint3 = document.querySelector("#s3");
const actualStep = document.querySelector("#actualStep") as HTMLElement;

let nome = document.querySelector("#nome") as HTMLInputElement;
let email = document.querySelector("#email") as HTMLInputElement;
let step: number = 1;

const button1 = document.querySelector("#btn1") as HTMLInputElement;

button1?.addEventListener("click", () => {
  if (nome?.value != "" && email?.value != "") {
    document.querySelector("#step1")?.setAttribute("style", "display: none;");
    document.querySelector("#step2")?.setAttribute("style", "display: flex;");
    stepPoint2?.classList.add("stepComplete");
    step++;
    actualStep.innerHTML = String(step);
    nome = document.querySelector("#nome") as HTMLInputElement;
    email = document.querySelector("#email") as HTMLInputElement;
    const nomeOutput = document.querySelector(
      "#nomeOutput"
    ) as HTMLInputElement;
    nomeOutput.innerHTML = String(nome.value);
    const emailOutput = document.querySelector(
      "#emailOutput"
    ) as HTMLInputElement;
    emailOutput.innerHTML = String(email.value);
  }
});

const button2 = document.querySelector("#btn2");

button2?.addEventListener("click", (e) => {
  const SD = document.querySelector("#SD") as HTMLInputElement;
  const isCheckedSD = SD.checked;
  const UX = document.querySelector("#UX") as HTMLInputElement;
  const isCheckedUX = UX.checked;
  const GD = document.querySelector("#GD") as HTMLInputElement;
  const isCheckedGD = GD.checked;
  if (!isCheckedSD && !isCheckedUX && !isCheckedGD) {
    alert("Selecione pelo menos 1 tópico!");
  } else {
    const list = document.querySelector("#list") as HTMLInputElement;
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
    document.querySelector("#step2")?.setAttribute("style", "display: none;");
    document.querySelector("#step3")?.setAttribute("style", "display: flex;");
    stepPoint3?.classList.add("stepComplete");
    step++;
    actualStep.innerHTML = String(step);
  }
});

const button3 = document.querySelector("#btn3");

button3?.addEventListener("click", () => {
  alert("✅ Success");
});
