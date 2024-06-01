const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-screen-xl mx-auto w-full p-4 sm:p-6">
      {children}
    </section>
  );
};

export default Container;
