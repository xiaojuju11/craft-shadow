(function(win,doc){
    const width = window.innerWidth
    const docEL = doc.documentElement

    docEL.style.fontSize = width / 23.4375 + 'px'
    win.addEventListener('resize', () => {
        const newWidth = win.innerWidth
        docEL.style.fontSize = newWidth / 23.4375 + 'px'
    })

    doc.body.style.fontSize = '16px' //body字体大小为16px

})(window, document)