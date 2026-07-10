import Link from "next/link";
import { BarChart3, Users, Package, ShoppingCart, Trophy, Wallet } from "lucide-react";

const cards = [
  { title: "Ventas del mes", value: "$0.00", icon: BarChart3 },
  { title: "Embajadores", value: "0", icon: Users },
  { title: "Productos", value: "0", icon: Package },
  { title: "Pedidos", value: "0", icon: ShoppingCart },
  { title: "Comisiones", value: "$0.00", icon: Wallet },
  { title: "Ranking", value: "SPOWAA+", icon: Trophy },
];

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-[#39e02f]">SPOWAA OS 2.0</p>
            <h1 className="mt-2 text-4xl font-black">Dashboard Ejecutivo</h1>
            <p className="mt-2 text-slate-400">Base profesional conectable a Supabase.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/director" className="rounded-xl bg-[#39e02f] px-5 py-3 font-bold text-black">Entrar Director</Link>
            <Link href="/embajador" className="rounded-xl border border-white/10 px-5 py-3 font-bold">Portal Embajador</Link>
          </div>
        </header>
        <section className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <Icon className="mb-4 text-[#39e02f]" />
                <p className="text-sm text-slate-400">{card.title}</p>
                <h2 className="mt-2 text-2xl font-black">{card.value}</h2>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
