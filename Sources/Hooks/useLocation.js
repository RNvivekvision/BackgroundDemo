import Geolocation from 'react-native-geolocation-service';

const errorLocation = {
  coords: { latitude: null, longitude: null },
};
const useLocation = () => {
  const getLocation = async () => {
    const position = await new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => resolve(position),
        error =>
          reject({
            ...error,
            ...errorLocation,
          }),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    });
    // console.log('location -> ', JSON.stringify(position, null, 2));
    // return errorLocation;
    return position;
  };

  return { getLocation };
};

export default useLocation;
