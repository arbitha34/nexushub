import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

function ReportCard({
  title,
  value,
  subtitle,
  icon,
  color = "#1976d2",
}) {
  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >

          <Box>

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              {title}
            </Typography>

            <Typography
              variant="h3"
              color={color}
              fontWeight="bold"
              mt={1}
            >
              {value}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              mt={1}
            >
              {subtitle}
            </Typography>

          </Box>

          <Box
            sx={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              backgroundColor: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 35,
            }}
          >
            {icon}
          </Box>

        </Box>

      </CardContent>
    </Card>
  );
}

export default ReportCard;