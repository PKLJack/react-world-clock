// @ts-expect-error
let ALL_TIMEZONES: string[] = Intl.supportedValuesOf("timeZone")

ALL_TIMEZONES = ALL_TIMEZONES

const fetchTimeZones = () => {
  console.log("fetch timezones")
  return ALL_TIMEZONES
}

export { fetchTimeZones, ALL_TIMEZONES }
