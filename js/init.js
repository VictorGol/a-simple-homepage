initSetting()

wrap.addEventListener('click', () => {
    box.focus()
})

wrap.onkeydown = (e) => {
    // console.log('e',e);
    if (e.code === 'ControlLeft') {
        changeCursorShow()
    }
    if (e.code === 'ControlRight') {
        layoutChange()
    }
    if (!box.value) return
    if (e.keyCode == 13) {
        jump()
    }
}

box.oninput = () => {
    if(!box.value){
        tip.innerHTML = ''
        return
    }
    if (box.value.match(/.*cl$/)) {
        box.value = ''
        tip.innerHTML = ' '
    }
    box.value && !/^_/.test(box.value) && baiduSuggestion(box.value)
}
