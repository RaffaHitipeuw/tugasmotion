function ContentContainer({ children, className = '', isRelative = true }) {
  return (
    <main
      className={`${
        isRelative ? 'relative' : ''
      } w-[85%] xl:max-w-285 mx-auto max-md:items-center ${className}`}>
      {children}
    </main>
  );
}

export default ContentContainer;
