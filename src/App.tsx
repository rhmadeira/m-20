import useEnumsAssociation from "./shared/services/hooks/useEnumsAssociation";
import { getVanProcessPartner } from "./shared/services/van";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import {
  getCommunicationProcessPartner,
  getIntegrationProcessPartner,
} from "./shared/services/enums";

function App() {
  const { setCommunications, setIntegration, setVan, setLoaded } =
    useEnumsAssociation();

  useEffect(() => {
    async function getProcessPartner() {
      const responseCommunication = await getCommunicationProcessPartner();
      const responseIntegration = await getIntegrationProcessPartner();
      const responseVan = await getVanProcessPartner();
      setCommunications(responseCommunication.results);
      setIntegration(responseIntegration.results);
      setVan(responseVan.value);
      setLoaded();
    }
    getProcessPartner();
  }, []);

  return <AppRoutes />;
}

export default App;
