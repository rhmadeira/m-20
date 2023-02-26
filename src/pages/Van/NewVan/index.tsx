import {
  Box,
  Icon,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import BoxForm from "../../../shared/components/form/BoxForm";
import InputControlled from "../../../shared/components/form/InputControlled";
import SelectControlled from "../../../shared/components/form/SelectControlled";
import SaveBackTool from "../../../shared/components/SaveBackTool";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const typeVan = [
  { index: 0, label: "API" },
  { index: 1, label: "EDI" },
  { index: 2, label: "Graphql" },
];
const versionVan = [{ index: 0, label: "1.0" }];

const schemaNewVan = zod.object({
  nome: zod.string(),
  tipo: zod.string(),
  versao: zod.string(),
});

export type TNewVan = zod.infer<typeof schemaNewVan>;

export default function NewVan() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { handleSubmit, control } = useForm<TNewVan>({
    resolver: zodResolver(schemaNewVan),
  });

  function handleNewVan(data: TNewVan) {
    console.log(data);
  }
  function handleButtonBack() {
    console.log("back");
  }
  return (
    <Box
      className="animeLeft"
      display="flex"
      flexDirection="column"
      gap={2}
      alignItems="center"
      marginTop={smDown ? 0 : 5}
    >
      <Box
        borderTop="10px solid #086aad"
        width="100%"
        height="100%"
        marginTop={1}
        component={Paper}
      >
        <Typography paddingLeft={3} paddingTop={2} variant="h5">
          Nova Van <Icon color="info">mode_edit_outline</Icon>
        </Typography>
        <BoxForm onSubmit={handleSubmit(handleNewVan)}>
          <Box
            display="flex"
            gap={1}
            maxWidth="700px"
            flexWrap={smDown ? "wrap" : "nowrap"}
          >
            <InputControlled
              controller={{ name: "nome", control, defaultValue: "" }}
              label="Nome"
              color="secondary"
            />
            <SelectControlled
              controller={{ name: "tipo", control, defaultValue: "" }}
              arrayMenuItem={typeVan}
              textSelect="Tipo"
            />
            <SelectControlled
              controller={{ name: "versao", control, defaultValue: "" }}
              arrayMenuItem={typeVan}
              textSelect="Versão"
            />
          </Box>
          <SaveBackTool handleBack={handleButtonBack} />
        </BoxForm>
      </Box>
    </Box>
  );
}
