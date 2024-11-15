document.querySelector('.button').addEventListener('click', function() {
    document.querySelector('.contactContent').classList.add('hidden');
    document.querySelector('.contactContent').classList.remove('visible');
    document.querySelector('.closedWindowContent').classList.add('visible');
    document.querySelector('.closedWindowContent').classList.remove('hidden');
});

document.querySelector('.openWindow').addEventListener('click', function() {
    document.querySelector('.contactContent').classList.add('visible');
    document.querySelector('.contactContent').classList.remove('hidden');
    document.querySelector('.closedWindowContent').classList.add('hidden');
    document.querySelector('.closedWindowContent').classList.remove('visible');
});

document.querySelector('.closeButton').addEventListener('click', function() {
    document.querySelector('.contactContent').classList.add('visible');
    document.querySelector('.contactContent').classList.remove('hidden');
    document.querySelector('.closedWindowContent').classList.add('hidden');
    document.querySelector('.closedWindowContent').classList.remove('visible');
});