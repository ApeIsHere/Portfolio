const contacts = () => {
  const contactBtns = document.querySelectorAll("[data-contact]"),
    tooltips = document.querySelectorAll(".tooltip");

  const email = "vladimir.volkov.mg@gmail.com";
  const phone = "+79034401397";

  // copy value + set tooltip text
  contactBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      switch (btn.dataset.contact) {
        case "email":
          copyValue(email);
          break;
        case "phone":
          copyValue(phone);
          break;
      }
      tooltips[i].innerHTML =
        `${btn.dataset.contact.charAt(0).toUpperCase() + btn.dataset.contact.slice(1)} Copied`;
    });
  });

  // reset tooltip text
  contactBtns.forEach((btn, i) => {
    btn.addEventListener("mouseout", () => {
      tooltips[i].innerHTML =
        `Copy ${btn.dataset.contact.charAt(0).toUpperCase() + btn.dataset.contact.slice(1)}`;
    });
  });

  const copyValue = (value) => {
    navigator.clipboard.writeText(value);
  };
};

export default contacts;
