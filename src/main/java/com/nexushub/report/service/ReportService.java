package com.nexushub.report.service;

import jakarta.servlet.http.HttpServletResponse;

public interface ReportService {

    void exportEmployeesToPdf(HttpServletResponse response);

    void exportEmployeesToExcel(HttpServletResponse response);

}