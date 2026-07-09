import { Box, Grid, Typography } from "@mui/material";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import TableChartIcon from "@mui/icons-material/TableChart";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ReportCard from "../components/ReportCard";

import {
  exportEmployeePdf,
  exportEmployeeExcel,
} from "../services/reportService";

function Reports() {

  return (

    <Box
      sx={{
        display: "flex",
        backgroundColor: "#f5f7fb",
      }}
    >

      <Sidebar />

      <Box
        sx={{
          flexGrow: 1,
        }}
      >

        <Topbar />

        <Box
          sx={{
            mt: 9,
            p: 4,
            minHeight: "100vh",
          }}
        >

          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Reports
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mb: 4,
            }}
          >
            Download Employee Reports
          </Typography>

          <Grid
            container
            spacing={4}
          >

            <Grid
              item
              xs={12}
              md={6}
            >

              <ReportCard
                title="Employee PDF Report"
                description="Generate and download the complete employee report in PDF format."
                color="#d32f2f"
                icon={<PictureAsPdfIcon sx={{ fontSize: 38 }} />}
                onDownload={exportEmployeePdf}
              />

            </Grid>

            <Grid
              item
              xs={12}
              md={6}
            >

              <ReportCard
                title="Employee Excel Report"
                description="Generate and download the complete employee report in Excel format."
                color="#2e7d32"
                icon={<TableChartIcon sx={{ fontSize: 38 }} />}
                onDownload={exportEmployeeExcel}
              />

            </Grid>

          </Grid>

        </Box>

      </Box>

    </Box>

  );

}

export default Reports;