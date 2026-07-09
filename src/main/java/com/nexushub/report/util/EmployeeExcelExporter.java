package com.nexushub.report.util;

import com.nexushub.employee.entity.Employee;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;

public class EmployeeExcelExporter {

    private final List<Employee> employeeList;

    public EmployeeExcelExporter(List<Employee> employeeList) {
        this.employeeList = employeeList;
    }

    public void export(HttpServletResponse response) throws IOException {

        Workbook workbook = new XSSFWorkbook();

        Sheet sheet = workbook.createSheet("Employees");

        Row headerRow = sheet.createRow(0);

        headerRow.createCell(0).setCellValue("Employee ID");
        headerRow.createCell(1).setCellValue("Name");
        headerRow.createCell(2).setCellValue("Email");
        headerRow.createCell(3).setCellValue("Phone");
        headerRow.createCell(4).setCellValue("Department");
        headerRow.createCell(5).setCellValue("Designation");
        headerRow.createCell(6).setCellValue("Salary");
        headerRow.createCell(7).setCellValue("Status");

        int rowCount = 1;

        for (Employee employee : employeeList) {

            Row row = sheet.createRow(rowCount++);

            row.createCell(0).setCellValue(employee.getEmployeeId());
            row.createCell(1).setCellValue(employee.getName());
            row.createCell(2).setCellValue(employee.getEmail());
            row.createCell(3).setCellValue(employee.getPhone());
            row.createCell(4).setCellValue(employee.getDepartment());
            row.createCell(5).setCellValue(employee.getDesignation());
            row.createCell(6).setCellValue(employee.getSalary());
            row.createCell(7).setCellValue(employee.getStatus());

        }

        for (int i = 0; i < 8; i++) {
            sheet.autoSizeColumn(i);
        }

        workbook.write(response.getOutputStream());

        workbook.close();

    }

}