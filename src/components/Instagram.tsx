import Script from "next/script";

export default function Instagram() {
  return (
    <section className="relative py-8 px-6 md:px-11 lg:px-17 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/ctabg.jpg)' }}
      />
      {/* Overlay with low transparency */}
      <div className="absolute inset-0 bg-[#3C1E03] opacity-60" />
      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto">
        <div className="elfsight-app-25124054-4981-4545-806b-2fd1738a6456" data-elfsight-app-lazy></div>
      </div>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
    </section>
  );
}
