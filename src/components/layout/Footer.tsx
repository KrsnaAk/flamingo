import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="w-full bg-[#020202] pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        
        <h2 className="text-6xl md:text-9xl font-display font-black tracking-tighter uppercase text-white mb-2">
          {siteConfig.name}
        </h2>
        
        <p className="text-xl text-white/50 font-sans mb-12">
          {siteConfig.supply} UNIQUE NFTs. Built on {siteConfig.chain}.
        </p>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-between w-full text-white/40 font-mono text-sm uppercase">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="hover:text-brand-pink transition-colors">Twitter</a>
            <a href={siteConfig.links.opensea} target="_blank" rel="noreferrer" className="hover:text-brand-pink transition-colors">OpenSea</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
