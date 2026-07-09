package com.nexushub.report.controller;

import com.nexushub.report.service.ReportService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/api/reports")
@RequiredArgsConstructor
public class ReportController {

    private final ReportService reportService;

    @GetMapping("/employees/pdf")
    public void exportEmployeesPdf(HttpServletResponse response)
            throws IOException {

        response.setContentType("application/pdf");

        String dateTime = LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss"));

        String headerValue =
                "attachment; filename=employees_" + dateTime + ".pdf";

        response.setHeader(
                HttpHeaders.CONTENT_DISPOSITION,
                headerValue
        );

        reportService.exportEmployeesToPdf(response);
    }

    @GetMapping("/employees/excel")
    public void exportEmployeesExcel(HttpServletResponse response)
            throws IOException {

        response.setContentType(
                "application/octet-stream"
        );

        String dateTime = LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss"));

        String headerValue =
                "attachment; filename=employees_" + dateTime + ".xlsx";

        response.setHeader(
                HttpHeaders.CONTENT_DISPOSITION,
                headerValue
        );

        reportService.exportEmployeesToExcel(response);
    }

}