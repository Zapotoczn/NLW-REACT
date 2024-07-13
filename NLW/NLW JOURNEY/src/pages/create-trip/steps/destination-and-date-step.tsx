import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface propsDestinationAndDate {
  isGuestsInputOpen: boolean;
  closeGuestInput: () => void;
  openGuestInput: () => void;
  setDestination: (destination:string) => void;
  setEventStartEndDate: (dates:DateRange | undefined) => void;
  eventStartEndDate: DateRange | undefined;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestInput,
  openGuestInput,
  setDestination,
  setEventStartEndDate,
  eventStartEndDate,
}: propsDestinationAndDate) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  const displayedDate = eventStartEndDate && eventStartEndDate.from && eventStartEndDate.to 
  ? format(eventStartEndDate.from, "d' de 'LLL").concat(' até ').concat(format(eventStartEndDate.to, "d' de 'LLL"))
  : null

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          onChange={event => setDestination(event.target.value)}
        />
      </div>

      <button disabled={isGuestsInputOpen} onClick={openDatePicker} className="flex items-center gap-2 text-left w-[240px]">
        <Calendar className="size-5 text-zinc-400" />
        <span
          className="text-lg text-zinc-400 w-40 flex-1"
        >
          {displayedDate || 'Quando'}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="font-lg font-semibold">Selecione a data</h2>
                <button>
                  <X className="size-5 text-zinc-400" onClick={closeDatePicker} />
                </button>
              </div>
            </div>
            
            <DayPicker mode="range" selected={eventStartEndDate} onSelect={setEventStartEndDate} />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-400"></div>

      {isGuestsInputOpen ? (
        <button
          onClick={closeGuestInput}
          className="bg-zing-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 transition duration-1000"
        >
          Alterar Local/Data <Settings2 className="size-5 text-zinc-400" />
        </button>
      ) : (
        <button
          className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition duration-1000"
          onClick={openGuestInput}
        >
          Continuar <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  );
}
