// @ts-expect-error
const ALL_TIMEZONES: string[] = Intl.supportedValuesOf("timeZone")

const fetchTimeZones = () => {
  console.log("fetch timezones")
  return ALL_TIMEZONES
}

export { fetchTimeZones, ALL_TIMEZONES }
