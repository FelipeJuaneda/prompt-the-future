import { Box, Typography, Avatar, Link, Grid, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Profile() {
  return (
    <Box sx={{ bgcolor: "background.paper", borderRadius: 4, boxShadow: 4 }}>
      <Box sx={{ bgcolor: "primary.main", height: 160, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            bottom: -50,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Avatar
            alt="@shadcn"
            src="/placeholder-avatar.jpg"
            sx={{ width: 100, height: 100, border: "4px solid white" }}
          >
            R
          </Avatar>
        </Box>
      </Box>
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Jared Palmer
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          @jaredpalmer
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight="bold">
              Email
            </Typography>
            <Typography variant="body2" color="text.secondary">
              jared@example.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" fontWeight="bold">
              Location
            </Typography>
            <Typography variant="body2" color="text.secondary">
              San Francisco, CA
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
