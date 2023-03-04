import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import useEnumsAssociation from "./shared/services/hooks/useEnumsAssociation";
import { useGetVan } from "./shared/services/hooks/useVan";
import {
  getCommunicationProcessPartner,
  getIntegrationProcessPartner,
} from "./shared/services/process";
import { getVanProcessPartner } from "./shared/services/van";

function App() {
  //Aqui chamo o hook que seta os enums
  const { setCommunications, setIntegration, setVan } = useEnumsAssociation();

  useEffect(() => {
    async function getProcessPartner() {
      const responseCommunication = await getCommunicationProcessPartner();
      const responseIntegration = await getIntegrationProcessPartner();
      const responseVan = await getVanProcessPartner();
      setCommunications(responseCommunication.results);
      setIntegration(responseIntegration.results);
      setVan(responseVan.value);
    }
    getProcessPartner();
  }, []);

  return <AppRoutes />;
}

export default App;
