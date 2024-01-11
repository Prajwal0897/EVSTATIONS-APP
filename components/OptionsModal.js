import React from "react";
import { Dialog, DialogTitle, DialogContent, Button, Grid } from "@mui/material";

const OptionsModal = ({ open, onClose, options, onSelectOption }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select Your Choice</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} >
          {options.map((option) => (
            <Grid item key={option}>
              <Button
                variant="outlined"
                onClick={() => onSelectOption(option)}
              >
                {option}
              </Button>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default OptionsModal;
