const LargeBtn = ({ title, style, href }) => {
  const classes = `${style} h-[55px] px-5 text-[14px] tracking-[2px] font-semibold font-sans uppercase transition-all duration-300 flex items-center justify-center cursor-pointer`;

  if (href) {
    return (
      <a
        href={href}
        download
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {title}
      </a>
    );
  }

  return <button className={classes}>{title}</button>;
};

export default LargeBtn;
