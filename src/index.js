import accounting from "accounting";

const format = (num, offset) => {
  if (!offset) {
    offset = 2;
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

const formatCurrency = (val, offset = 0, type) => {
  if (type == "IDR") {
    return "IDR" + format(val, offset);
  } else {
    return "Rp" + format(val, offset);
  }
};

export default { format, unformat, formatCurrency };
