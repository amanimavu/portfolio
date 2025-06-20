const monthMap = new Map([
    ["01", "January"],
    ["02", "February"],
    ["03", "March"],
    ["04", "April"],
    ["05", "May"],
    ["06", "June"],
    ["07", "July"],
    ["08", "August"],
    ["09", "September"],
    ["10", "October"],
    ["11", "November"],
    ["12", "December"],
])

export const formatDate = (date: string) => {
    const [dateString] = date.split("T")
    let [year, month, day] = dateString.split("-")
    month = monthMap.get(month) ?? ""

    return `${month} ${day}, ${year}`
}
