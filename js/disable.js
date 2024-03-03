export function disablefoo() {
    const a = document.querySelectorAll("a");
    a.forEach((item) => {
      item.href = "javascript:void(0)";
      item.style.pointerEvents = "none";
    });
  }