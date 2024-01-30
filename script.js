function showDetails() {
    const items = document.querySelectorAll('.js-faq-items')
    const hideItems = document.querySelectorAll('.js-faq-items p')
    function activeClass(item, index) {
        item.classList.toggle('ativo')
        hideItems[index].classList.toggle('ativo')
    }


    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeClass(item, index)
        })
    })
}

showDetails()