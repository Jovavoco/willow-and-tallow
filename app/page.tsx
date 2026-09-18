import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Whipped Tallow Balm",
    subtitle: "Deep nourishment",
  },
  {
    name: "Botanical Tallow Cream",
    subtitle: "Daily moisture",
  },
  {
    name: "Tallow Lip Balm",
    subtitle: "Everyday protection",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#F5F0E7] text-[#343A31]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative min-h-[92vh] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F7F1E7]/10" />

        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-[#F5F0E7]/40 to-[#F5F0E7]" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-[1600px] flex-col items-center justify-center px-5 pb-24 pt-28 text-center sm:px-6 md:pb-28 md:pt-32">
          {/* LARGE LOGO */}
          <div className="relative h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[390px] xl:h-[420px]">
            <Image
              src="/willow-tallow-logo.PNG"
              alt="Willow & Tallow"
              fill
              priority
              sizes="100vw"
              className="
                object-contain
                scale-[1.55]
                sm:scale-[1.75]
                md:scale-[2]
                lg:scale-[2.25]
                xl:scale-[2.5]
                2xl:scale-[2.65]
              "
            />
          </div>

          <p className="relative z-20 mt-1 font-serif text-xl italic tracking-[0.025em] text-[#69715F] sm:text-2xl md:text-[1.8rem]">
            Rooted in Nature. Crafted with Tallow.
          </p>

          <p className="relative z-20 mx-auto mt-6 max-w-2xl text-[16px] leading-7 text-[#5E6556] sm:text-[17px] sm:leading-8 md:text-lg">
            Simple, nourishing skincare made with thoughtfully selected
            ingredients and a slower approach to everyday care.
          </p>

          <Link
            href="/shop"
            className="
              group
              relative
              z-20
              mt-9
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#69715F]/60
              bg-[#F7F1E7]/50
              px-7
              py-3.5
              text-[10px]
              uppercase
              tracking-[0.28em]
              text-[#46503F]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#E9E3D8]/80
            "
          >
            Discover the Collection

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-[#F5F0E7] px-5 pb-28 pt-16 md:px-10 md:pb-36 md:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#B9B8A8]/70 bg-[#EEE8DE]/70 px-5 py-2 text-[9px] uppercase tracking-[0.36em] text-[#7A806E]">
            Thoughtful by nature
          </span>

          <h2 className="mx-auto mt-7 max-w-3xl font-serif text-4xl leading-[1.12] text-[#363C33] md:text-5xl lg:text-[3.4rem]">
            A return to simpler skincare.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-8 text-[#6A7064] md:text-lg">
            Inspired by traditional ingredients and everyday rituals, Willow &
            Tallow creates nourishing skincare designed to feel uncomplicated,
            comforting, and intentional.
          </p>

          <div className="mx-auto mt-11 h-px w-14 bg-[#A8AA99]" />
        </div>
      </section>

      {/* =========================================================
          FEATURED PRODUCT
      ========================================================= */}
      <section className="bg-[#E9E1D5] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[36px] border border-[#D1C8BA] bg-[#F1EBE2] shadow-[0_18px_60px_rgba(71,64,53,0.07)] lg:grid-cols-[1.08fr_0.92fr]">
            {/* IMAGE */}
            <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[650px]">
              <Image
                src="/tallow-balm-featured.png"
                alt="Willow & Tallow Tallow Balm"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.025]"
              />
            </div>

            {/* CONTENT */}
            <div className="flex items-center px-7 py-12 sm:px-10 md:px-14 lg:px-16">
              <div className="max-w-xl">
                <span className="inline-flex rounded-full border border-[#B8B3A6] bg-[#F7F2EA]/70 px-4 py-2 text-[9px] uppercase tracking-[0.32em] text-[#7D826F]">
                  Featured Product
                </span>

                <h2 className="mt-7 font-serif text-5xl leading-[1.02] tracking-[-0.03em] text-[#353B32] md:text-6xl">
                  Tallow Balm
                </h2>

                <p className="mt-4 font-serif text-xl italic text-[#747B68]">
                  Nourish · Protect · Restore
                </p>

                <p className="mt-7 text-[17px] leading-8 text-[#62685D]">
                  A deeply nourishing balm made for skin that needs simple,
                  comforting moisture. Its rich texture melts into the skin,
                  leaving it feeling soft, supple, and cared for.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-[20px] border border-[#D3CBC0] bg-[#F8F3EB]/65 p-5">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#8B8E7F]">
                      Texture
                    </p>

                    <p className="mt-2 font-serif text-lg text-[#4F574B]">
                      Rich & creamy
                    </p>
                  </div>

                  <div className="rounded-[20px] border border-[#D3CBC0] bg-[#F8F3EB]/65 p-5">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#8B8E7F]">
                      Best for
                    </p>

                    <p className="mt-2 font-serif text-lg text-[#4F574B]">
                      Everyday nourishment
                    </p>
                  </div>
                </div>

                <Link
                  href="/shop"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#505A4A] px-7 py-4 text-[10px] uppercase tracking-[0.25em] text-[#F7F2EA] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#414A3C]"
                >
                  Discover Tallow Balm

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}
      <section className="bg-[#F5F0E7] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <div className="flex min-h-[430px] items-center justify-center rounded-[34px] border border-[#D7D0C4] bg-[#EEE8DE] px-8 py-16 text-center">
            <div className="max-w-md">
              <span className="inline-flex rounded-full border border-[#C8C3B6] bg-[#F5F0E7]/60 px-4 py-2 text-[9px] uppercase tracking-[0.34em] text-[#838878]">
                Our Philosophy
              </span>

              <h2 className="mt-7 font-serif text-4xl leading-[1.12] text-[#3B4137] md:text-5xl">
                Fewer ingredients.
                <br />
                More intention.
              </h2>
            </div>
          </div>

          <div className="flex min-h-[430px] items-center rounded-[34px] border border-[#D7D0C4] bg-[#E8E1D6] px-8 py-16 md:px-14 lg:px-16">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full border border-[#C5BFB2] bg-[#F5F0E7]/50 px-4 py-2 text-[9px] uppercase tracking-[0.34em] text-[#7C816F]">
                Thoughtfully made
              </span>

              <p className="mt-7 font-serif text-2xl leading-relaxed text-[#454C40] md:text-3xl">
                We believe skincare should feel simple, familiar, and
                beautifully uncomplicated.
              </p>

              <p className="mt-6 text-[17px] leading-8 text-[#666C60]">
                Our approach is rooted in traditional ingredients, gentle
                rituals, and choosing only what serves a purpose. Nothing
                excessive. Nothing added just for the sake of more.
              </p>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-[#68705E] px-6 py-3 text-[10px] uppercase tracking-[0.24em] text-[#4C5547] transition hover:bg-[#F5F0E7]/70"
              >
                Discover Our Approach
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COLLECTION
      ========================================================= */}
      <section className="bg-[#EEE8DE] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-[#C7C2B6] bg-[#F5F0E7]/60 px-5 py-2 text-[9px] uppercase tracking-[0.36em] text-[#7C8270]">
              The Collection
            </span>

            <h2 className="mt-7 font-serif text-4xl leading-tight text-[#363C33] md:text-5xl">
              Everyday essentials, made simply.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-7 text-[#6B7065]">
              Nourishing products designed to bring a little more ease to your
              everyday routine.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group rounded-[30px] border border-[#D5CEC2] bg-[#F5F0E7] p-3 shadow-[0_12px_40px_rgba(70,64,55,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(70,64,55,0.08)]"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[24px] bg-[#E5DED2]" />

                <div className="px-4 pb-6 pt-6 text-center">
                  <p className="text-[9px] uppercase tracking-[0.28em] text-[#888C7C]">
                    {product.subtitle}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl text-[#394036]">
                    {product.name}
                  </h3>

                  <Link
                    href="/shop"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#777E6D]/70 px-5 py-2.5 text-[9px] uppercase tracking-[0.24em] text-[#50594A] transition hover:bg-[#E9E3D8]"
                  >
                    Shop Product
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 rounded-full bg-[#596251] px-8 py-4 text-[10px] uppercase tracking-[0.27em] text-[#F7F2EA] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#485143]"
            >
              View the Full Collection
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOTANICAL STORY
      ========================================================= */}
      <section className="bg-[#F5F0E7] px-5 py-20 md:px-10 md:py-28">
        <div
          className="relative mx-auto min-h-[620px] max-w-7xl overflow-hidden rounded-[38px] bg-cover bg-center bg-no-repeat shadow-[0_20px_60px_rgba(65,59,50,0.08)]"
          style={{
            backgroundImage: "url('/willow-background.png')",
          }}
        >
          <div className="absolute inset-0 bg-[#F4EEE4]/5" />

          <div className="relative z-10 flex min-h-[620px] items-end p-5 sm:p-8 md:p-12">
            <div className="max-w-xl rounded-[28px] border border-white/30 bg-[#F4EFE6]/85 p-8 shadow-[0_15px_45px_rgba(60,55,48,0.08)] backdrop-blur-md md:p-11">
              <span className="inline-flex rounded-full border border-[#BFC0B0] bg-[#F7F2EA]/50 px-4 py-2 text-[9px] uppercase tracking-[0.34em] text-[#757C69]">
                Our Ritual
              </span>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#353C32] md:text-5xl">
                Care that feels a little slower.
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-[#676D61]">
                Thoughtful ingredients, comforting textures, and products
                designed to make everyday skincare feel like a moment worth
                slowing down for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="bg-[#ECE6DC] px-5 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[28px] border border-[#D2CBC0] bg-[#F5F0E7]/65 px-8 py-10 text-center">
              <div className="mx-auto mb-6 h-1.5 w-1.5 rounded-full bg-[#727866]" />

              <h3 className="font-serif text-2xl text-[#3A4036]">
                Simple
              </h3>

              <p className="mt-4 leading-7 text-[#6A7064]">
                Purposeful ingredients without unnecessary complexity.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#D2CBC0] bg-[#F5F0E7]/65 px-8 py-10 text-center">
              <div className="mx-auto mb-6 h-1.5 w-1.5 rounded-full bg-[#727866]" />

              <h3 className="font-serif text-2xl text-[#3A4036]">
                Natural
              </h3>

              <p className="mt-4 leading-7 text-[#6A7064]">
                Inspired by traditional ingredients and botanical care.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#D2CBC0] bg-[#F5F0E7]/65 px-8 py-10 text-center">
              <div className="mx-auto mb-6 h-1.5 w-1.5 rounded-full bg-[#727866]" />

              <h3 className="font-serif text-2xl text-[#3A4036]">
                Intentional
              </h3>

              <p className="mt-4 leading-7 text-[#6A7064]">
                Thoughtfully created for everyday rituals and lasting use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#F5F0E7] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl rounded-[38px] border border-[#D5CEC2] bg-[#EEE8DE] px-7 py-20 text-center shadow-[0_15px_50px_rgba(65,60,50,0.05)] md:px-12 md:py-24">
          <span className="inline-flex rounded-full border border-[#C6C1B4] bg-[#F5F0E7]/60 px-5 py-2 text-[9px] uppercase tracking-[0.36em] text-[#7B816E]">
            Willow & Tallow
          </span>

          <h2 className="mx-auto mt-7 max-w-3xl font-serif text-4xl leading-tight text-[#363C33] md:text-6xl">
            Made for the moments you slow down.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-8 text-[#686E62] md:text-lg">
            Thoughtful skincare inspired by simple ingredients, traditional
            care, and the beauty of everyday rituals.
          </p>

          <Link
            href="/shop"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#56604E] px-8 py-4 text-[10px] uppercase tracking-[0.27em] text-[#F7F2EA] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#454E40]"
          >
            Shop Willow & Tallow
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}