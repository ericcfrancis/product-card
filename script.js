
document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
          const icon = btn.querySelector('i');
          icon.classList.add('cart-animate');
          alert('Added to cart!')
          setTimeout(() => icon.classList.remove('cart-animate'), 300);
        });
      });
    
      
      document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          btn.classList.toggle('liked');
          const icon = btn.querySelector('i');
    
          if (btn.classList.contains('liked')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
          } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
          }
        });
      });
});