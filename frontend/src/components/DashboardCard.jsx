import { Card, CardContent, Typography, Box } from "@mui/material";

function DashboardCard({
  title,
  value,
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
              variant="subtitle1"
              color="text.secondary"
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              mt={1}
            >
              {value}
            </Typography>

          </Box>

          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 30,
            }}
          >
            {icon}
          </Box>

        </Box>

      </CardContent>
    </Card>
  );
}

export default DashboardCard;