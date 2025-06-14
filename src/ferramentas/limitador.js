export function limitador(arr, max) {
    return arr.filter((e,i) => {
      return (i<max)
    })
  }