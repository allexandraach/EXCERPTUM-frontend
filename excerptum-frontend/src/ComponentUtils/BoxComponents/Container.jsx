export function Container({ keyText, extraClass, children }) {
  return (
    <div key={keyText} className={`sm:px-10 md:px-32 pb-40 ${extraClass}`}>
      {children}
    </div>
  );
}
