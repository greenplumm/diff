export function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.sel === b.sel &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data)
      )
    )
  )
}
export function isUndef (v) {
  return v === undefined || v === null
}

export function isDef (v) {
  return v !== undefined && v !== null
}