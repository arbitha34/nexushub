import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";

function ReportCard({
  title,
  description,
  icon,
  color,
  onDownload,
}) {
  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 4,
        transition: "0.3s",
        height: "100%",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 10,
        },
      }}
    >
      <CardContent
        sx={{
          p: 4,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>

            <Typography
              variant="h5"
              fontWeight="bold"
            >
              {title}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mt: 1,
                mb: 3,
              }}
            >
              {description}
            </Typography>

          </Box>

          <Box
            sx={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              bgcolor: color,
              color: "white",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon}
          </Box>
        </Box>

        <Button
          fullWidth
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={onDownload}
          sx={{
            mt: 2,
            py: 1.5,
            bgcolor: color,

            "&:hover": {
              bgcolor: color,
              opacity: 0.9,
            },
          }}
        >
          Download
        </Button>

      </CardContent>
    </Card>
  );
}

export default ReportCard;