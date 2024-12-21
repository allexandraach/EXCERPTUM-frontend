export function Container({ keyText, extraClass, children }) {
  return (
    <div key={keyText} className={`md:px-32 pt-10 sm:px-10 pb-40 ${extraClass}`}>
      {children}
    </div>
  );
}
