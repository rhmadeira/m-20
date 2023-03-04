import { create } from "zustand";
import { IVan } from "../schemas/partners";
import { ICommunication, IIntegration } from "../schemas/process";

type TEnumsAssociation = {
  communication: ICommunication[];
  integration: IIntegration[];
  van: IVan[];
  setCommunications: (communication: ICommunication[]) => void;
  setIntegration: (integration: IIntegration[]) => void;
  setVan: (van: IVan[]) => void;
  // setEnums: (enums: {
  //   communication: ICommunication[];
  //   integration: IIntegration[];
  // }) => void;
};

const useEnumsAssociation = create<TEnumsAssociation>((set) => ({
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
}));

export default useEnumsAssociation;
