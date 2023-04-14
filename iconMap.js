export const ICON_MAP = new Map()

addMapping([0, 1], 'sun')

function addMapping(values, icon) {
    values.forEach(value => {
        ICON_MAP.set(value, icon)
    })
}