import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

function DashboardCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        minHeight: 170,
        borderRadius: 5,
        background: `linear-gradient(135deg, ${color}, ${color}DD)`,
        color: "#fff",
        transition: "0.35s",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0px 18px 35px rgba(0,0,0,0.18)",
        },
      }}
    >
      <CardContent
        sx={{
          p: 3,
          height: "100%",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box>

            <Typography
              sx={{
                fontSize: 16,
                opacity: .9,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="h3"
              fontWeight="bold"
              mt={2}
            >
              {value}
            </Typography>

            <Typography
              sx={{
                mt: 2,
                opacity: .8,
                fontSize: 13,
              }}
            >
              Updated just now
            </Typography>

          </Box>

          <Box
            sx={{
              width: 70,
              height: 70,
              borderRadius: "20px",
              background: "rgba(255,255,255,.18)",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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