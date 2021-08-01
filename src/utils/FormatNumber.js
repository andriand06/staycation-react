 const FormatNumber = (number) =>  {
    const formatNumbering = Intl.NumberFormat("id-ID");
    return formatNumbering.format(number);
}

export default FormatNumber;