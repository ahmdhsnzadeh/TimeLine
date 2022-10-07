let _text = document.querySelectorAll('.text-box')
let arr = []
for(i=0; i<_text.length; i++){
    arr.push(_text[i].offsetTop)
}

console.log(arr)

function para(){
    let _st = document.getElementsByTagName('html')[0].scrollTop
    console.log(_st)
    for(let i=0; i<_text.length; i++) {
        if(_st >= (arr[i])){
            document.querySelectorAll('.text-box')[i].classList.add('active')
        }
        else{
            document.querySelectorAll('.text-box')[i].classList.remove('active')
        }
    }
}
window.addEventListener('scroll', para)