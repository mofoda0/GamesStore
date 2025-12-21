document.querySelectorAll('.Games').forEach(card => {

    const name = card.querySelector('.card-name span')?.innerText.trim();

    const priceText = card.querySelector('.price-badge')?.innerText.trim();
    const price = priceText === "FREE" ? "0" : priceText.replace('$', '');

    const image = card.querySelector('img.thumb')?.src;

    card.querySelectorAll('a[href="purchase.html"]').forEach(link => {
        link.addEventListener('click', () => {
            const game = {
                name: name,
                price: price,
                image: image
            };

            localStorage.setItem('selectedGame', JSON.stringify(game));
        });
    });

});

document.querySelectorAll('.viewAllBtn').forEach(btn => {

    btn.addEventListener('click', () => {

        const gamesContainer = btn.closest('.Type_games')
                                .nextElementSibling;

        const isViewAll = gamesContainer.classList.toggle('view-all');

        btn.textContent = isViewAll ? 'View Less' : 'View All';
    });

});