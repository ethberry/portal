export type LocationKind = "office" | "presence";

export interface ILocation {
  id: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
  kind: LocationKind;
}

export const locations: ILocation[] = [
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    lat: -8.722,
    lng: 115.178,
    kind: "office",
  },
  {
    id: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    lat: 13.756,
    lng: 100.502,
    kind: "presence",
  },
  {
    id: "phuket",
    name: "Phuket",
    country: "Thailand",
    lat: 7.88,
    lng: 98.392,
    kind: "presence",
  },
  {
    id: "danang",
    name: "Da Nang",
    country: "Vietnam",
    lat: 16.054,
    lng: 108.202,
    kind: "presence",
  },
  {
    id: "kohsamui",
    name: "Koh Samui",
    country: "Thailand",
    lat: 9.512,
    lng: 100.014,
    kind: "presence",
  },
  {
    id: "weligama",
    name: "Weligama",
    country: "Sri Lanka",
    lat: 5.973,
    lng: 80.429,
    kind: "presence",
  },
  {
    id: "penang",
    name: "George Town",
    country: "Malaysia",
    lat: 5.414,
    lng: 100.329,
    kind: "presence",
  },
  {
    id: "cebu",
    name: "Cebu",
    country: "Philippines",
    lat: 10.316,
    lng: 123.886,
    kind: "presence",
  },
];

export const mapDefaultCenter = { lat: 8.2, lng: 105.5 };
export const mapDefaultZoom = 4;
