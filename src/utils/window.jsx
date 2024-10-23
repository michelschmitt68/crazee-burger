export const refreshPage = () => window.location.reload();

export const setLocalStorage = (key, value) => {
  if (!key) {
    console.error("Clé du localStorage invalide:", key);
  }
  console.log(`Mise à jour du localStorage avec la clé: ${key} et la valeur:`, value);
  localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}



