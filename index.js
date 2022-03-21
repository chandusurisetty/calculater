const btns = document.querySelectorAll("button");
const screen = document.querySelector("input")
const nostart = ["%", "/", "*"]
const symbals = ["%", "/", "*", "+", "-", "."];
const mathprob = ["%", "/", "*", "+", "-"];


for (let btn of btns) {
    btn.addEventListener("click", async (el) => {
        if (btn.classList.contains("show")) {
            if ((screen.value === "" && nostart.some(symble => { return btn.innerText === symble }))) {


            }
            else if (symbals.some(symbal => { return screen.value[screen.value.length - 1] === symbal }) && symbals.some(symbal => { return btn.innerText === symbal })) {

            }



            else {

                screen.value += btn.innerText
            }



        }
        if (btn.classList.contains("clear")) {
            screen.value = ""
        }
        if (btn.classList.contains("del")) {
            let a = screen.value
            screen.value = a.slice(0, a.length - 1)
        }
        if (btn.classList.contains("equal")) {
            for (let i of screen.value) {
                if (mathprob.some(symble => { return symble === i })) {
                    const f1 = parseInt(screen.value.split(i)[0])
                    const f2 = parseInt(screen.value.split(i)[1])
                    if (i == "+") {
                        screen.value = f1 + f2;
                    }
                    else if (i == "-") {
                        screen.value = f1 - f2;
                    }
                    else if (i == "/") {
                        screen.value = f1 / f2;
                    }
                    if (i == "%") {
                        screen.value = f1 % f2;
                    }
                    if (i == "*") {
                        screen.value = f1 * f2;
                    }

                }
            }



        }




    })
}
