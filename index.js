let left = 0,
    num = document.getElementById("num"),
    color = document.getElementById("color"),
    box = document.getElementsByClassName("boxItem"),
    rangeBig = document.getElementById("RangeBig"),
    round = document.getElementById("Round"),
    img = document.getElementById("img")

function move() {
    setTimeout(function () {
        left++
        if (left > 100) left = 100
        num.innerHTML = `${left}%`
        // to-2
        if (left < 23) {
            rangeBig.style.left = `${left}%`
            color.style.backgroundImage = `linear-gradient(269.95deg, #DE1E3A -8.04%, #F393A1 101.05%);`
            color.style.width = `${left + 5}%`

            if (left > 10) {
                rangeBig.style.top = `1px`
            }
            if (left > 22) {
                rangeBig.style.left = `0.5px`
            }
        }
        // to-3
        else if (left < 47) {
            if (left < 40) { rangeBig.style.top = `0px` }

            rangeBig.style.left = `${left}%`
            color.style.width = `${left + 5}%`
            for (let i = 0; i < 2; i++) {
                box[i].style.backgroundColor = `#DE1E3A`
            }
        }
        // to-4
        else if (left < 70) {
            img.setAttribute("src", "img/2.svg")
            if (left < 57) rangeBig.style.top = `-0.5px`
            if (left < 65) rangeBig.style.top = `-1px`
            rangeBig.style.left = `${left}%`
            rangeBig.style.backgroundColor = `#FFB436`
            color.style.width = `${left + 5}%`
            color.style.backgroundImage = `linear-gradient(269.93deg, #FFB436 -7.99%, #F7798B 101.05%)`
            round.style.backgroundColor = `#F7798B`
            for (let i = 0; i < 3; i++) {
                box[i].style.backgroundColor = `#FFB436`
            }
        }
        // on-5
        else if (left < 95) {
            if (left < 76) rangeBig.style.top = `-2px`
            if (left < 80) rangeBig.style.top = `-2.7px`
            img.setAttribute("src", "img/3.svg")
            if (left < 90) {
                img.setAttribute("src", "img/4.svg")
            }
            for (let i = 0; i < 4; i++) {
                box[i].style.backgroundColor = `#00B533`
            }
            rangeBig.style.width = `14px`
            rangeBig.style.height = `14px`
            rangeBig.style.left = `${left}%`
            rangeBig.style.backgroundColor = `#00B533`
            color.style.width = `${left + 5}%`
            color.style.backgroundImage = `linear-gradient(269.89deg, #00B533 -7.92%, #51FFA1 101.05%)`
            round.style.backgroundColor = `#51FFA1`
            if (left < 90) {

            }
        } else {
            for (let i = 0; i < 5; i++) {
                box[i].style.backgroundColor = `#00B533`
            }
        }
        move()
    }, 100)
}
move()