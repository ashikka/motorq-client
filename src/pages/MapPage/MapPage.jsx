import { React, useEffect } from 'react';
import './MapPage.scss';
import {
  Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import {
  Marker, MapContainer, TileLayer, Popup,
} from 'react-leaflet';
import { getClassesThunk } from '../../redux/slices/classSlice';

const MapPage = () => {
  const { courseCode } = useParams();
  const data = useSelector((state) => state.classes.data);
  const dispatch = useDispatch();

  function getClass(code) {
    dispatch(getClassesThunk({ courseCode: code }));
  }

  useEffect(() => {
    if (courseCode) {
      getClass(courseCode);
    }
  }, [courseCode]);
  return (
    <Row className="h-50 justify-content-center align-items-center">
      <h1 className="mb-5 mt-5">Map</h1>
      {/* <Col> */}
      {data
        && (
        <MapContainer
          className="markercluster-map"
          center={[51.0, 19.0]}
          zoom={4}
          style={{ height: 700, width: 1000 }}
          maxZoom={18}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MarkerClusterGroup>
            {data.map((d) => (
              <Marker position={[d.location.latitude, d.location.longitude]}>
                <Popup>
                  Course Code:
                  <strong>
                    {d.courseCode}
                  </strong>
                  {' '}
                  <br />
                  <br />
                  Course Name:
                  <strong>
                    {d.courseName}
                  </strong>
                  {' '}
                  <br />
                  <br />
                  Building Name:
                  <strong>
                    {d.building}
                  </strong>
                  {' '}
                  <br />
                  <br />
                  Number of Students Registered:
                  <strong>
                    {d.studentsRegistered}
                  </strong>
                  <br />
                  <br />
                  Faculty:
                  <strong>
                    {d.faculty}
                  </strong>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
        )}
      {/* </Col> */}
    </Row>
  );
};

export default MapPage;
