import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import classnames from "classnames";
import { setGameForm } from "../store/newGame/newGameActions";
import { useSpring, animated, config } from "react-spring";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import QuestionsAndAnswers from "../svgComponents/components/QuestionsAndAnswers";
import Tooltip from "@material-ui/core/Tooltip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  FormControl,
  FormControlLabel,
  Container,
  Grid,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Button,
  Box,
} from "@material-ui/core";
import { useViewport } from "../context/viewport";

const useStyles = makeStyles((theme) => ({
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "column-reverse",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  form: { flexGrow: 1, marginTop: "40px", marginRight: "40px" },
  gridContainer: {
    backgroundColor: "#c8d0e749",
    borderRadius: "0.7rem",
    boxShadow: `.3rem .3rem .6rem ${theme.palette.background.greyLight2}, -.2rem -.2rem .5rem ${theme.palette.common.white}`,
  },
  textField: {
    width: "100%",
    "& div": {
      background: theme.palette.common.white,
    },
  },
  photoField: {
    width: "100%",
    cursor: "pointer",
    "& input": {
      flexGrow: 1,
      width: "auto",
      marginLeft: "8px",
      cursor: "pointer",
    },
  },
  item: {
    paddingTop: `${theme.spacing(4)}px !important`,
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

const NewGame = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [tagInputValue, setTagInputValue] = useState("");
  const [path, setPath] = useState("/new-game/quiz");
  const isPremiumUser = false;
  const [animatedContainerStyle, animate] = useSpring(() => ({
    from: { x: 500, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config: config.wobbly,
    delay: 200,
  }));
  const { width } = useViewport();
  const breakpoint = 1200;

  useEffect(() => animate(), []);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      gameImg: null,
      type: "quiz",
      privacy: "public",
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      if (!path) {
        alert("No path set.");
        return;
      }
      if (Object.values(formik.errors).some((value) => Boolean(value))) {
        alert("Errors");
        return;
      }
      const gameForm = {
        title: values.title,
        description: values.description,
        gameImg: values.gameImg,
        type: values.type,
        tags,
        privacy: values.privacy,
      };
      dispatch(setGameForm(gameForm));
      history.push(path);
    },
  });

  const handleSetType = (e) => {
    const value = e.target.value;
    if (value === "quiz") {
      setPath("/new-game/quiz");
    }
    if (value === "something") {
      setPath("/new-game/something");
    }
  };

  return (
    <animated.div style={animatedContainerStyle}>
      <Container className={classnames(classes.flexCenter, classes.container)}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={3}
            alignItems="flex-start"
            justify="center"
            className={classes.gridContainer}
          >
            <Grid
              item
              xs={width < breakpoint ? 12 : 6}
              className={classes.item}
            >
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
            <Grid
              item
              xs={width < breakpoint ? 12 : 6}
              className={classes.item}
            >
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
                    <Typography style={{ fontSize: 10 }}>0.5 MB Max</Typography>
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
            <Grid item xs={12} className={classes.item}>
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
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </Grid>
            <Grid
              item
              xs={width < breakpoint ? 12 : 6}
              className={classes.item}
            >
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
            <Grid
              item
              xs={width < breakpoint ? 12 : 6}
              className={classes.item}
            >
              <Autocomplete
                multiple
                freeSolo
                id="tags"
                options={["ESL", "Math", "History"]}
                value={tags}
                inputValue={tagInputValue}
                onChange={(_e, newValue) => {
                  setTags(newValue);
                }}
                onInputChange={(e, newInputValue) => {
                  const options = newInputValue.split(",");
                  if (options.length > 1) {
                    setTags(
                      tags
                        .concat(options)
                        .map((x) => x.trim())
                        .filter((x) => x)
                    );
                  } else {
                    setTagInputValue(newInputValue);
                  }
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Tags"
                    InputLabelProps={{ shrink: true }}
                    placeholder="Game tags separated by a comma"
                    variant="outlined"
                    className={classes.textField}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} className={classes.item}>
              <Box>
                <Tooltip
                  title={
                    isPremiumUser
                      ? "Select game privacy."
                      : "Only premium accounts can have private games."
                  }
                  placement="top"
                >
                  <RadioGroup
                    aria-label="game-privacy"
                    name="privacy"
                    id="privacy"
                    error={
                      formik.touched.privacy && Boolean(formik.errors.privacy)
                    }
                    value={formik.values.privacy}
                    onChange={formik.handleChange}
                  >
                    <div className={classes.flexCenter}>
                      <FormControlLabel
                        value="public"
                        control={<Radio />}
                        label="Public"
                        labelPlacement="end"
                      />
                      <Typography
                        style={{ color: "#586279", fontSize: "13px" }}
                      >
                        Everyone can see public games.
                      </Typography>
                    </div>
                    <div className={classes.flexCenter}>
                      <FormControlLabel
                        value="private"
                        control={<Radio />}
                        label="Private"
                        disabled={!isPremiumUser}
                      />
                      <Typography
                        style={{
                          color: isPremiumUser ? "#586279" : "rgba(0,0,0,0.38",
                          fontSize: "13px",
                        }}
                      >
                        Only you can view private games.
                      </Typography>
                    </div>
                  </RadioGroup>
                </Tooltip>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{
                    height: "52px",
                    marginBottom: 0,
                  }}
                >
                  Next
                </Button>
              </Box>
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
    </animated.div>
  );
};

export default NewGame;
