export async function fetchAddressByZip(zipCode: string) {
  const cleanZip = zipCode.replace(/\D/g, "");

  if (cleanZip.length !== 8) return null;

  const response = await fetch(`https://viacep.com.br/ws/${cleanZip}/json/`);
  const data = await response.json();

  if (data.erro) return null;

  return {
    address: data.logradouro,
    city: data.localidade,
    state: data.uf,
  };
}
