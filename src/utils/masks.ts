export const formatCurrency = (value: string): string => {
  const number = value.replace(/\D/g, '');
  const float = (parseInt(number) / 100).toFixed(2);
  return `R$ ${float.replace('.', ',')}`;
};

export const formatPhone = (value: string): string => {
  const number = value.replace(/\D/g, '');
  if (number.length <= 11) {
    return number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
  return number;
};

export const formatCPF = (value: string): string => {
  const number = value.replace(/\D/g, '');
  if (number.length <= 11) {
    return number.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
  return number;
};

export const formatCNPJ = (value: string): string => {
  const number = value.replace(/\D/g, '');
  if (number.length <= 14) {
    return number.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }
  return number;
};

export const formatCEP = (value: string): string => {
  const number = value.replace(/\D/g, '');
  if (number.length <= 8) {
    return number.replace(/(\d{5})(\d{3})/, '$1-$2');
  }
  return number;
}; 