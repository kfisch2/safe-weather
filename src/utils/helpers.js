const KtoFConversion = (K) => {
  let F;
  F = (K - 273.15) * (9 / 5) + 32;
  return Math.trunc(F);
};

export default KtoFConversion; 