package com.nexushub.report.util;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import com.nexushub.employee.entity.Employee;

import jakarta.servlet.http.HttpServletResponse;

import java.awt.Color;
import java.io.IOException;
import java.util.List;

public class EmployeePdfExporter {

    private final List<Employee> employeeList;

    public EmployeePdfExporter(List<Employee> employeeList) {
        this.employeeList = employeeList;
    }

    private void writeTableHeader(PdfPTable table) {

        PdfPCell cell = new PdfPCell();

        cell.setBackgroundColor(Color.DARK_GRAY);

        cell.setPadding(6);

        Font font = FontFactory.getFont(
                FontFactory.HELVETICA_BOLD
        );

        font.setColor(Color.WHITE);

        cell.setPhrase(new Paragraph("Employee ID", font));
        table.addCell(cell);

        cell.setPhrase(new Paragraph("Name", font));
        table.addCell(cell);

        cell.setPhrase(new Paragraph("Email", font));
        table.addCell(cell);

        cell.setPhrase(new Paragraph("Department", font));
        table.addCell(cell);

        cell.setPhrase(new Paragraph("Designation", font));
        table.addCell(cell);

        cell.setPhrase(new Paragraph("Status", font));
        table.addCell(cell);

    }
    private void writeTableData(PdfPTable table) {

        for (Employee employee : employeeList) {

            table.addCell(employee.getEmployeeId());
            table.addCell(employee.getName());
            table.addCell(employee.getEmail());
            table.addCell(employee.getDepartment());
            table.addCell(employee.getDesignation());
            table.addCell(employee.getStatus());

        }

    }

    public void export(HttpServletResponse response)
            throws DocumentException, IOException {

        Document document = new Document();

        PdfWriter.getInstance(document, response.getOutputStream());

        document.open();

        Font titleFont = FontFactory.getFont(
                FontFactory.HELVETICA_BOLD,
                18,
                Color.BLUE
        );

        Paragraph title = new Paragraph(
                "NexusHub Employee Report",
                titleFont
        );

        title.setAlignment(Paragraph.ALIGN_CENTER);

        document.add(title);

        document.add(new Paragraph(" "));

        PdfPTable table = new PdfPTable(6);

        table.setWidthPercentage(100);

        table.setSpacingBefore(10);

        table.setWidths(new float[]{2f, 3f, 4f, 3f, 3f, 2f});

        writeTableHeader(table);

        writeTableData(table);

        document.add(table);

        document.close();

    }

}
