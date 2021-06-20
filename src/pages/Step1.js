import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddPhotoAlternateOutlinedIcon from "@material-ui/icons/AddPhotoAlternateOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Button,
} from "@material-ui/core";

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
      backgroundColor: theme.palette.common.white,
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

const Step1 = ({
  title,
  setTitle,
  description,
  setDescription,
  difficulty,
  setDifficulty,
  type,
  setType,
  setGameImg,
  isPremiumUser,
  breakpoint,
  width,
  privacy,
  setPrivacy,
  setPath,
  errors,
  handleCancel,
}) => {
  const classes = useStyles();

  const handleNext = () => {};

  const handleSetType = (e) => {
    const value = e.target.value;
    if (value === "quiz") {
      setType(value);
      setPath("/games/quizzes");
    }
    if (value === "something") {
      setType(value);
      setPath("/games/something");
    }
  };

  return (
    <form style={{ width: "100%", flexGrow: 1, marginTop: "40px" }}>
      <Grid container spacing={3} alignItems="flex-start">
        <Grid item xs={width < breakpoint ? 12 : 6}>
          <TextField
            label="Title"
            placeholder="What's it called?"
            className={classes.textField}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            required
            autoFocus
            error={Boolean(errors.title)}
            helperText={errors.title}
            value={title}
            inputProps={{ maxLength: 32 }}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={width < breakpoint ? 12 : 6}>
          <FormControl variant="outlined" className={classes.textField}>
            <InputLabel htmlFor="choose-photo-input">Cover Photo</InputLabel>
            <OutlinedInput
              type="file"
              startAdornment={<AddPhotoAlternateOutlinedIcon />}
              className={classes.photoField}
              endAdornment={
                <Typography style={{ fontSize: 10 }}>0.5MB Max</Typography>
              }
              inputProps={{
                accept: "image/*",
                id: "choose-photo-input",
                "aria-describedby": "choose-photo-helper-text",
              }}
              label="Cover Photo"
              onChange={(e) => setGameImg(e.target.files[0])}
              required
              error={Boolean(errors.gameImg)}
            />
            <FormHelperText
              id="choose-photo-helper-text"
              style={{ color: "#f44336" }}
            >
              {errors.gameImg}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            placeholder="What's it about?"
            className={classes.textField}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            required
            multiline
            inputProps={{ maxLength: 100 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={Boolean(errors.description)}
            helperText={errors.description}
          />
        </Grid>
        {/* <Grid item xs={width < breakpoint ? 12 : 4}>
        <FormControl variant="outlined" className={classes.textField}>
          <InputLabel htmlFor="game-type-input">Game Type</InputLabel>
          <Select
            native
            label="Game Type"
            inputProps={{
              name: "game-type",
              id: "game-type-input",
              "aria-describedby": "game-type-helper-text",
            }}
            required
            value={type}
            onChange={handleSetType}
            error={Boolean(errors.type)}
            helperText={errors.type}
          >
            <option aria-label="None" value="" />
            <option value="quiz">Quiz</option>
            <option value="something">Something else</option>
          </Select>
          <FormHelperText
            id="game-type-helper-text"
            style={{ color: "#f44336" }}
          >
            {errors.type}
          </FormHelperText>
        </FormControl>
      </Grid> */}
        <Grid item xs={width < breakpoint ? 12 : 4}>
          <FormControl variant="outlined" className={classes.textField}>
            <InputLabel htmlFor="game-difficulty-input">
              Game Difficulty
            </InputLabel>
            <Select
              native
              label="Game Difficulty"
              inputProps={{
                name: "game-difficulty",
                id: "game-difficulty-input",
                "aria-describedby": "game-difficulty-helper-text",
              }}
              required
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              error={Boolean(errors.difficulty)}
              helperText={errors.difficulty}
            >
              <option aria-label="None" value="" />
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Select>
            <FormHelperText
              id="game-difficulty-helper-text"
              style={{ color: "#f44336" }}
            >
              {errors.difficulty}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={width < breakpoint ? 12 : 4}>
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
              name="game-privacy"
              value={privacy}
              onChange={(e) => setPrivacy(e.target.value)}
              error={Boolean(errors.privacy)}
              helperText={errors.privacy}
            >
              <FormControlLabel
                value="public"
                control={<Radio />}
                label="Public"
              />
              <FormControlLabel
                value="private"
                control={<Radio />}
                label="Private"
                disabled={!isPremiumUser}
              />
            </RadioGroup>
          </Tooltip>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            onClick={handleNext}
            variant="contained"
            color="secondary"
            fullWidth
            style={{ height: "52px" }}
          >
            Next
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleCancel}
            variant="contained"
            fullWidth
            style={{ height: "52px" }}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Step1;
