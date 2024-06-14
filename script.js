let boxes = document.querySelectorAll(".box");
        let resetBtn = document.querySelector("#reset-btn");
        let msgcontiner = document.querySelector(".msg-continer");
        let msg = document.querySelector("#msg");
        let newbtn = document.querySelector("#new-btn");

        let turnO = true;
        let count  = 0;

        const winPattern = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [3, 4, 5],
            [6, 7, 8]
    ];

    const resetGame = () => {
        turnO = true;
        count = 0;
        enableBox();
        msgcontiner.classList.add("hide")
    }

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if(turnO === true) {
                box.innerText = "O";
                turnO = false;
            }else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            count++;

            let iswinner = checkWiner();

            if(count > 9 && !iswinner) {
                gameDraw();
            }
        });
    });

    const gameDraw = () => {
        msg.innerHTML = "Game was draw";
        msgcontiner.classList.remove("hide");
        disableBox();
    }

    const disableBox = () => {
        for (const box of boxes) {
            box.disabled = true;
        }
    }

    const enableBox = () => {
        for (const box of boxes) {
            box.disabled = false;
            box.innerText= "";
        }
    }

    const showWinner = (winner) => {
        msg.innerHTML = `Congratulation, Winner is ${winner}`;
        msgcontiner.classList.remove("hide")
        disableBox();
    }


    const checkWiner = () => {
        for (const partten of winPattern) {
            let pos1Val = boxes[partten[0]].innerText;
            let pos2Val = boxes[partten[1]].innerText;
            let pos3Val = boxes[partten[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if(pos1Val === pos2Val && pos2Val === pos3Val) {
                    showWinner(pos1Val);
                }
            }
        }
    };

    newbtn.addEventListener("click", resetGame);
    resetBtn.addEventListener("click", resetGame);
