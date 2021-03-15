const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    console.log("I am good")
    const triggerBotton = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBotton){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    })
}