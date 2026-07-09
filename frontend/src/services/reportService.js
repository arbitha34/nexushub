import api from "./api";

const REPORT_API = "/reports";

/*
|--------------------------------------------------------------------------
| Employee PDF Download
|--------------------------------------------------------------------------
*/
export const exportEmployeePdf = async () => {
  try {
    const response = await api.get(
      `${REPORT_API}/employees/pdf`,
      {
        responseType: "blob",
      }
    );

    const url = window.URL.createObjectURL(
      new Blob([response.data])
    );

    const link = document.createElement("a");

    link.href = url;
    link.download = "employees.pdf";

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);

  } catch (error) {
    console.error(error);
  }
};

/*
|--------------------------------------------------------------------------
| Employee Excel Download
|--------------------------------------------------------------------------
*/
export const exportEmployeeExcel = async () => {
  try {
    const response = await api.get(
      `${REPORT_API}/employees/excel`,
      {
        responseType: "blob",
      }
    );

    const url = window.URL.createObjectURL(
      new Blob([response.data])
    );

    const link = document.createElement("a");

    link.href = url;
    link.download = "employees.xlsx";

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);

  } catch (error) {
    console.error(error);
  }
};