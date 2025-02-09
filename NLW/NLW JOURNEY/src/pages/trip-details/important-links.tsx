import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
    return (
        <div className="space-y-6 ">
            <h2 className="font-semibold text-xl">Links Importantes</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <span className="block font-medium text-zinc-100 ">
                    Reserva do Airbnb
                  </span>
                  <a
                    href="#"
                    className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                  >
                    https://www.airbnb.com.br/rooms/104700011
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5" />
              </div>
            </div>
            <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 transition duration-1000 w-full justify-center">
              <Plus className="size-5 text-zinc-400 " />
              Cadastrar Novo Link
            </button>
          </div>
    )
}