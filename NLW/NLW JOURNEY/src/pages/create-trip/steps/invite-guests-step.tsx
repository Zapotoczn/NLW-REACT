import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
    openGuestModal: () => void;
    emailsToInvite: string[];
    openTripModal:  () => void;
}

export function InviteGuestsStep({openGuestModal, emailsToInvite, openTripModal}: InviteGuestsStepProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
        <button
          type="button"
          onClick={openGuestModal}
          className="flex items-center gap-2 flex-1 text-left"
        >
          <UserRoundPlus className="size-5 text-zinc-400" />
          {emailsToInvite.length > 0 ? (
            <span className="bg-transparent text-lg text-zinc-200 outline-none">
              {emailsToInvite.length} Pessoa(s) Convidada(s)
            </span>
          ) : (
            <span className="bg-transparent text-lg text-zinc-400 outline-none">
              Quem Estará na viagem?
            </span>
          )}
        </button>

        <div className="w-px h-6 bg-zinc-400"></div>
        <button
          className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition duration-1000"
          onClick={openTripModal}
        >
          Confirmar Viagem <ArrowRight className="size-5" />
        </button>
      </div>
    )
}