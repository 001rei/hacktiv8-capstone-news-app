export default function getRangeDate() {
    const today = new Date();
    const lastMonth = new Date(today.setMonth(today.getMonth() - 1));

    const beginDate = lastMonth.toISOString().split("T")[0].replace(/-/g, ""); 
    const endDate = new Date().toISOString().split("T")[0].replace(/-/g, "");

    return { beginDate, endDate };
}