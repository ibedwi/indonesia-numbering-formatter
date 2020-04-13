import accounting from "accounting";

const format = (num, offset) => {
  if (!offset) {
    offset = 0;
  }
  if (num) {
    return String(accounting.formatNumber(num, offset, ".", ","));
  } else {
    return String(0);
  }
};

const unformat = val => {
  let unformat1 = val.replace(".", "");
  let unformat2 = unformat1.replace(",", ".");
  return Number(unformat2);
};

const formatCurrency = (val, offset, type) => {
  if (!offset) {
    offset = 0;
  }
  if (type == "IDR") {
    return "IDR" + format(val, offset);
  } else {
    return "Rp" + format(val, offset);
  }
};

const formatNumberOnly = (val, offset) => {
  if (!offset) {
    offset = 0;
  }

  return format(val, offset);
};

export default { format, unformat, formatCurrency, formatNumberOnly };
