import { Box, Typography, Avatar, Link, Grid, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 4,
        boxShadow: 4,
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
            bottom: -50,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Avatar
            alt={`@${user.name}`}
            src="/placeholder-avatar.jpg"
            sx={{ width: 100, height: 100, border: "4px solid white" }}
          >
            {user.name[0].toUpperCase()}
          </Avatar>
        </Box>
      </Box>
      <Box sx={{ p: 4 }}>
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
              Location
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cordoba
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1" fontWeight="bold" mb={2}>
          Bio
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Im a software engineer with a passion for building beautiful and
          functional web applications.
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" mb={2}>
          Social
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            <GitHubIcon sx={{ fontSize: 30 }} />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            <LinkedInIcon sx={{ fontSize: 30 }} />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            <TwitterIcon sx={{ fontSize: 30 }} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
