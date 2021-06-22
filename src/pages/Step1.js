import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import QuestionsAndAnswers from "../svgComponents/components/QuestionsAndAnswers";
import Tooltip from "@material-ui/core/Tooltip";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Container,
  Grid,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Button,
} from "@material-ui/core";
import { useViewport } from "../context/viewport";

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
    [theme.breakpoints.up("sm")]: {
      margin: "0 24px",
    },
  },
  textField: {
    width: "100%",
    "& div": {
      background: theme.palette.common.white,
    },
  },
  photoField: {
    width: "100%",
    "& input": {
      flexGrow: 1,
      width: "auto",
      marginLeft: "8px",
    },
  },
  photoInputContainer: {
    borderRadius: theme.spacing(0.5),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${theme.spacing(2)}px ${theme.spacing(1.75)}px`,
    border: "1px solid rgba(0, 0, 0, 0.23)",
    "&:hover": {
      border: "1px solid rgba(0, 0, 0, 0.80)",
    },
  },
}));

const validationSchema = yup.object({
  title: yup
    .string("What's it called?")
    .max(32, "Title must be under 33 characters long.")
    .required("Title is required"),
  gameImg: yup.string().required("Game photo is required"),
  description: yup
    .string("What's it about?")
    .max(100, "Description must be under 101 characters long.")
    .required("Description is required"),
  type: yup
    .string("Game Type")
    .oneOf(["quiz", "something"])
    .required("Game type is required."),
  privacy: yup
    .string("Game privacy")
    .oneOf(["public", "private"])
    .required("Game privacy is required."),
});

const Step1 = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gameImg, setGameImg] = useState(null);
  const [type, setType] = useState("quiz");
  const [privacy, setPrivacy] = useState("public");
  const [path, setPath] = useState("/games/quizzes");
  const isPremiumUser = false;
  const { width } = useViewport();
  const breakpoint = 1200;

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      gameImg: null,
      type: "quiz",
      privacy: "public",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleNext = (e) => {
    formik.handleSubmit(e);
  };

  const handleSetType = (e) => {
    const value = e.target.value;
    if (value === "quiz") {
      setPath("/games/quizzes");
    }
    if (value === "something") {
      setPath("/games/something");
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: width < breakpoint ? "column-reverse" : "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        style={{ flexGrow: 1, marginTop: "40px", marginRight: "40px" }}
        onSubmit={handleNext}
      >
        <Grid container spacing={3} alignItems="flex-start" justify="center">
          <Grid item xs={width < breakpoint ? 12 : 6}>
            <TextField
              placeholder="What's it called?"
              id="title"
              name="title"
              label="Title"
              className={classes.textField}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              required
              autoFocus
              value={formik.values.title}
              inputProps={{ maxLength: 32 }}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={width < breakpoint ? 12 : 6}>
            <FormControl
              variant="outlined"
              error={formik.touched.gameImg && Boolean(formik.errors.gameImg)}
              className={classes.textField}
            >
              <InputLabel htmlFor="gameImg">Cover Photo</InputLabel>
              <OutlinedInput
                type="file"
                className={classes.photoField}
                value={formik.values.gameImg}
                startAdornment={() => <div />}
                endAdornment={
                  <Typography style={{ fontSize: 10 }}>0.5MB Max</Typography>
                }
                inputProps={{
                  accept: "image/*",
                  id: "gameImg",
                }}
                onChange={formik.handleChange}
                required
                name="gameImg"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              id="description"
              name="description"
              placeholder="What's it about?"
              className={classes.textField}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              required
              multiline
              inputProps={{ maxLength: 100 }}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Grid>
          <Grid item xs={width < breakpoint ? 12 : 6}>
            <FormControl
              variant="outlined"
              error={formik.touched.type && Boolean(formik.errors.type)}
              className={classes.textField}
            >
              <InputLabel htmlFor="game-type-input">Game Type</InputLabel>
              <Select
                native
                label="Game Type"
                id="type"
                name="type"
                inputProps={{
                  name: "game-type",
                  id: "game-type-input",
                }}
                required
                value={formik.values.type}
                onChange={(e) => {
                  handleSetType(e);
                  formik.handleChange(e);
                }}
              >
                <option value="quiz">Quiz</option>
                <option value="something">Something else</option>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={width < breakpoint ? 12 : 6}>
            <Tooltip
              title={
                isPremiumUser
                  ? "Select game privacy."
                  : "Only premium accounts can have private games."
              }
              placement="top"
            >
              <RadioGroup
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
                row
                aria-label="game-privacy"
                name="privacy"
                id="privacy"
                error={formik.touched.privacy && Boolean(formik.errors.privacy)}
                value={formik.values.privacy}
                onChange={formik.handleChange}
              >
                <FormControlLabel
                  value="public"
                  control={<Radio />}
                  label="Public"
                  labelPlacement="end"
                />
                <Typography style={{ color: "#586279" }}>
                  Everyone can see public games.
                </Typography>
                <FormControlLabel
                  value="private"
                  control={<Radio />}
                  label="Private"
                  disabled={!isPremiumUser}
                />
                <Typography
                  style={{
                    color: isPremiumUser ? "#586279" : "rgba(0,0,0,0.38",
                  }}
                >
                  Only you can view private games.
                </Typography>
              </RadioGroup>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ height: "52px", marginBottom: 0 }}
            >
              Next
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" style={{ marginTop: 0 }} size="large">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          Game Factory
        </Typography>
        <QuestionsAndAnswers
          width={width < breakpoint ? 400 : 550}
          height={width < breakpoint ? 300 : 475}
        />
      </div>
    </Container>
  );
};

export default Step1;
