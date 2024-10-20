const specificIds = ['terms', 'terms-content', 'val', 'val-content', 'encap', 'encap-content', 'access', 'access-content', 'cons', 'cons-content', 'prop', 'prop-content'];
document.getElementById('search').addEventListener('keyup', function() {
    const query = this.value.toLowerCase();

    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const itemId = item.id;
        const itemText = item.textContent.toLowerCase();

        const matches = specificIds.some(id => id.toLowerCase().includes(query) && itemId === id);
        item.style.display = matches || itemText.includes(query) ? '' : 'none';
    });
});

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function() {
        const targetId = item.id;
        if (targetId) {
            window.location.href = `#${targetId}`;
        }
    });
});
