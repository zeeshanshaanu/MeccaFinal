import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useContext,
} from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import ResponsiveDrawer from "../../Pages/Dashboard/Drawer";
import Box from "@mui/material/Box";
import Logo1 from "../../Assets/Images/Logo1.png";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import AddIcon from "@mui/icons-material/Add";
import { useDropzone } from "react-dropzone";
//
const drawerWidth = 100;

const AddNewEvent = () => {
  const navigate = useNavigate();
  const [showupload, setshowupload] = useState(false);
  const [uploaded, setuploaded] = useState(null);
  const cancelFileUpload = useRef(null);
  const [files, setfiles] = useState([]);
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    setshowupload(true);
    acceptedFiles.forEach((file) => {
      setfiles((prevState) => [...prevState, file]);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // accept: "image/jpeg,image/png,image/jpg,application/pdf",
  });
  return (
    <div className="Main_head TopDiv pb-5">
      <Box sx={{ display: "flex" }}>
        <div className="for_drawer">
          <ResponsiveDrawer heading="Events" className="alluser" />
        </div>
        <AppBar
          className="fortrans"
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        ></AppBar>
        <Box
          sx={{
            flexGrow: 1,
            my: 5,
            mx: 1,
            mt: 5,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {/* ======FORM====== */}
          <Form>
            <div className=" d-flex justify-content-between mx-5 mt-5">
              <h4 className="">Add&nbsp;New</h4>
              <div className="btnp d-flex">
                <button
                  className="button1 mx-3 px-4"
                  onClick={() => {
                    navigate("/All_Events");
                  }}
                >
                  <small>Cancel</small>
                </button>
                <button type="submit" className="button1 px-5">
                  <small>Add</small>
                </button>
              </div>
            </div>
            {/*  */}
            <div className="for_Form my-4">
              <Container fluid>
                <div className="UploadImages">
                  &nbsp; &nbsp;
                  <Form>
                    <div className="mb-5 d-inline-block">
                      <div className="my-2 fw-bolder">
                        <small>Upload images</small>
                      </div>
                      <div className="dropzone" {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div className="dragcontent">
                          {isDragActive ? `Drag Active ` : ""}
                          <AddIcon />
                        </div>
                      </div>
                      <div>
                        {files.map((file, index) => (
                          <image src={file} key={index} className="dropimage" />
                        ))}
                      </div>
                      {files.length > 0 ? (
                        <>
                          <h5 className="text-left text-dark">
                            <span>
                              <small>{files.length} pictures selected</small>
                            </span>{" "}
                            <span
                              className="mx-4 text-danger pe-auto crowicon"
                              onClick={() => {
                                setshowupload(false);
                                setfiles([]);
                              }}
                            >
                              x
                            </span>
                          </h5>
                        </>
                      ) : (
                        ""
                      )}

                      {uploaded > 0 && (
                        <>
                          <div className="progress mt-4">
                            <div
                              className="progress-bar progress-bar-info progress-bar-striped"
                              striped={true}
                              variant="success"
                              role="progressbar"
                              aria-valuenow={uploaded}
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: `${uploaded}%` }}
                            >
                              {`${uploaded}%`}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </Form>
                </div>
                <Row xs="1" sm="1" md="2" lg="3" xl="3">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Event Name</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="eventname"
                        placeholder="Event Name"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Category</small>
                      </Form.Label>
                      <Form.Control
                        type="Category"
                        name="Category"
                        placeholder="Category"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Sub-Category</small>
                      </Form.Label>
                      <Form.Control
                        type="category"
                        name="Category"
                        placeholder="Sub-Category"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                {/* ==============SECONDROW=============== */}
                <Row xs="1" sm="1" md="1" lg="1" xl="1">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Description</small>
                      </Form.Label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </Form.Group>
                  </Col>
                </Row>
                {/*  */}
                <Row xs="1" sm="1" md="2" lg="3" xl="3">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Organized by</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Organized by"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Location</small>
                      </Form.Label>
                      <Form.Control
                        type="location"
                        name="endtime"
                        placeholder="Location"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Date</small>
                      </Form.Label>
                      <Form.Control
                        type="Date"
                        name="Date"
                        placeholder="Date"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                {/*  */}
                <Row xs="1" sm="1" md="2" lg="3" xl="3">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Start Time</small>
                      </Form.Label>
                      <Form.Control
                        type="time"
                        name="starttime"
                        placeholder="Start Time"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">End Time</small>
                      </Form.Label>
                      <Form.Control
                        type="time"
                        name="endtime"
                        placeholder="End Time"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Registration Fee</small>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="registrationfee"
                        placeholder="Registration Fee"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                {/*  */}
                <Row xs="1" sm="1" md="2" lg="3" xl="3">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Availiable Seats</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Availiable Seats"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Video URL</small>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="endtime"
                        placeholder="Video URL"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Website Link</small>
                      </Form.Label>
                      <Form.Control
                        type="url"
                        name="url"
                        placeholder="Website Link"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                {/*  */}
                <Row xs="1" sm="1" md="2" lg="3" xl="3">
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">FaceBook Link</small>
                      </Form.Label>
                      <Form.Control
                        type="Url"
                        placeholder="FaceBook Link"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4" controlId="#">
                      <Form.Label>
                        <small className="text fw-bold">Instagram Link</small>
                      </Form.Label>
                      <Form.Control
                        type="Url"
                        name="endtime"
                        placeholder="Instagram Link"
                        className="py-2"
                        // onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
              {/* Form */}
            </div>
          </Form>
        </Box>
      </Box>
    </div>
  );
};

export default AddNewEvent;
