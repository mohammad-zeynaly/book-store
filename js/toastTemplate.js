// sweetAlert in toast config
export const toastTemplate = Swal.mixin({
  toast: true,
  position: "top-end",
  timer: 3500,
  timerProgressBar: true,
  showConfirmButton: false,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer),
      toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
