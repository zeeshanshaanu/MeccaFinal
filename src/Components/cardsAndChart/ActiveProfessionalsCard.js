import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Logo1 from "../../Assets/Images/Logo1.png";
import Typography from "@mui/material/Typography";
//
//
export default function ActiveProfessionalsCard() {
  return (
    <Card className="CardsBorderRadius">
      <CardContent>
        <Typography
          sx={{ fontSize: 16 }}
          gutterBottom
          className="d-flex justify-content-between px-2"
        >
          <div className="for_text">Active&nbsp;Professionals</div>
          <Link to="" className="more_details fw-bold">
            <small>View&nbsp;details</small>
          </Link>
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color="text.secondary"
          className="fw-bolder px-2"
        >
          Today
        </Typography>
        <Typography variant="body2">
          <Table>
            <TableBody>
              <TableRow className="p-0">
                <TableCell className="p-0">
                  <img src={Logo1} alt="Logo1.png" className="Logo1" />
                  Jack Ma
                </TableCell>
                <TableCell className="p-0">10:45 am</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="p-0">
                  <img src={Logo1} alt="Logo1.png" className="Logo1" />
                  Jack Ma
                </TableCell>
                <TableCell className="p-0">10:45 am</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="p-0">
                  <img src={Logo1} alt="Logo1.png" className="Logo1" />
                  Jack Ma
                </TableCell>
                <TableCell className="p-0">10:45 am</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Typography>
      </CardContent>
    </Card>
  );
}
