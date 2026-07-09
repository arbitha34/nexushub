import { Grid, Paper, Typography } from "@mui/material";

function QuickStats({ stats }) {
  const cards = [
    {
      title: "Employees",
      value: stats.totalEmployees,
      color: "#1976d2",
    },
    {
      title: "Projects",
      value: stats.totalProjects,
      color: "#2e7d32",
    },
    {
      title: "Tasks",
      value: stats.totalTasks,
      color: "#fb8c00",
    },
    {
      title: "Leaves",
      value: stats.totalLeaves,
      color: "#d32f2f",
    },
  ];

  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              borderTop: `5px solid ${card.color}`,
              borderRadius: 3,
            }}
          >
            <Typography color="text.secondary">
              {card.title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                color: card.color,
                mt: 1,
              }}
            >
              {card.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default QuickStats;