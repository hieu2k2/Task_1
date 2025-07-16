document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                document.querySelectorAll('.loading').forEach(el => {
                    el.classList.add('loaded');
                });
            }, 300);
        });

        // Change main image
        function changeMainImage(thumbnail) {
            const mainImage = document.getElementById('mainProductImage');
            mainImage.src = thumbnail.src.replace('w=200', 'w=1000');
            
            // Update active thumbnail
            document.querySelectorAll('.thumbnail-item').forEach(item => {
                item.classList.remove('active');
            });
            thumbnail.classList.add('active');
        }

        // Image modal
        document.getElementById('imageModal').addEventListener('show.bs.modal', function() {
            const modalImage = document.getElementById('modalImage');
            const mainImage = document.getElementById('mainProductImage');
            modalImage.src = mainImage.src;
        });

        // Buy now function
        function buyNow() {
            if (confirm('Bạn có chắc chắn muốn mua sản phẩm này không?')) {
                showToast('Đang chuyển hướng đến trang thanh toán...', 'success');
            }
        }

        // Contact seller
       function contactSeller() {
    // Hiển thị thông báo
    showToast('Đang chuyển hướng thanh toán...', 'info');

    // Đóng modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('specsModal'));
    modal.hide();

    setTimeout(() => {
        window.location.href = "very.html"; 
    }, 1500); 
}

        // Toast notification
        function showToast(message, type = 'info') {
            const toastContainer = document.createElement('div');
            toastContainer.className = 'position-fixed top-0 end-0 p-3';
            toastContainer.style.zIndex = '1100';
            
            const toast = document.createElement('div');
            toast.className = `toast show align-items-center text-white bg-${type === 'success' ? 'success' : type === 'info' ? 'info' : 'primary'} border-0`;
            toast.setAttribute('role', 'alert');
            
            toast.innerHTML = `
                <div class="d-flex">
                    <div class="toast-body">
                        <i class="bi bi-${type === 'success' ? 'check-circle' : 'info-circle'} me-2"></i>
                        ${message}
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                </div>
            `;
            
            toastContainer.appendChild(toast);
            document.body.appendChild(toastContainer);
            
            setTimeout(() => {
                toastContainer.remove();
            }, 3000);
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
       