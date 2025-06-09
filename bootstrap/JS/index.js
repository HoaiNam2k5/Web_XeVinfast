const track = document.querySelector('.slide-track');
const slides = Array.from(track.children);
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const indicators = document.getElementById('indicators');
let index = 0;

// Tạo chấm chỉ báo tương ứng số slide
slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => {
        index = i;
        update();
    });
    indicators.appendChild(dot);
});

function update() {
    track.style.transform = `translateX(${-index * 100}%)`;
    document.querySelectorAll('.indicators button').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    update();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
});
function closeTooltip() {
    const bubble = document.getElementById('bubbleTooltip');
    if (bubble) {
        bubble.style.display = 'none';
    }
}
// Thiết lập chấm đầu tiên active khi tải trang
update();