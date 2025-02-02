export function Container({ keyText, extraClass, children }) {
  return (
    <div key={keyText} className={`min-h-screen relative p-10 ${extraClass}`}>
      {children}
    </div>
  );
}
