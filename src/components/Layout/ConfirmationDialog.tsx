import * as React from "react";
import { workshop } from "../../config/interface";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

interface ConfirmationDialogProps {
  handleDialogResponse(isTrue: boolean): void;
  isOpen: boolean;
  titleText: string;
  messageText: string;
  workshop?: workshop[];
  newWorkshop?: boolean;
}

/**
 * This component represents a modal which pops up when needing to confirm deletion, no other button uses this component yet
 */
class ConfirmationDialog extends React.Component<ConfirmationDialogProps, Record<string, unknown>> {
  /**
   * This function will get executed when the dialog is closed in any possible way except clicking the agree button
   */
  handleDeny = (): void => {
    this.props.handleDialogResponse(false);
  };

  /**
   * Person clicks confirm
   */
  handleAccept = (): void => {
    this.props.handleDialogResponse(true);
  };

  /**
   * The text for what appears in the confirmation dialog gets passed in as props
   * This dialog is all material-ui
   */
  render(): JSX.Element {
    return (
      <div>
        <Dialog
          open={this.props.isOpen}
          onClose={this.handleDeny} //clicking outside the modal closes it
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.titleText}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">{this.props.messageText}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDeny} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleAccept} color="secondary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ConfirmationDialog;
