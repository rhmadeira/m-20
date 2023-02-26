import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface AlertDialogProps {
  alertOpen: boolean;
  setAlertOpen: (value: boolean) => void;
  confirmationDelete: () => void;
}

export default function AlertDialog({
  alertOpen,
  setAlertOpen,
  confirmationDelete,
}: AlertDialogProps) {
  const handleClose = () => {
    setAlertOpen(false);
  };

  return (
    <div>
      <Dialog
        open={alertOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Apagar</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você realmente deseja apagar este registro?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={handleClose}>
            Voltar
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={confirmationDelete}
            autoFocus
          >
            Apagar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
