import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import uploadIcon from './uploadIcon.png';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import { useDropzone } from 'react-dropzone';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: [300, 400, 550],
  height: [500, 500, 600],
  bgcolor: '#292929',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const typographyStyle = {
  mt: 2,
  color: 'white',
  textAlign: 'center',
}

const typographyStyle2 = {
  color: '#B4B4B4',
  textAlign: 'center',
}

const buttonStyle = {
  marginTop: '30px',
  backgroundColor: "#25D1F6",
  color: "#292929",
  left: '50%',
  transform: 'translateX(-50%)',
}

const imgStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '110px',
  marginBottom: '60px',
}

const iconButtonStyle = {
  color: 'white',
  flex: '0',
}

const textWrapperStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const textStyle = {
  flex: '1',
  color: "white",
}

export default function Upload() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    handleOpen();
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      console.log(acceptedFiles);
    }
  });

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open} timeout={500}>
          <Box sx={style}>
            <div style={textWrapperStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2" style={textStyle}>
                Upload Songs
              </Typography>

              <IconButton onClick={handleClose} sx={iconButtonStyle}>
                <CloseIcon />
              </IconButton>

            </div>

            <div style={imgStyle}>
              <img src={uploadIcon} width="30%" alt="" />
            </div>

            <Typography id="modal-modal-description" sx={typographyStyle}>
              Drag and drop song files to upload <br></br>
            </Typography>

            <Typography id="modal-modal-description" sx={typographyStyle2}>
              Your songs will be private until you publish them.
            </Typography>


            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Button
                variant="contained"
                component="label"
                sx={buttonStyle}
              >
                SELECT FILES
              </Button>
            </div>

          </Box>
        </Fade>
      </Modal>

    </div>
  );
}