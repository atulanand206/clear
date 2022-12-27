export const getFloors = (levels) => {
  if (levels === undefined || levels === null) {
    return []
  }
  return Object.keys(levels).length > 0 ? Object.keys(levels) : []
}

export const getRooms = (levels, floor) => {
  return Object.keys(levels).length > 0 ? Object.keys(levels[floor]) : []
}

export const getBeds = (levels, floor, room) => {
  if (levels === undefined || levels === null) {
    return []
  }
  console.log(levels)
  if (Object.keys(levels).length === 0 || !levels.hasOwnProperty(floor) ||
    Object.keys(levels[floor]).length === 0 || !levels[floor].hasOwnProperty(room) ||
    Object.keys(levels[floor][room]).length === 0) {
    return []
  }
  return Object.keys(levels[floor][room])
}

export const getBedId = (levels, floor, room, bedId) => {
  if (levels === {}) {
    return ''
  }
  if (Object.keys(levels).length === 0 || !levels.hasOwnProperty(floor) ||
    Object.keys(levels[floor]).length === 0 || !levels[floor].hasOwnProperty(room) ||
    Object.keys(levels[floor][room]).length === 0) {
    return ''
  }
  return levels[floor][room][bedId]["bedId"]
}

export const getUserId = (levels, floor, room, bedId) => {
  if (levels === {} || levels === undefined || levels === null) {
    return ''
  }
  if (Object.keys(levels).length === 0 || !levels.hasOwnProperty(floor) ||
    Object.keys(levels[floor]).length === 0 || !levels[floor].hasOwnProperty(room) ||
    Object.keys(levels[floor][room]).length === 0) {
    return ''
  }
  return levels[floor][room][bedId]["userId"]
}

export const getUserIdFromBedId = (levels, bedId) => {
  if (levels === {}) {
    return ''
  }
  if (Object.keys(levels).length === 0) {
    return ''
  }
  for (let floor in levels) {
    for (let room in levels[floor]) {
      for (let bed in levels[floor][room]) {
        if (levels[floor][room][bed]["bedId"] === bedId) {
          return levels[floor][room][bed]["userId"]
        }
      }
    }
  }
  return ''
}
