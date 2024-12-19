// 최근 본 상품을 저장하는 함수
function viewImage(imageElement) {
    const imageUrl = imageElement.src; // 이미지 URL 가져오기
    const detailUrl = imageElement.getAttribute('data-url'); // 상세 페이지 URL 가져오기
    const viewedImages = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

    // 중복 방지: 이미 본 이미지라면 제거
    const filteredImages = viewedImages.filter(img => img.imageUrl !== imageUrl);

    // 새 이미지 추가
    filteredImages.unshift({ imageUrl, detailUrl });

    // 최대 5개만 저장
    const limitedImages = filteredImages.slice(0, 5);

    // 로컬 스토리지에 저장
    localStorage.setItem('recentlyViewed', JSON.stringify(limitedImages));

    // 사이드바 업데이트
    updateSidebar();

    // 상세 페이지로 이동
    window.location.href = detailUrl;
}

// 사이드바에 최근 본 상품 표시
function updateSidebar() {
    const viewedImages = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    const recentlyViewedDiv = document.getElementById('recently-viewed');
    recentlyViewedDiv.innerHTML = ''; // 기존 내용 초기화

    viewedImages.forEach(({ imageUrl, detailUrl }) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.style.width = '100px';
        img.style.height = 'auto';
        img.style.margin = '5px';
        img.onclick = () => window.location.href = detailUrl;
        recentlyViewedDiv.appendChild(img);
    });
}

// 페이지 로드 시 사이드바 초기화
document.addEventListener('DOMContentLoaded', updateSidebar);