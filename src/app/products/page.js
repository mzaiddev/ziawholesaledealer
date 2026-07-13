import MaterialIcon from "../../components/MaterialIcon";

export default function Products() {
  return (
    <>
      {/* =========== MOBILE =========== */}
      <main className="md:hidden bg-background text-on-background font-body-md">
        {/* Hero */}
        <header className="relative w-full h-[400px] bg-inverse-surface overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="w-full h-full" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDD5juLgeThrdoS-ZjYgV0DAlISi4k80z79ejizf9m4wyUtftsB2fdpINHuL_Aiy4uW_Q17kcvEnLLuJ3hmp_d3zijuY28jNCYIHSKCoCEbSKsw0XO8hTw6ofJNh_Md4jlVWIVvKqB7M1_b4S6TuZzLRGerD-VYuUuEA_IM9rWf63ukUI8DECqPfyehw-NcMmgVqJ_4U3l5hYfbl3AAfMlZi42d5a6GjCKYwjZlG1YDgVBgExGE1-Pk2w')" }} />
          </div>
          <div className="relative z-20 px-margin-mobile w-full">
            <span className="inline-block bg-primary-container text-white px-3 py-1 font-label-bold text-[10px] tracking-widest uppercase mb-4">Established 1996</span>
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-white mb-4">PREMIUM LAPTOP CATALOG</h1>
            <p className="text-surface-variant font-body-md max-w-xs">Direct UK imported inventory for retail partners and bulk buyers.</p>
          </div>
        </header>

        {/* Filter Bar */}
        <div className="sticky top-20 z-40 bg-white border-b border-outline-variant px-margin-mobile py-4 shadow-sm">
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            <button className="flex-shrink-0 flex items-center gap-2 border border-outline px-4 py-2 rounded-lg font-label-bold text-label-bold bg-surface-container-lowest text-on-surface">
              <MaterialIcon name="tune" className="text-[18px]" />
              FILTERS
            </button>
            <div className="flex-shrink-0 flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant">
              <span className="font-label-bold text-label-bold text-on-surface-variant">Core i7</span>
              <MaterialIcon name="close" className="text-[16px] text-primary" />
            </div>
            <div className="flex-shrink-0 flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant">
              <span className="font-label-bold text-label-bold text-on-surface-variant">Dell</span>
              <MaterialIcon name="close" className="text-[16px] text-primary" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="px-margin-mobile py-8 bg-background">
          <div className="flex justify-between items-center mb-6">
            <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Showing 24 Results</span>
            <div className="flex items-center gap-1 text-primary">
              <MaterialIcon name="sort" className="text-[20px]" />
              <span className="font-label-bold text-label-bold">SORT</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              ["Dell Latitude 7490", "Intel Core i7 8th Gen", "16GB RAM", "512GB SSD", "https://lh3.googleusercontent.com/aida-public/AB6AXuD1w414aGbrM3P0uuB7Xz-ne-nZXNGb6sxc6QT2gKcSsfM8Qu7iaLUV4rmCe-7GJMPPv-tcrGiDwgBb6mHRT4RGmaNgRVCC6Fz_KXakLEdx6IgYYtW4MjGMcZCVxGMhcJJm6fEV3zjkTDL_yENrUQ3rwjPJPwU2BROoSQpWI7-xGTRwH5YvlCcXtDeFGJgx9g7nMbIJJflzJ1SXRKxJkxVy10n0xbDnrbrcHb51I5PkJPF0HMPoeMwwBw"],
              ["HP EliteBook 840 G5", "Intel Core i5 8th Gen", "8GB RAM", "256GB SSD", "https://lh3.googleusercontent.com/aida-public/AB6AXuA3FG4SM3bKYUaExXMk8Qj6rZ2ssr-PdyEfm2csklAZspMc0lAaOgQwqFYxpURGCPFcc37KGA5vwC5gBFANz-qmB6v0ORZszaaxxvtOUtx_3gvyt5ETQ6PiZ2fYt5YKC5GOZOYvaZIr6Oze3NNYdOC65V9ToFsF6IRHmMTfc-VrikdFD9W6jYDqhlmErOiiY0ACth9xl9YOCiCTDM6hrkpwkXMhvO-qHpDjQEtVTvJKewdEXzSsT9DWqQ"],
              ["Lenovo ThinkPad T480", "Intel Core i7 8th Gen", "16GB RAM", "512GB SSD", "https://lh3.googleusercontent.com/aida-public/AB6AXuCK87mupjJF-aTO0SkOxpBrfMrAiZ5v9ct3RPe9vELU3gc_QL7aQxkzmJ08eztGZ7PC7TKHq0lcTbyPQi-I2H7alMJLo0OqiHKv2_wZJfZNIzZNVI-rgAxWdMPb6GLcvZo6qNdqkYTUXZbz2Pv-1b3irFYaGWAwMnuxRDHRhh_OhcoquKFEturzFpRzhje_b4UMjaAHV2VsoW8bBPWIU9hRiVWs4BMIBZ2-9IrmGygLFaVatJNWFjxeRw"],
            ].map(([name, cpu, ram, storage, img]) => (
              <div key={name} className="bg-white border border-outline-variant group hover:border-primary transition-all duration-300">
                <div className="relative w-full aspect-square bg-surface-container-lowest flex items-center justify-center p-8">
                  <img className="max-w-full h-auto object-contain" src={img} />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-surface-container-high text-primary font-label-bold text-[10px] px-2 py-1 border border-outline-variant uppercase">UK Imported</span>
                    <span className="bg-primary-fixed text-on-primary-fixed font-label-bold text-[10px] px-2 py-1 uppercase">Wholesale Only</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">{name}</h3>
                    <MaterialIcon name="favorite" className="text-outline" />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-[12px] font-label-bold text-on-surface-variant bg-surface-container-low px-2 py-1">{cpu}</span>
                    <span className="text-[12px] font-label-bold text-on-surface-variant bg-surface-container-low px-2 py-1">{ram}</span>
                    <span className="text-[12px] font-label-bold text-on-surface-variant bg-surface-container-low px-2 py-1">{storage}</span>
                  </div>
                  <button className="w-full sharp-gradient-btn text-white py-4 font-label-bold text-label-bold tracking-widest shadow-lg">
                    CONTACT FOR WHOLESALE PRICE
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="mt-12 flex justify-center items-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center border border-outline text-outline"><MaterialIcon name="chevron_left" /></button>
            <span className="font-label-bold text-label-bold text-on-surface">1 / 12</span>
            <button className="w-12 h-12 flex items-center justify-center border border-primary text-primary"><MaterialIcon name="chevron_right" /></button>
          </div>
        </div>
      </main>

      {/* =========== DESKTOP =========== */}
      <div className="hidden md:block">
        {/* Hero */}
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwhoDn2jUR6fjlbxHFms9KjITO_yUfteZ0AqF8WhTo6SrseNmCICMF8NSk9Jj27Li_lilldELdLApim9T6o_VgP7uCnM3wVeaf9I934Ue7FPW0zWfDhrpOblXMgjebx2MD3CvKcViJjLetnCoZBNEAm9w778y7KN_2hw-r8okgZ6lIxU-BHMK6P3WoSx75v0MIEepEYE8IHp2zW--QFUDxIgnr9pouzAoTWLqmO-_nWNWKBXddojdyOA')" }} />
          <div className="absolute inset-0 z-10 bg-black/70" />
          <div className="relative z-20 w-full max-w-max-width mx-auto px-4 md:px-margin-desktop text-white">
            <div className="max-w-2xl border-l-4 border-primary-container pl-8">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 uppercase">Wholesale Laptop Catalog</h1>
              <p className="font-body-lg text-body-lg text-surface-variant mb-8 opacity-90">Explore our extensive inventory of high-performance business and gaming laptops imported from the UK. Tested, certified, and ready for global distribution.</p>
              <div className="flex gap-4">
                <button className="sharp-gradient-btn px-8 py-4 text-white font-label-bold text-label-bold uppercase shadow-lg">View Inventory</button>
                <button className="border border-white text-white px-8 py-4 font-label-bold text-label-bold uppercase hover:bg-white hover:text-on-background transition-all">Download Catalog</button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Grid */}
        <section className="py-20 bg-surface">
          <div className="max-w-max-width mx-auto px-4 md:px-margin-desktop">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-label-bold text-label-bold uppercase tracking-widest block mb-2">Inventory Segments</span>
                <h2 className="font-headline-md text-headline-md uppercase">Shop by Brand</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              {[
                ["Dell Latitude", "BUSINESS CLASS", "https://lh3.googleusercontent.com/aida-public/AB6AXuDR5p2y8JuEtOdb6NyfUraNGo9gjcqEMFPKC3TVBTFuj0NO1VfKTWvPfNZh6dRW2hYPfGAn4OFvlzGKAvTGt3oC8Xja6h1kE7kAGE7W676ekBH61IgcfdmRxN_Uzrv1HoCFlUTIxWI6TO6WPkZ_XJPCcUf5Fhs0FIgEkU0JNJB7CchrXPEpMc0K9Fs1FTNNEDQ7oFz3gF_9WQUgsDRLJr6G5OtkqpYe8qKMK7UcubRwCcZFX_s3qpylLg"],
                ["HP EliteBook", "PREMIUM EXECUTIVE", "https://lh3.googleusercontent.com/aida-public/AB6AXuD_i4CTHrCnaodPa_TI-2iIiJaDOeXvgoQgw2GNKfj4VrNzehIILSYIG0Ng2gjfQ-0gZ4H-Ibs80n_I_F2IB8Vrp-Qc6S0lRVaCE3qxBJtbRuHQCoxkkw23e-i_9IQJh0bmFSAnj8ACPrE1TeeeJ5PCpr3A2egXsKZXL5J902-10oEGQLd8ZR3hiotjACojLWRulKgnETDHKjI91iX2nGhSfhRxQJ_AHuCiqzPes8eWkbfqzivbAddW6g"],
                ["ThinkPad", "WORKSTATION", "https://lh3.googleusercontent.com/aida-public/AB6AXuBaKoOE8AztAK1_8CuWIC4sGZysU_2n03Evc0CAyGXuddKaU93naR5-AeJAA8Q52lQcu7xyn7XhWwPrnCQ13NQJZWZU8FGz-DEIw0apjW9Kxo6qPDLotwBp6zQktkQhGHR8caLSHDLQx2D_-JnM_QwwyUxD6L-UOe9r2Rm08njmljFAEVRz95HfXNrqZ2AsELPtt_jCBGjNMPMdQDg9xIqbZ8U4kiEkWgME485Eu3aGYrQY_pkWWr6Obw"],
                ["MacBook Pro", "CREATIVE POWER", "https://lh3.googleusercontent.com/aida-public/AB6AXuCa3_zSG1Bfp8UKUlZwaDB3ZeD_qjCZbaDFZinzGJv1e-W_TDgiIoTag8oPba-C-ksVKhI3067FAx-bwBYzhG4PAPhXJWdYkydBlvIiAe5EgMidfaK_GV3u6nYZ4Lci_TQA7mAg9-FkpeSfmMOKlHw8OZ2uSFwkCPjceob-4tfoG0M1nt15aj19LZEbWT4mjnERDFh7xhqN5w9kX9C0WPRPJH5sm4DgpjuiHtHeP660_1EUSP1h3Xbyjw"],
              ].map(([name, tag, img]) => (
                <div key={name} className="group relative category-card border border-outline-variant bg-white overflow-hidden cursor-pointer hover:border-primary transition-all">
                  <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${img}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white font-headline-sm text-headline-sm uppercase">{name}</h3>
                    <p className="text-primary-fixed font-label-bold text-label-bold mt-1">{tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters & Catalog */}
        <section className="py-16 bg-white border-t border-outline-variant">
          <div className="max-w-max-width mx-auto px-4 md:px-margin-desktop">
            <div className="flex flex-col lg:flex-row gap-12">
              <aside className="w-full lg:w-64 space-y-8 shrink-0">
                <div>
                  <h4 className="font-label-bold text-label-bold uppercase border-b border-outline-variant pb-2 mb-4">Processor Filter</h4>
                  <div className="space-y-3">
                    {["Intel Core i9 / i7", "Intel Core i5", "Intel Core i3", "AMD Ryzen 9 / 7", "AMD Ryzen 5"].map((l) => (
                      <label key={l} className="flex items-center group cursor-pointer">
                        <input className="form-checkbox text-primary-container border-outline-variant rounded-sm focus:ring-primary-container" type="checkbox" />
                        <span className="ml-3 font-body-md text-on-surface-variant group-hover:text-primary transition-colors">{l}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-label-bold text-label-bold uppercase border-b border-outline-variant pb-2 mb-4">Memory (RAM)</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {["8GB", "16GB", "32GB", "64GB+"].map((r) => (
                      <button key={r} className="px-3 py-2 border border-outline-variant font-label-bold text-label-bold hover:border-primary hover:text-primary">{r}</button>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-surface-container-low border border-primary-container/20">
                  <p className="font-label-bold text-label-bold text-primary uppercase mb-2">Bulk Inquiries</p>
                  <p className="font-body-md text-on-surface-variant mb-4">Stock changes daily. Call for real-time inventory lists.</p>
                  <a className="font-headline-sm text-headline-sm text-on-surface hover:text-primary block" href="tel:+123456789">+92 3XX XXXXXXX</a>
                </div>
              </aside>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                  <h2 className="font-headline-sm text-headline-sm uppercase">Featured Inventory</h2>
                  <div className="flex gap-4 w-full sm:w-auto">
                    <div className="relative flex-grow">
                      <input className="w-full pl-10 pr-4 py-2 border border-outline-variant bg-surface focus:border-primary focus:ring-0 rounded-sm" placeholder="Search model..." type="text" />
                      <MaterialIcon name="search" className="absolute left-3 top-2.5 text-on-surface-variant" />
                    </div>
                    <select className="py-2 border border-outline-variant bg-surface focus:border-primary focus:ring-0 rounded-sm font-label-bold text-label-bold">
                      <option>LATEST ARRIVALS</option>
                      <option>LOWEST PRICE</option>
                      <option>HIGH PERFORMANCE</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {[
                    ["Dell", "Latitude 7420", "Core i7-1185G7", "16GB DDR4", "512GB NVMe SSD", "9/10 Mint", "UK IMPORTED", "GRADE A++", "https://lh3.googleusercontent.com/aida-public/AB6AXuC1tgucRm1UPBL1GobBYK_Ns39jSTmAA6Pz4P3dGLJ3vrAp838g44bIY2R-zl59ZDZ4L3aJydxVTbIwMrjxr7jmW6ELITAb0j6MkvjWcp1CS4Y3n3g6DUlCzr4XYbHGXagFZzcTX7d9bEu8ifDqdmx3EhEOaMzy9aEJxE2WOv8lilI8poIWCcz2HMfI8UmKatO2ygp81PhNK_J-nRRgzNrLwLRXgx6hw8kMEOHM55WFFu92bPdPa2GQAQ"],
                    ["HP", "EliteBook 840 G8", "Core i5-1145G7", "16GB DDR4", "256GB NVMe SSD", "Open Box", "UK IMPORTED", "PRE-OWNED", "https://lh3.googleusercontent.com/aida-public/AB6AXuD2-5XF9zf4-cPgXQdN0Oz2BUYaoY6J7G9Lf41Q8oUcsKdC9xn2FpkYZUQLM1mKXRAjYK-vzYbbpjCWNuu4VmdwBb49Gmwppc3IAsQVp4Q39g2l0rrGkfI3rdQX8WuP40IWXRQGU_xqrfhVTEypTDXYR1WTalHIYRwvqXsRhix8xzHaomMfRUqrX1yShLv38f12o_uNQel6Cay3C2eWou1e90vQDf_TG5KosR745iBWuOUNvhzWGeLmVA"],
                    ["Lenovo", "ThinkPad T14s", "Ryzen 7 Pro 5850U", "32GB LPDDR4x", "1TB Gen4 SSD", "Renewed Premium", "UK IMPORTED", "BEST SELLER", "https://lh3.googleusercontent.com/aida-public/AB6AXuBJcJDmhIsONHWqFO9fMDPw4ERdG_tjqYbwBWqBU5c26rX_iISY0vAiZgWoThjSMNld6XOvVXqQYO-Bb9FG7yACetlGj0sbphjUeF8WRtB6w0UXOHySTL5an0A_bZKnBwmlDdWZ1uEKxKI7N1ZEjVARRF35O3Vllc6z6yRRSpdBDBI5PHkMMmK_haH7vOppTORVqURtIGhBT-bD3yLiavYbj6aoLShX2pAdwWOfWWzp8W-IFpS046Qf8Q"],
                  ].map(([brand, model, cpu, ram, storage, cond, tag1, tag2, img]) => (
                    <div key={model} className="group border border-outline-variant bg-white product-card-hover transition-all duration-300">
                      <div className="relative h-48 bg-surface-container overflow-hidden">
                        <img className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500" src={img} />
                        <span className="absolute top-4 left-4 bg-primary-container text-white text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">{tag1}</span>
                        <span className="absolute top-4 right-4 bg-tertiary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-tighter">{tag2}</span>
                      </div>
                      <div className="p-6">
                        <p className="text-primary font-label-bold text-label-bold uppercase mb-1">{brand}</p>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">{model}</h3>
                        <div className="space-y-2 border-t border-outline-variant pt-4 mb-6">
                          {[["Processor", cpu], ["RAM", ram], ["Storage", storage], ["Condition", cond]].map(([k, v]) => (
                            <div key={k} className="flex justify-between">
                              <span className="text-on-surface-variant font-label-bold text-label-bold uppercase">{k}</span>
                              <span className="text-on-surface font-body-md">{v}</span>
                            </div>
                          ))}
                        </div>
                        <button className="w-full sharp-gradient-btn py-3 text-white font-label-bold text-label-bold uppercase shadow-lg">Contact for Wholesale Price</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:border-primary transition-colors"><MaterialIcon name="chevron_left" /></button>
                    <button className="w-10 h-10 flex items-center justify-center border border-primary bg-primary text-white font-label-bold text-label-bold">1</button>
                    <button className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:border-primary transition-colors font-label-bold text-label-bold">2</button>
                    <button className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:border-primary transition-colors font-label-bold text-label-bold">3</button>
                    <button className="w-10 h-10 flex items-center justify-center border border-outline-variant hover:border-primary transition-colors"><MaterialIcon name="chevron_right" /></button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}