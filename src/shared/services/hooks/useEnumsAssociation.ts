import { create } from "zustand";
import { ICommunication, IIntegration } from "../schemas/enums";
import { IVan } from "../schemas/van";

type TEnumsAssociation = {
  isLoaded: boolean;
  communication: ICommunication[];
  integration: IIntegration[];
  van: IVan[];
  setCommunications: (communication: ICommunication[]) => void;
  setIntegration: (integration: IIntegration[]) => void;
  setVan: (van: IVan[]) => void;
  setLoaded: () => void;
  // setEnums: (enums: {
  //   communication: ICommunication[];
  //   integration: IIntegration[];
  // }) => void;
};

const useEnumsAssociation = create<TEnumsAssociation>((set) => ({
  isLoaded: false,
  communication: [],
  integration: [],
  van: [],
  // setEnums: ({ communication, integration }) =>
  //   set({
  //     communication,
  //     integration,
  //   }),
  setCommunications: (communication) => set({ communication }),
  setIntegration: (integration) => set({ integration }),
  setVan: (van) => set({ van }),
  setLoaded: () => set({ isLoaded: true }),
}));

export default useEnumsAssociation;
