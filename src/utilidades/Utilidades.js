
export function separadorMiles(num) {
    let reg = /\d{1,3}(?=(\d{3})+$)/g;
    return (num + '').replace(reg, '$&.');
}

export function tituloMayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }