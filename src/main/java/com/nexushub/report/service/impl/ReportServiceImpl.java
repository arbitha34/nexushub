package com.nexushub.report.service.impl;

import com.nexushub.employee.entity.Employee;
import com.nexushub.employee.repository.EmployeeRepository;
import com.nexushub.report.service.ReportService;
import com.nexushub.report.util.EmployeeExcelExporter;
import com.nexushub.report.util.EmployeePdfExporter;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReportServiceImpl implements ReportService {

    private final EmployeeRepository employeeRepository;

    @Override
    public void exportEmployeesToPdf(HttpServletResponse response) {

        try {

            List<Employee> employees = employeeRepository.findAll();

            EmployeePdfExporter exporter =
                    new EmployeePdfExporter(employees);

            exporter.export(response);

        } catch (Exception e) {

            throw new RuntimeException(
                    "Error while exporting PDF Report",
                    e
            );

        }

    }

    @Override
    public void exportEmployeesToExcel(HttpServletResponse response) {

        try {

            List<Employee> employees = employeeRepository.findAll();

            EmployeeExcelExporter exporter =
                    new EmployeeExcelExporter(employees);

            exporter.export(response);

        } catch (IOException e) {

            throw new RuntimeException(
                    "Error while exporting Excel Report",
                    e
            );

        }

    }

}