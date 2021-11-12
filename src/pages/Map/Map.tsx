import GoogleMapReact from "google-map-react";

const Map = () => {
  const AnyReactComponent: React.FC<{
    lat: number;
    lng: number;
    text: string;
  }> = ({ lat, lng, text }) => <div>{text}</div>;

  return (
    <div style={{ height: "87vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCxB4NOyF5Du4Ih88qXosmZHq4HVCAG_yk" }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={11}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="Saroj" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
