function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
          We build beautiful and effective web solutions that will help you grow your business.
        </h2>
      </div>
    </section>
  );
}

export default Hero;
