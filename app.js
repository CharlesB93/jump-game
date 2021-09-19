document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const tilly = document.createElement('div')
    let tillyLeftSpace = 50
    let startPoint = 150
    let tillyBottomSpace = startPoint
    let isGameOver = false
    let platformCount = 5
    let platforms = []
   

    class Platform {
        constructor(newPlatBottom) {
        this.bottom = newPlatBottom
        this.left = Math.random() * 315
        this.visual = document.createElement('div')

        const visual = this.visual
        visual.classList.add('platform')
        visual.style.left = this.left + 'px'
        visual.style.bottom = this.bottom + 'px'
        grid.appendChild(visual)
    }
    }

    function createPlatforms() {
        for (let i =0; i < platformCount; i++) {
            let platGap = 600 / platformCount
            let newPlatBottom = 100 + i * platGap
            let newPlatform = new Platform (newPlatBottom)
            platforms.push(newPlatform)
        }
    }
    function createTilly() {
            grid.appendChild(tilly)
            tilly.classList.add('tilly')
            tilly.style.left = tillyLeftSpace + 'px'
            tilly.style.bottom = tillyBottomSpace + 'px'
        
    }

    function start() {
    if (!isGameOver) {
        createTilly()
        createPlatforms()
    }
 }
start()
})