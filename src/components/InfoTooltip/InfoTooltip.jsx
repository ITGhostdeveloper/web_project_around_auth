import confirmation from "../../images/check.png";

function InfoTooltip(props) {
  const { title, children, onClose } = props;
  return (
    <dialog className="confirmation-box">
      <div
        className={`confirmation-box__container ${
          !title ? "confirmation__image-container" : ""
        }`}
      >
        <button className="close" onClick={onClose}>
          x
        </button>
        <div>
          <img src={confirmation} alt="Check" className="confirmation__image" />
        </div>
        {title && <h3 className="confirmation-box__text">{title}</h3>}
        {children}
      </div>
    </dialog>
  );
}

export default InfoTooltip;
