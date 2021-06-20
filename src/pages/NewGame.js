import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import QuizType from "../svgComponents/components/QuizType";
import Step1 from "./Step1";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useViewport } from "../context/viewport";
import FemaleOnComputer from "../svgComponents/gamifyIcons/FemaleOnComputer";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 94px",
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  header: {
    margin: "0 10px",
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {
      margin: "0 24px",
    },
  },
}));

const NewGame = () => {
  const history = useHistory();
  const classes = useStyles();
  const [stepNumber, setStepNumber] = useState(0);
  const [path, setPath] = useState("");
  const { width } = useViewport();
  const breakpoint = 1200;

  useEffect(() => {
    if (Boolean(path)) setStepNumber(1);
  }, [path]);

  const handleCancel = () => history.goBack();

  return (
    <Container className={classes.container}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FemaleOnComputer
          height={width < breakpoint ? 40 : 60}
          width={width < breakpoint ? 40 : 60}
        />
        <Typography variant="h2" className={classes.header}>
          Game Factory
        </Typography>
        <FemaleOnComputer
          height={width < breakpoint ? 40 : 60}
          width={width < breakpoint ? 40 : 60}
        />
      </div>
      {stepNumber === 0 && (
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={12} style={{ textAlign: "center", marginTop: "40px" }}>
            <Typography variant="h4">Select Game Type</Typography>
          </Grid>
          <Grid
            item
            xs={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <QuizType
              width={200}
              height={350}
              onClick={() => setPath("/games/quizzes")}
            />
          </Grid>
          <Grid
            item
            xs={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <QuizType
              width={200}
              height={350}
              onClick={() => setPath("/games/quizzes")}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={handleCancel}
              variant="contained"
              fullWidth
              style={{ height: "52px", fontWeight: 700 }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      )}
      {stepNumber === 1 && <Step1 width={width} breakpoint={breakpoint} />}
    </Container>
  );
};

export default NewGame;
