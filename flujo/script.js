// ---------------------------------------------
// CONFIGURACIÓN PDF + PAN INERCIAL
// ---------------------------------------------

const url = 'flujo-limdo.pdf';
const canvas = document.getElementById('pdf-canvas');
const ctx = canvas.getContext('2d');

// Variables de estado para el pan inercial
let isPanning = false;
let startX, startY;
let translateX = 0, translateY = 0;
let velocityX = 0, velocityY = 0;
let lastX = 0, lastY = 0;
let rafId = null;

const friction = 0.94;
const sensitivity = 1.15;

// Cargar PDF
pdfjsLib.getDocument(url).promise.then(pdf => {
  pdf.getPage(1).then(page => {
    const viewport = page.getViewport({ scale: 1.2 });
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const renderContext = { canvasContext: ctx, viewport: viewport };
    page.render(renderContext).promise.then(() => {
      activarPanInercial(canvas);
    });
  });
});

// ---------------------------------------------
// FUNCIÓN DE ARRASTRE CON INERCIA
function activarPanInercial(element) {
  function updateTransform() {
    element.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }

  function animate() {
    translateX += velocityX;
    translateY += velocityY;
    velocityX *= friction;
    velocityY *= friction;

    // Limites del movimiento
    const maxX = 0;
    const minX = -(canvas.width - container.clientWidth);
    const maxY = 0;
    const minY = -(canvas.height - container.clientHeight) ;
    
    if (translateX > maxX) {
      translateX = maxX;
      velocityX = 0;
    } else if (translateX < minX) {
      translateX = minX;
      velocityX = 0;
    }
    
    if (translateY > maxY) {
      translateY = maxY;
      velocityY = 0;
    } else if (translateY < minY) {
      translateY = minY;
      velocityY = 0;
    }

    updateTransform();

    if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
      rafId = requestAnimationFrame(animate);
    } else {
      rafId = null;
    }
  }

  function startAnimation() {
    if (!rafId) {
      rafId = requestAnimationFrame(animate);
    }
  }

  element.addEventListener('mousedown', e => {
    isPanning = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    lastX = e.clientX;
    lastY = e.clientY;
    velocityX = velocityY = 0;
    
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    
    element.style.cursor = 'grabbing';
  });

window.addEventListener('mouseup', () => {
  if (isPanning) {
    isPanning = false;
    element.style.cursor = 'grab';
    
    // Asegurar que hay velocidad suficiente para la inercia
    if (Math.abs(velocityX) > 0.5 || Math.abs(velocityY) > 0.5) {
      startAnimation();
    } else {
      // Si la velocidad es muy baja, detener cualquier animación
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }
  }
});  window.addEventListener('mouseup', () => {
    if (isPanning) {
      isPanning = false;
      element.style.cursor = 'grab';
      startAnimation(); // Siempre inicia animación al soltar
    }
  });

 window.addEventListener('mousemove', e => {
  if (!isPanning) return;
  
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  
  translateX += dx * sensitivity;
  translateY += dy * sensitivity;
  
  // Aumentar ligeramente la velocidad para mejor inercia
  velocityX = dx * 0.8;  // Cambiado de 0.6 a 0.8
  velocityY = dy * 0.8;  // Cambiado de 0.6 a 0.8
  
  lastX = e.clientX;
  lastY = e.clientY;
  updateTransform();
});
  // Desactivar zoom con la rueda
  element.addEventListener('wheel', e => e.preventDefault(), { passive: false });

  // Movimiento inicial de demostración
  setTimeout(() => {
    velocityX = -2.5;
    velocityY = 1.5;
    startAnimation();
  }, 700);
}