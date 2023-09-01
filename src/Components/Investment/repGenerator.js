import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call

// define a generatePDF function that accepts a tickets argument
const generatePDF = (order) => {
  // initialize jsPDF
  const doc = new jsPDF();

  const tableColumn = [
    "Id",
    "Stock Name",
    "No of Stocks",
    "No of Lots",
    "Txn Fee",
    "Stamp Duty",
  ];
  const tableRows = [];

  const ticketData = [
    order.order_id,
    order.stock_id.stock_name,
    order.no_of_stocks,
    order.no_of_lots,
    order.stock_id.transaction_fee,
    order.stock_id.stamp_duty,
  ];
  tableRows.push(ticketData);
  const ticketData1 = [
    " ",
    " ",
    " ",
    `${order.order_amount}`,
    ` Rupees`,
    ` Only`,
  ];
  tableRows.push(ticketData1);
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  doc.text("AGOI FINANCIAL SERVICES.", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};

export default generatePDF;
