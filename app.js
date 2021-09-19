document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const tilly =document.createElement('div')

    function createTilly() {
        grid.appendChild(tilly)
        tilly.classList.add('tilly')
        tilly.style.left = tillyLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }
    createTilly()
})