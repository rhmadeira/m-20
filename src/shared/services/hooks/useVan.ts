import { useQuery } from "react-query";
import { getVanProcessPartner } from "../van";

export function useGetVan() {
  return useQuery(["van"], getVanProcessPartner);
}
