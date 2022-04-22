"@/styles/Cofee.module.css";

export default function Cofee() {
  return (
    <a
      className="buyButton"
      target="_blank"
      href="https://www.buymeacoffee.com/fefferico8X"
    >
      <img
        className="coffeeImage"
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <span className="coffeeButtonText">Support me with a Beer :) </span>
    </a>
  );
}
