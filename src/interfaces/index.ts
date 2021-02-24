export interface HeaderProps {
  title: string
  showCancel?: boolean
}

export interface IInitialMarker {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface IAllUnits {
  id: number;
  name: string;
  country: string;
  state: string;
  city: string;
  profile: string;
  latitude: number;
  longitude: number;
  address: {
    street: string;
    complment: string;
    number: string;
    zipCode: string;
  }
  describle: string;
  contactURL: String;
}
export interface GetUnit {
  id: number;
}