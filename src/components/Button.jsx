import PropTypes from "prop-types"; // Import PropTypes

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

// Add prop types validation
Button.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rightIcon: PropTypes.node, // Assuming rightIcon can be a React node
  leftIcon: PropTypes.node, // Assuming leftIcon can be a React node
  containerClass: PropTypes.string,
};

export default Button;
