'use strict';

class PreventDragClick {
    constructor(elem) {
        this.mouseMoved = true;
        let clickStartX;
        let clickStartY;
        let clickStartTime;
        elem.addEventListener("mousedown", (e) => {
            clickStartX = e.clientX;
            clickStartY = e.clientY;
            clickStartTime = Date.now();
        });
        elem.addEventListener("mouseup", (e) => {
            const xGap = Math.abs(e.clientX - clickStartX);
            const yGap = Math.abs(e.clientY - clickStartY);
            const timeGap = Date.now() - clickStartTime;
            if (xGap > 5 || yGap > 5 || timeGap > 500) {
                this.mouseMoved = true;
            }
            else {
                this.mouseMoved = false;
            }
        });
    }
}

function shuffleArray(arr) {
    const arrLength = arr.length;
    const result = [];
    const randomNums = [];
    for (const item of arr) {
        let randomNum = Math.floor(Math.random() * arrLength);
        while (randomNums.includes(randomNum)) {
            randomNum = Math.floor(Math.random() * arrLength);
        }
        result.push(arr[randomNum]);
        randomNums.push(randomNum);
    }
    return result;
}

exports.PreventDragClick = PreventDragClick;
exports.shuffleArray = shuffleArray;
