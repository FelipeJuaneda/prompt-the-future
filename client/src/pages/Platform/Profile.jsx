import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Link,
  Grid,
  Divider,
  Button,
  Modal,
  TextField,
  Backdrop,
  Fade,
  CircularProgress,
  Stack,
  IconButton,
  Container,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../../context/AuthContext";
import { UploadButton } from "@bytescale/upload-widget-react";
import { useForm, Controller, useWatch } from "react-hook-form";

export default function Profile() {
  const { user, updateProfile } = useAuth();
  console.log("🚀 ~ Profile ~ user:", user);
  const [open, setOpen] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      surname: user.surname,
      email: user.email,
      location: user.location || "",
      description: user.description || "",
      img: user.img || "",
      socialMedia: {
        instagram: user.socialMedia?.instagram || "",
        linkedin: user.socialMedia?.linkedin || "",
        x: user.socialMedia?.x || "",
      },
    },
  });
  const [loading, setLoading] = useState(false);
  const imgValue = useWatch({ control, name: "img" });

  const handleUpdateProfile = async (data) => {
    setLoading(true);
    try {
      await updateProfile(data);
      setOpen(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const options = {
    apiKey: "free",
    maxFileCount: 1,
    locale: {
      cancelBtn: "cancelar",
      cancelBtnClicked: "cancelled",
      cancelPreviewBtn: "Cancelar",
      continueBtn: "Continuar",
      doneBtn: "Hecho",
      finishBtn: "Finalizado",
      finishBtnIcon: true,
      orDragDropFile: "...o arrastrar y soltar un archivo.",
      removeBtn: "eliminar",
      removeBtnClicked: "eliminado",
      submitBtnError: "Error!",
      submitBtnLoading: "Por favor espera...",
      unsupportedFileType: "Tipo de archivo no compatible.",
      uploadFileBtn: "Carga una imagen",
      uploadImageBtn: "Subir una imagen",
    },
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          height: 160,
          position: "relative",
          background: "linear-gradient(135deg, #7F00FF 30%, #E100FF 70%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: -50, md: -75, lg: -100 },
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Avatar
            alt={`@${user.name}`}
            src={user.img || "/placeholder-avatar.jpg"}
            sx={{
              width: { xs: 100, md: 175, lg: 200 },
              height: { xs: 100, md: 175, lg: 200 },
              border: "4px solid white",
            }}
          >
            {user.name[0].toUpperCase()}
          </Avatar>
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{ p: 4, pt: { xs: 8, md: 12 } }}>
        <Typography variant="h4" gutterBottom>
          {`${user.name} ${user.surname}`}
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight="bold">
              Email
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight="bold">
              Ubicación
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.location || "N/A"}
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1" fontWeight="bold" mb={2}>
          Descripción
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          {user.description || "N/A"}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" mb={2}>
          Redes Sociales
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "start" }}>
          <Link
            href={user.socialMedia?.instagram || "#"}
            color="inherit"
            sx={{ mx: 1 }}
          >
            <InstagramIcon sx={{ fontSize: 30 }} />
          </Link>
          <Link
            href={user.socialMedia?.linkedin || "#"}
            color="inherit"
            sx={{ mx: 1 }}
          >
            <LinkedInIcon sx={{ fontSize: 30 }} />
          </Link>
          <Link
            href={user.socialMedia?.x || "#"}
            color="inherit"
            sx={{ mx: 1 }}
          >
            <XIcon sx={{ fontSize: 30 }} />
          </Link>
        </Box>
        <Button variant="outlined" onClick={() => setOpen(true)} sx={{ mt: 4 }}>
          Editar Perfil
        </Button>
      </Container>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: "75%" },
              maxHeight: "90vh",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              overflowY: "auto",
            }}
          >
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" component="h2" gutterBottom>
              Editar Perfil
            </Typography>
            <form onSubmit={handleSubmit(handleUpdateProfile)}>
              <Grid container spacing={2}>
                <Grid alignContent={"center"} item xs={12} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Avatar
                      alt={`@${user.name}`}
                      src={imgValue || user.img || "/placeholder-avatar.jpg"}
                      sx={{
                        width: { xs: "150px", md: "175px", lg: "210px" },
                        height: { xs: "150px", md: "175px", lg: "210px" },
                        border: "4px solid white",
                      }}
                    >
                      {user.name[0].toUpperCase()}
                    </Avatar>
                    <UploadButton
                      options={options}
                      onComplete={(files) => {
                        setValue("img", files[0].fileUrl);
                      }}
                    >
                      {({ onClick }) => (
                        <Button onClick={onClick} variant="contained">
                          Subir Imagen
                        </Button>
                      )}
                    </UploadButton>
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Stack direction={"row"} gap={1}>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Nombre"
                          margin="normal"
                          error={Boolean(errors.name)}
                          helperText={errors.name ? errors.name.message : ""}
                        />
                      )}
                      rules={{ required: "Nombre es requerido." }}
                    />
                    <Controller
                      name="surname"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          label="Apellido"
                          margin="normal"
                          error={Boolean(errors.surname)}
                          helperText={
                            errors.surname ? errors.surname.message : ""
                          }
                        />
                      )}
                      rules={{ required: "Apellido es requerido." }}
                    />
                  </Stack>
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Descripción"
                        margin="normal"
                        multiline
                        rows={4}
                        error={Boolean(errors.description)}
                        helperText={
                          errors.description ? errors.description.message : ""
                        }
                      />
                    )}
                  />
                  <Controller
                    name="location"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Ubicación"
                        margin="normal"
                        error={Boolean(errors.location)}
                        helperText={
                          errors.location ? errors.location.message : ""
                        }
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Typography mt={2}>Redes Sociales</Typography>
              <Controller
                name="socialMedia.instagram"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Instagram"
                    margin="normal"
                  />
                )}
              />
              <Controller
                name="socialMedia.linkedin"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="LinkedIn"
                    margin="normal"
                  />
                )}
              />
              <Controller
                name="socialMedia.x"
                control={control}
                render={({ field }) => (
                  <TextField {...field} fullWidth label="X" margin="normal" />
                )}
              />
              <Box sx={{ mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  {loading ? (
                    <CircularProgress color="inherit" size={24} />
                  ) : (
                    "Guardar Cambios"
                  )}
                </Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
