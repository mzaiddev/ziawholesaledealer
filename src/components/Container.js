// Centered, max-width content wrapper used across every page.
// Mirrors the original `max-w-max-width mx-auto` + responsive gutters.
export default function Container({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag
      className={`w-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}