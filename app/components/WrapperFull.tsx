// a react component that wraps content in a full width container
export function WrapperFull({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[url('/images/jazz.jpg')] bg-cover">
      <div className="flex h-full w-full flex-col items-center justify-center backdrop-blur-sm">{children}</div>
    </main>
  );
}
