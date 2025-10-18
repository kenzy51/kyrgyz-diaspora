/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { api } from "../lib/api";
import { toast } from "react-toastify";
import { successChime } from "../lib/beep";

interface Event {
  id: number;
  title: string;
  location: string;
  city:string;
  date: string;
  status: string;
  [key: string]: any;
}

interface EventsState {
  events: Event[];
  loading: boolean;
  fetchEvents: () => Promise<void>;
  createEvent: (newEvent: Omit<Event, "id">) => Promise<void>;
}

export const useEventsStore = create<EventsState>((set, get) => ({
  events: [],
  loading: false,
  fetchEvents: async () => {
    set({ loading: true });
    try {
      const { data } = await api.get("events");
      set({ events: data });

    } catch (error) {
      toast.error(error);
    } finally {
      set({ loading: false });
    }
  },
  createEvent: async (newEvent) => {
    set({ loading: true });
    try {
      const { data } = await api.post("/events", newEvent);
      set({ events: [...get().events, data] });
      toast.success('Succesfully created')
      successChime()
    } catch (error) {
      toast.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
