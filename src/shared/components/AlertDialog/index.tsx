import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface AlertDialogProps {
  alertOpen: boolean;
  title: string;
  description: string;

  setAlertOpen: (value: boolean) => void;
  confirmation: () => void;
}

export default function AlertDialog({
  alertOpen,
  setAlertOpen,
  confirmation,
  description,
  title,
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
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Voltar
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={confirmation}
            autoFocus
          >
            {title}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
