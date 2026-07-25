function unsplash(id: string, params = "w=2400&q=80&auto=format&fit=crop") {
  return `https://images.unsplash.com/${id}?${params}`;
}

export const images = {
  heroEiffelSunset: unsplash("photo-1502602898657-3e91760cbb34"),
  parisSkylineGolden: unsplash("photo-1499621574732-72324384dfbc"),
  hiddenStreet: unsplash("photo-1524063221847-15c7329095d8"),
  seineEvening: unsplash("photo-1504896287989-ff1fbde00199"),

  day1Montmartre: unsplash("photo-1594148348184-7064b35f5bba"),
  day2Louvre: unsplash("photo-1587648415693-4a5362b2ce41"),
  day3HallOfMirrors: unsplash("photo-1633117678740-989810c62541"),
  day3Gardens: unsplash("photo-1699303088143-b04d23643bd9"),
  day4ArcDeTriomphe: unsplash("photo-1603378995290-8d4ce0495ddd"),
  day5Cafe: unsplash("photo-1775209986528-5d5240f71d8a"),
  day5Bakery: unsplash("photo-1587912001191-0cd4f14fd89e"),

  eiffelNight: unsplash("photo-1639519306888-419e98f8a5b6"),
} as const;
